/**
 * Creates markup for a project and adds it to the page
 * @param  {[JSON]} projectData [Data of individual Project]
 * @param  {[String]} addTo       [Selector of the element this markup will be appended to]
 */
function createProjectMarkup(projectData, addTo) {
    var html = '';
    html = html + '<div class="row" id="' + projectData.id + '">'; // ' + projectData.id + '
    html = html + '    <div class="projectLinks">';

    $.each(projectData.links, function(index, val) {
        html = html + '        <a href="' + val + '" target="_blank"><span class="fa fa-' + index + '"></span></a>';
    });

    html = html + '    </div>';

    html = html + '    <h2 class="projectTitle"><a href="' + projectData.website + '" target="_blank">' + projectData.title + '</a></h2>';
    html = html + '    <h4 class="projectDuration">' + projectData.duration + '</h4>';

    html = html + '    <div class="projectImage">';
    html = html + '        <a href="' + projectData.website + '" target="_blank"><img src="http://sukritchhabra.com/projects/' + projectData.id  + '/image.jpg' + '" alt=""></a>';
    html = html + '    </div>';

    html = html + '    <div class="itemBody projectBody">';
    html = html + '        <h3>Description</h3>';
    html = html + '        <div class="description">';
    html = html + '            <p>';
    html = html + projectData.description;
    html = html + '            </p>';
    html = html + '        </div>';

    if (projectData.builtAs != undefined) {
    html = html + '        <h3>Title built under</h3>';
    html = html + '        <div class="builtAs"><a href="' + projectData.builtAs.link + '" target="_blank">' + projectData.builtAs.as + '</a></div>';
    }


    if (projectData.highlights != undefined) {
    html = html + '        <h3>Highlight</h3>';
    html = html + '        <div class="highlight">';
    html = html + '            <ul>';

    $.each(projectData.highlights, function(index, val) {
        html = html + '                <li><a href="' + val.link + '" target="_blank">' + val.highlight + '</a></li>';
    });

    html = html + '            </ul>';
    html = html + '        </div>';
    }

    if (projectData.people != undefined) {
    html = html + '        <button class="more-less-button moreButton">More about this project</button>';
    html = html + '        <span class="more">';

    html = html + '            <h3>Other People who were a part of this project</h3>';
    html = html + '            <div class="people">';
    html = html + '                <ul>';

    $.each(projectData.people, function(index, val) {
        html = html + '                    <li><a href="' + val.link + '"><img src="' + val.img + '" alt=""><p>' + val.person + '</p></a></li>';
    });

    html = html + '                </ul>';
    html = html + '            </div>';
    html = html + '        </span>';
    html = html + '        <button class="more-less-button lessButton">Less</button>';
    }

    html = html + '    </div>';
    html = html + '</div>';

    $(addTo).append(html);
}