$(document).ready(function () {
// variable for empty sports array
var sports = ["Lebron James", "basketball"];

$("#add-sport").on("click", function() {

// variable for giphy setup 
var sport = $(this).attr("data-name");
console.log(this);

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=NO2WKo6dxjBQxKkp7ZT04C50ZL1ocfO7";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);

var search = response.data;

  for (var i=0; i < search.length; i++) {
     // if(search[i].data.rating === "r" || search[i].rating === "pg-13" || search[i].rating === "g") {
          var gifDiv = $("<div>");
          var rating = search[i].rating;
          var p = $("<p>").text("Rating " + rating);
          var sportsImage = $("<img>");
          sportsImage.attr("src", search[i].images.fixed_height.url);
          gifDiv.prepend(p);
          gifDiv.prepend(sportsImage);
          $("#gifs").prepend(gifDiv);
      //};


    };
      
    });
    


// renderButtons ();

});

//Function to get buttons rendered on page
function renderButtons() {
    $("#buttons").empty();
    for (i=0; i < sports.length; i++) {
    var b = $("<button>");
    b.addClass("sport");
    b.attr("data-name", sports[i]);
    b.text(sports[i]);
    $("#buttons").append(b);
};
};

$("#add-sport").on("click", function(event) {
    event.preventDefault();
    var sport = $("#sportInfo").val().trim();
    sports.push(sport);
    console.log(sport);
   
renderButtons ();

});


});