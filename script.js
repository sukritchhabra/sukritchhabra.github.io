/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/

$(document).ready(function() {
    var $window = $(window);
    var scrollTime = 0.4;
    var scrollDistance = 150;

    $window.on("mousewheel DOMMouseScroll", function(event){

        event.preventDefault();

        var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,
                overwrite: 5
            });

    });
    
    $('.moreButton').on('click', function(event) {
        $(this).siblings('.more').slideToggle('400', function() {
            $(this).css('display', 'block');
        });
        $(this).siblings('.lessButton').slideToggle('400', function() {
            $(this).css('display', 'block');
        });
        $(this).slideToggle('100');
    });

    $('.lessButton').on('click', function(event) {
        $(this).siblings('.more').slideToggle('400');
        $(this).siblings('.moreButton').slideToggle('400', function() {
            $(this).css('display', 'block');
        });
        $(this).slideToggle('100');
    });
});