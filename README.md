# JS FIRE PHP

Boilerplate and workflow for PHP development with SASS and Grunt. (Based upon Fireshell [getfireshell.com](http://getfireshell.com) the work by [Todd Motto](http://toddmotto.com) )

JavaScript task running, build processes, autominification and file concatenation, wrapped with an enhanced HTML5 boilerplated framework.

## Get started with JS FIRE PHP:

1. Clone the git repo — `git clone https://github.com/jorgestamatio/js-fire-php.git`
2. Run `bower install`
3. In the root of your directory run

## Development
    
    grunt

## Production Build

    grunt build




### Features

Here are some of the main features of FireShell:

* HTML5 framework, WAI-ARIA roles and HTML5 semantics
* Baseline HTML5 features, DNS prefetching, responsive meta
* PHP Server for development
* Encourages one-file CSS/JS in the view (HTML) for performance
* Includes jQuery CDN and relative fallback
* Includes Modernizr and HTML5 Shiv
* Google Universal Analytics snippet
* Included Bootstrap, Font Awesome and Animate CSS.
* Open source workflow with Grunt.js running on Node.js
* Automatic Grunt dependency installation, directory relocation and grunt tasks
* Dynamically appended copyright for JS/CSS
* Livereloading the browser and file injection upon changes
* Annotated Gruntfile.js for extending
* Built-in build script for auto-minification of CSS and JavaScript files for production
* Pre-setup Sass/SCSS files and folders for baseline project structure and imports
* Includes .editorconfig for consistent coding styles in IDEs
* Standard .gitignore to ignore minified files and standard ignorables such as .DS_Store
* JSHint .jshintrc file for configuring JavaScript linting
* No superfluous code comments
* Extremely lightweight footprint

## Scaffolding

````
JS FIRE PHP
├── app
│   ├── apple-touch-icon-precomposed.png
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   └── js
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── js
│   │   └── scripts.js
│   └── scss
│       ├── mixins
│       ├── modules
│       ├── partials
│       ├── vendor
│       └── style.scss
├── package.json
├── README.md
├── .bowerrc
├── .editorconfig
├── .gitignore
├── .jshintrc
├── bower.json
├── .travis.yml
├── README.md
└── Gruntfile.js
````

## License

#### The MIT License (MIT)

Copyright (c) FireShell

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
