(function ($, window, document, undefined) {

  'use strict';

  $(function () {


    function init() {

        $('#space-oddity-player').jPlayer({
            ready: function () {
                $(this).jPlayer('setMedia', {
                    title: 'Space Oddity',
                    m4a: '../audio/space-oddity.m4a',
                    oga: '../audio/space-oddity.ogg'
                });
            },
            swfPath: '../dist/jplayer',
            supplied: 'm4a, oga',
            wmode: 'window',
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            toggleDuration: true
        });
    

        var i1 = $('.icon-one'),
            i2 = $('.icon-two'),
            i3 = $('.icon-three'),
            iAll = $('.icons-all');
    
        
        // .removeClass('fa-spin');
        // .addClass('pulse infinite');
        // .removeClass('pulse infinite');
        // .addClass('hinge');
        $('#space-oddity-player').bind($.jPlayer.event.timeupdate, function(event) { 
                var currentTime = Math.floor(event.jPlayer.status.currentTime);

                if (currentTime === 1){
                    i2.addClass('pulse infinite');
                }

                if (currentTime === 7){
                    i2.addClass('fa-rotate-180');
                }

                if (currentTime === 14){
                    i2.removeClass('fa-rotate-180');
                }

                if (currentTime === 29){
                    i1.removeClass('fa-star invisible').addClass('fa-globe');
                    i2.addClass('invisible');
                    i3.addClass('invisible');
                }

                if (currentTime === 30 ){
                    i2.removeClass('invisible fa-star fa-spin pulse infinite').addClass('fa-volume-up pulse infinite');
                }

                if (currentTime === 32 ){
                    i3.removeClass('invisible fa-star fa-spin').addClass('fa-user');
                }

                if (currentTime === 34 ){
                    iAll.addClass('invisible');
                }

                if (currentTime === 36 ){
                    i1.removeClass('invisible');
                }

                if (currentTime === 37 ){
                    i2.removeClass('invisible');
                }

                if (currentTime === 39 ){
                    i3.removeClass('invisible');
                }

                if (currentTime === 43 ){
                    iAll.addClass('invisible');
                }

                if (currentTime === 44 ){
                    i1.removeClass('fa-globe').addClass('fa-user');
                    i2.removeClass('fa-volume-up pulse infinite').addClass('fa-medkit');
                    i3.removeClass('fa-user').addClass('fa-android');
                    i1.removeClass('invisible');
                }

                if (currentTime === 45 ){
                    i2.removeClass('invisible');
                }

                if (currentTime === 47 ){
                    i3.removeClass('invisible');
                }

                if (currentTime === 50 ){
                    iAll.addClass('invisible');
                }

                if (currentTime === 51){
                    i1.removeClass('fa-user invisible').addClass('fa-globe');
                    i2.addClass('invisible');
                    i3.addClass('invisible');
                }

                if (currentTime === 52 ){
                    i2.removeClass('invisible fa-medkit').addClass('fa-volume-up pulse infinite');
                }

                if (currentTime === 54 ){
                    i3.removeClass('invisible fa-android').addClass('fa-user');
                }

                if (currentTime === 56 ){
                    iAll.addClass('invisible');
                }

                if (currentTime === 58){
                    i1.removeClass('fa-globe invisible').addClass('fa-clock-o');
                    i2.addClass('invisible');
                    i3.addClass('invisible');
                }

                if (currentTime === 60 ){
                    i2.removeClass('invisible fa-volume-up pulse infinite').addClass('fa-ge fa-spin');
                }

                if (currentTime === 61 ){
                    i3.removeClass('invisible fa-user').addClass('fa-check');
                }

                if (currentTime === 65 ){
                    iAll.addClass('invisible');
                    i1.removeClass('fa-clock-o');
                    i3.removeClass('fa-check');
                }

                if (currentTime === 66){
                    i2.removeClass('invisible fa-ge fa-spin').addClass('fa-fire');
                }

                if (currentTime === 68){
                    i2.removeClass('fa-fire').addClass('fa-heart pulse infinite');
                }

                if (currentTime === 72){
                    i2.removeClass('fa-heart pulse infinite').addClass('fa-rocket shake infinite');
                }

                if (currentTime === 82){
                    iAll.addClass('invisible');
                }

                if (currentTime === 83 ){
                    i1.addClass('fa-globe').removeClass('invisible');
                }

                if (currentTime === 84 ){
                    i2.removeClass('fa-rocket shake infinite invisible').addClass('fa-volume-up pulse infinite');
                }

                if (currentTime === 86 ){
                    i3.addClass('fa-user').removeClass('invisible');
                }

                if (currentTime === 92 ){
                    iAll.addClass('invisible');
                    i1.removeClass('fa-globe');
                    i2.removeClass('fa-volume-up pulse infinite');
                    i3.removeClass('fa-user');
                }

                if (currentTime === 93 ){
                    i2.addClass('fa-newspaper-o').removeClass('invisible');
                }

                // Now it's time to leave the capsule if you dare
                if (currentTime === 97 ){
                    i2.removeClass('fa-newspaper-o').addClass('invisible');
                }

                if (currentTime === 99 ){
                    i1.addClass('fa-clock-o').removeClass('invisible');
                }

                if (currentTime === 100 ){
                    i2.removeClass('fa-newspaper-o').addClass('fa-sign-out').removeClass('invisible');
                }

                if (currentTime === 102 ){
                    i3.addClass('fa-space-shuttle').removeClass('invisible');
                }

                if (currentTime === 106){
                    iAll.addClass('invisible');
                    i1.removeClass('fa-clock-o');
                    i2.removeClass('fa-sign-out');
                    i3.removeClass('fa-space-shuttle');
                }

                if (currentTime === 108 ){
                    i1.addClass('fa-user').removeClass('invisible');
                }

                if (currentTime === 109 ){
                    i2.removeClass('fa-sign-out').addClass('fa-volume-up pulse infinite').removeClass('invisible');
                }

                if (currentTime === 110 ){
                    i3.addClass('fa-globe').removeClass('invisible');
                }

                if (currentTime === 112){
                    iAll.addClass('invisible');
                    i1.removeClass('fa-user');
                    i2.removeClass('fa-volume-up pulse infinite');
                    i3.removeClass('fa-globe');
                }

                if (currentTime === 113 ){
                    i1.addClass('fa-space-shuttle').removeClass('invisible');
                }

                if (currentTime === 114 ){
                    i2.removeClass('fa-volume-up pulse infinite').addClass('fa-arrow-right').removeClass('invisible');
                }

                if (currentTime === 115 ){
                    i3.addClass('fa-sign-out').removeClass('invisible');
                }

                if (currentTime === 118){
                    iAll.addClass('invisible');
                    i1.removeClass('fa-space-shuttle');
                    i2.removeClass('fa-arrow-right');
                    i3.removeClass('fa-sign-out');
                }

                if (currentTime === 118){
                    i2.addClass('fa-android fa-spin').removeClass('invisible');
                }

                if (currentTime === 124){
                    i2.removeClass('fa-android fa-spin').addClass('invisible');
                }

                if (currentTime === 125){
                    i2.removeClass('invisible').addClass('fa-star fa-spin').removeClass('invisible');
                }

                if (currentTime === 131){
                    i2.removeClass('fa-star fa-spin').addClass('invisible');
                }

                if (currentTime === 132){
                    i2.removeClass('fa-star fa-spin').addClass('fa-space-shuttle fa-spin').removeClass('invisible');
                }

                //far above the world 2:19
                if (currentTime === 139){
                    i1.addClass('fa-space-shuttle fa-spin').removeClass('invisible');
                    i2.removeClass('fa-space-shuttle fa-spin').addClass('invisible');
                    i3.addClass('fa-globe').removeClass('invisible');
                }


                 if (currentTime === 148){
                    i3.addClass('blue').removeClass('invisible');
                }



            });



        function play () {
            $( this ).find('.fa').toggleClass('fa-play fa-pause');
            // $( '.star-one' ).toggleClass('animated hinge infinite');
        }

        function stop () {
            $('#.jp-play').find('.fa').removeClass('fa-pause');
            $('#.jp-play').find('.fa').addClass('fa-play');
            iAll.removeClass('fa-spin infinite animated pulse invisible');
        }


        $('.jp-play').click(play);
        $('.jp-stop').click(stop);

    }



    $(window).load(init);
  });


    

})(jQuery, window, document);
