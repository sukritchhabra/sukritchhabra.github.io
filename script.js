/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/

$(document).ready(function() {

    $.ajax({
      url: "/nav/footer.html",
      type: "GET"
    }).done(function( data ) {
        $('.addFooterHere')
            .after(data)
            .remove();
    });

    $.ajax({
      url: "/projects/index.html",
      type: "GET"
    }).done(function( data ) {
        var showOthersButton = '';
        showOthersButton = showOthersButton + '<div class="row showOthers">';
        showOthersButton = showOthersButton + '<div>';
        showOthersButton = showOthersButton + '<a href="http://sukritchhabra.com/projects"><button class="showButton">View all projects<span class="fa fa-external-link"></span></button></a>';
        showOthersButton = showOthersButton + '</div>';
        showOthersButton = showOthersButton + '</div>';
        
        var newData = $(data).find('section').parent();
        newData.find('.row').each(function(index, el) {
            if ($(this).attr('id') !== $('.addProjectHere').data('project')) {
                $(this).remove();
            }
        });

        newData.find('.wrappingSectionContent').append(showOthersButton);

        $('.addProjectHere')
            .after(newData)
            .remove();

        $('body').trigger('loadHWBs');
    });

    $('body').on('loadHWBs', function(event) {
        $('.loadHWB').each(function(index, el) {
            var block = $(this);
            var projectName = block.data('project');
            var getURL = '../hwb/hwb_' + projectName + '.html';

            $.ajax({
                url: getURL,
                type: "GET"
            }).done(function( data ) {
                block.find('p').append(data);
            });
        });
    });


    var previousScroll = 0;
    var changeNavColor = 1;
    var navChange = $('.firstSection').offset().top;
    navChange = navChange - 90;
    navChange = Math.floor(navChange);

    $(document).on('scroll', function(event) {
        var currentScroll = $(window).scrollTop();

        if(currentScroll <= previousScroll && changeNavColor == 0) {
            if(currentScroll < navChange) {
                $(document).trigger('navTransparent');
                changeNavColor = 1;
            }
        } else {
            if(currentScroll > navChange && changeNavColor == 1) {
                $(document).trigger('navBlack');
                changeNavColor = 0;
            }
        }
        previousScroll = currentScroll;
    });

    $(document).on('navTransparent', function() {
        $('nav').css('background-color', 'transparent');
    });

    $(document).on('navBlack', function() {
        $('nav').css('background-color', '#000');
    });

    var $window = $(window);
    var scrollTime = 0.1;
    var scrollDistance = 70;
    $window.on("mousewheel DOMMouseScroll", function(event){
        event.preventDefault();

        var delta = event.originalEvent.wheelDelta/80 || -event.originalEvent.detail/3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,
                overwrite: 5
            });
    });

    $('body').on('click', '.moreButton', function(event) {
        $(this).siblings('.more').slideToggle('400', function() {
            $(this).css('display', 'block');
        });
        $(this).siblings('.lessButton').slideToggle('400', function() {
            $(this).css('display', 'block');
        });
        $(this).slideToggle('100');
    });

    $('body').on('click', '.lessButton', function(event) {
        $(this).siblings('.more').slideToggle('400');
        $(this).siblings('.moreButton').slideToggle('400', function() {
            $(this).css('display', 'block');
        });
        $(this).slideToggle('100');
    });
});