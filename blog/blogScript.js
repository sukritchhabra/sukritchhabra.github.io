/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/

$(document).ready(function() {

    var $window = $(window);
    var scrollTime = 0.1;
    var scrollDistance = 70;

    /* Smooth scrolling effect. NOTE: This is not scrolling to a link, this is for general smooth scrolling. */
    $(window).on("mousewheel DOMMouseScroll", function(event){
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

    $.ajax({
      url: "../nav/footer.html",
      type: "GET"
    }).done(function( data ) {
        $('.addFooterHere')
            .after(data)
            .remove();
    });

    var numberOfPosts = $('.loadProjectTile').length - 1;
    var opacityEnd = 80;
    var opacityStart = 10;
    var newHTML = '';
    newHTML = newHTML + '<div class="container wrappingSection">';
    newHTML = newHTML + '    <div class="row">';

    $('.loadProjectTile').each(function(index, el) {
        var block = $(this);
        var projectName = block.data('project');
        var projectTitle = block.data('title');
        var imageURL = projectName + '/blogPageImage.jpg';

        newHTML = newHTML + '<div class="thumbnail increase-on-scroll-down" data-start="' + opacityStart + '" data-end="' + opacityEnd
                                + '"><a href="http://sukritchhabra.com/blog/' + projectName + '" target="_blank"><img src="'
                                + imageURL + '"></a><p>'+ projectTitle +'</p></div>';
        opacityEnd = opacityEnd - 5;
        opacityStart = opacityStart +5;
        if ((index+1)%4 == 0 && index != numberOfPosts) {
            newHTML = newHTML + '    </div>';
            newHTML = newHTML + '    <div class="row">';
            opacityEnd = 80;
            opacityStart = 10;
        } else if (index == numberOfPosts) {
            newHTML = newHTML + '    </div>';
            newHTML = newHTML + '</div>';
        }
        console.log(newHTML);
    });

    $('.addRowHere').after(newHTML);
    $('.addRowHere').remove();
});