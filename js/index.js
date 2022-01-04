$(document).ready(function(){

var resultList = $("#resultList"); 
resultList.text("This is from jQuery");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function () {
    resultList.toggle(500);
    
    if (toggleButton.text() == "Hide") toggleButton.text("Show");
    else toggleButton.text("Hide"); 
});

var gitHubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars"

$.get(gitHubSearch, function(r) {
    displayResults(r.items); 
});


function displayResults(results) {
    resultList.empty(); 
    $.each(results, function(i, item) {

        var newResult = $("<div class='result'>" + 
        "<div class='title'>" + item.name + "</div>" + 
        "<div> Language: " + item.language + "</div>" +
        "<div> Owner: " + item.owner.login + "</div>" +
        "</div>"); 

        newResult.hover(function () {
            $(this).css("background-color", "lightgray");
        }, function () {
            $(this).css("background-color", "transparent");
        });

        resultList.append(newResult); 
    }); 
}



});