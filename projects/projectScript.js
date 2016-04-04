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