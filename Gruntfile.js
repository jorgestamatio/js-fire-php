/*!
 * JS Gruntfile
 * Based on FireShell and adapted for PHP
 * http://getfireshell.com
 * @author Todd Motto
 */

'use strict';

/**
 * Livereload and connect variables
 */

var phpMiddleware = require('connect-php');
var LIVERELOAD_PORT = 35729;


/**
 * Grunt module
 */
module.exports = function (grunt) {

  /**
   * Dynamically load npm tasks
   */
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  /**
   * FireShell Grunt config
   */
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /**
     * Set project info
     */
    project: {
      src: 'src',
      app: 'app',
      assets: '<%= project.app %>/assets',
      css: [
        '<%= project.src %>/scss/style.scss'
      ],
      js: [
        '<%= project.src %>/js/*.js'
      ]
    },

    /**
     * Project banner
     * Dynamically appended to CSS/JS files
     * Inherits text from package.json
     */
    tag: {
      banner: '/*!\n' +
              ' * <%= pkg.name %>\n' +
              ' * <%= pkg.title %>\n' +
              ' * <%= pkg.url %>\n' +
              ' * @author <%= pkg.author %>\n' +
              ' * @version <%= pkg.version %>\n' +
              ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
              ' */\n'
    },

    /**
     * Clean files and folders
     * https://github.com/gruntjs/grunt-contrib-clean
     * Remove generated files for clean deploy
     */
    clean: {
      dist: [
        '<%= project.assets %>/css/style.unprefixed.css',
        '<%= project.assets %>/css/style.prefixed.css'
      ]
    },

    /**
     * JSHint
     * https://github.com/gruntjs/grunt-contrib-jshint
     * Manage the options inside .jshintrc file
     */
    jshint: {
      files: [
        'src/js/*.js',
        'Gruntfile.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    /**
     * Concatenate JavaScript files
     * https://github.com/gruntjs/grunt-contrib-concat
     * Imports all .js files and appends project banner
     */
    concat: {
      dev: {
        files: {
          '<%= project.assets %>/js/scripts.min.js': '<%= project.js %>'
        }
      },
      options: {
        stripBanners: true,
        nonull: true,
        banner: '<%= tag.banner %>'
      }
    },

    /**
     * Uglify (minify) JavaScript files
     * https://github.com/gruntjs/grunt-contrib-uglify
     * Compresses and minifies all JavaScript files into one
     */
    uglify: {
      options: {
        banner: '<%= tag.banner %>'
      },
      dist: {
        files: {
          '<%= project.assets %>/js/scripts.min.js': '<%= project.js %>'
        }
      }
    },

    /**
     * Compile Sass/SCSS files
     * https://github.com/gruntjs/grunt-contrib-sass
     * Compiles all Sass/SCSS files and appends project banner
     */
    sass: {
      dev: {
        options: {
          style: 'expanded',
          banner: '<%= tag.banner %>'
        },
        files: {
          '<%= project.assets %>/css/style.unprefixed.css': '<%= project.css %>'
        }
      },
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= project.assets %>/css/style.unprefixed.css': '<%= project.css %>'
        }
      }
    },

    /**
     * Autoprefixer
     * Adds vendor prefixes automatically
     * https://github.com/nDmitry/grunt-autoprefixer
     */
    autoprefixer: {
      options: {
        browsers: [
          'last 2 version',
          'safari 6',
          'ie 9',
          'opera 12.1',
          'ios 6',
          'android 4'
        ]
      },
      dev: {
        files: {
          '<%= project.assets %>/css/style.min.css': ['<%= project.assets %>/css/style.unprefixed.css']
        }
      },
      dist: {
        files: {
          '<%= project.assets %>/css/style.prefixed.css': ['<%= project.assets %>/css/style.unprefixed.css']
        }
      }
    },

    /**
     * CSSMin
     * CSS minification
     * https://github.com/gruntjs/grunt-contrib-cssmin
     */
    cssmin: {
      dev: {
        options: {
          banner: '<%= tag.banner %>'
        },
        files: {
          '<%= project.assets %>/css/style.min.css': [
            '<%= project.src %>/components/normalize-css/normalize.css',
            '<%= project.assets %>/css/style.unprefixed.css'
          ]
        }
      },
      dist: {
        options: {
          banner: '<%= tag.banner %>'
        },
        files: {
          '<%= project.assets %>/css/style.min.css': [
            '<%= project.src %>/components/normalize-css/normalize.css',
            '<%= project.assets %>/css/style.prefixed.css'
          ]
        }
      }
    },

    /**
     * Build bower components
     * https://github.com/yatskevich/grunt-bower-task
     */
    bower: {
      dev: {
        dest: '<%= project.assets %>/components/'
      },
      dist: {
        dest: '<%= project.assets %>/components/'
      }
    },


     /**
     * Launch PHP Server and connect to LiveReload
     * Starts a local webserver and injects
     * livereload snippet
     * https://github.com/yatskevich/grunt-bower-task
     */
    php: {
         dev: {
             options: {
                hostname: 'localhost.dev',
                port: 9000,
                livereload: LIVERELOAD_PORT,
                open: true,
                base: 'app',
             }
         }
    },

    /**
     * Runs tasks against changed watched files
     * https://github.com/gruntjs/grunt-contrib-watch
     * Watching development files and run concat/compile tasks
     * Livereload the browser once complete
     */
    watch: {
      concat: {
        files: '<%= project.src %>/js/{,*/}*.js',
        tasks: ['concat:dev', 'jshint']
      },
      sass: {
        files: '<%= project.src %>/scss/{,*/}*.{scss,sass}',
        tasks: ['sass:dev', 'cssmin:dev', 'autoprefixer:dev']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= project.app %>/{,*/}*.{html,php}',
          '<%= project.assets %>/css/*.css',
          '<%= project.assets %>/js/{,*/}*.js',
          '<%= project.assets %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    }

    
  });

  /**
   * Default task
   * Run `grunt` on the command line
   */
  grunt.registerTask('default', [
    'sass:dev',
    'bower:dev',
    'autoprefixer:dev',
    'cssmin:dev',
    'jshint',
    'concat:dev',
    'php:dev',
    'watch'
  ]);

  /**
   * Build task
   * Run `grunt build` on the command line
   * Then compress all JS/CSS files
   */
  grunt.registerTask('build', [
    'sass:dist',
    'bower:dist',
    'autoprefixer:dist',
    'cssmin:dist',
    'clean:dist',
    'jshint',
    'uglify'
  ]);

};
