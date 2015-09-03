/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/

$(document).ready(function() {

    var numberOfPosts = $('.loadProjectTile').length - 1;

    var newHTML = '';
    newHTML = newHTML + '<div class="container wrappingSection">';
    newHTML = newHTML + '    <div class="row">';
    var opacityEnd = 80;


    $('.loadProjectTile').each(function(index, el) {
        var block = $(this);
        var projectName = block.data('project');
        var projectTitle = block.data('title');
        var imageURL = projectName + '/blogPageImage.jpg';

        newHTML = newHTML + '<div class="thumbnail increase-on-scroll-down" data-start="10" data-end="' + opacityEnd + '"><a href="http://sukritchhabra.com/blog/' + projectName + '" target="_blank"><img src="' + imageURL + '"></a><p>'+ projectTitle +'</p></div>';
        opacityEnd = opacityEnd - 5;
        if ((index+1)%4 == 0 && index != numberOfPosts) {
            newHTML = newHTML + '    </div>';
            newHTML = newHTML + '    <div class="row">';
            opacityEnd = 80;
        } else if (index == numberOfPosts) {
            newHTML = newHTML + '    </div>';
            newHTML = newHTML + '</div>';
        }
        console.log(newHTML);
    });

    $('.addRowHere').after(newHTML);
    $('.addRowHere').remove();
});