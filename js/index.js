$(document).ready(function(){

var resultList = $("#resultList"); 
resultList.text("This is from jQuery");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function () {
    resultList.toggle(500);
    
    if (toggleButton.text() == "Hide") toggleButton.text("Show");
    else toggleButton.text("Hide"); 
});

$("#gitHubSearchForm").on("submit", function () {

    var searchPhrase = $("#searchPhrase").val();
    var useStars = $("#useStars").val();
    var langChoice = $("#langChoice").val(); 

    if (searchPhrase) {

        resultList.text("Performing search ... "); 

        var gitHubSearch = "https://api.github.com/search/repositories?q=" + searchPhrase;

        if (langChoice != "All") {
            gitHubSearch += "+language:" + langChoice; 
        }

        if (useStars) {
            gitHubSearch += "&sort=stars"; 
        }

        $.get(gitHubSearch, function(r) {
            displayResults(r.items); 
        });
    }

    return false; 
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