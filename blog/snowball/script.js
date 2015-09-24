/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/

$(document).ready(function() {
    $('.displayList').on('click', function(event) {
        $('.articleList').slideToggle('slow');
    });

    $('.lightboxModal').fluidbox();

    $('body').on('click', '.displayList', function(event) {
        console.log('clicked on caret');
        $(this).find('.fa').toggleClass('fa-caret-down');
        $(this).find('.fa').toggleClass('fa-caret-up');
    });

});