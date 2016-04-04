var projectList;    // List of all the projects

$.ajax({
    url: "projects.json",
    type: "GET",
    async: false,
    success: function (response) {
        projectList = response;
        console.log(projectList);
    },
    error: function (errorReport) {
        console.log('Error happened while trying to retrieve list of projects!');
    }
});

$(document).ready(function() {
    $.each(projectList, function(index, el) {
        var projectName = el;
        var projectJSON;

        $.ajax({
            url: projectName + "/data.json",
            type: "GET",
            async: false,
            success: function (response) {
                projectJSON = response;
                console.log(projectJSON);
                createProjectMarkup(projectJSON, '#projects .wrappingSectionContent')
            },
            error: function (errorReport) {
                console.log('Error happened while trying to retrieve ' + projectName + '!');
            }
        });


    });
});