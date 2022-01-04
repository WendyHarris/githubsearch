$(document).ready(function(){

var resultList = $("#resultList"); 
resultList.text("This is from jQuery");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function () {
    resultList.toggle(500);
    
    if (toggleButton.text() == "Hide") toggleButton.text("Show");
    else toggleButton.text("Hide"); 
});

});