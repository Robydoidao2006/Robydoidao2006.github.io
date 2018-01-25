$( document ).ready(function() {


//array that will hold the new seached objects
var types = [];
var staticURL = [];
var animatedURL = [];

//this  whole peace of code display the 3 default buttons/gifs ///
$("button").on("click", function () {
     
  // Emptys the arrays
  animatedURL = [];
  staticURL = [];

  var type = $(this).attr("data-car");
    console.log("TEST", type);

  // Constructing a queryURL using the car name
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type +  "&api_key=dc6zaTOxFJmzC&limit=10";

  // Performing an AJAX request with the queryURL
  $.ajax({url: queryURL, method: "GET" }).done(function(response) {
    console.log(queryURL);

  // storing the data from the AJAX request in the results variable
  var results = response.data;
    console.log(response);

      // Looping through each result item
      for (var i = 0; i < results.length; i++) {

        animatedURL.push(results[i].images.fixed_height.url);
        staticURL.push(results[i].images.fixed_height_still.url);

        // Creating and storing a div tag
        var carDiv = $("<div>");

        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);

        // Creating and storing an image tag
        var carImage = $("<img>");

        carImage.attr("data-number", i)
        // Setting the src attribute of the image to a property pulled off the result item
        carImage.attr("src", results[i].images.fixed_height_still.url);

        // Appending the paragraph and image tag to the carDiv
        carDiv.append(p);
        carDiv.append(carImage);

        // Prependng the carDiv to the HTML page in the "#cardiv
        $("#carDiv").prepend(carDiv);

        carImage.click(function() {
          if ( $(this).attr("src") == staticURL[$(this).attr("data-number")] ) {
              $(this).attr("src", animatedURL[$(this).attr("data-number")])
          } else {
              $(this).attr("src", staticURL[$(this).attr("data-number")]);
          };
        });



      } //for loop
  }); //ajax/function response
}); //button function


// function displays new button
function displayButtons() {

    animatedURL = [];
    staticURL = [];

    //deleting the car type after add a new button
    $("#myButtons").empty();
    //looping the car types array
    for (var i = 0; i < types.length; i++) {
      //add buttons for each search
        var x = $('<button class="btn">');
        x.attr("type");
        x.attr("data-car", types[i]);
        x.text(types[i]);
        $("#myButtons").append(x);

    $("#myButtons").on('click', '.btn', function(){
        var type = $(this).attr("data-car");
          console.log("test", type);

        // Constructing a queryURL using the car name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type +  "&api_key=dc6zaTOxFJmzC&limit=10";

        // Performing an AJAX request with the queryURL
        $.ajax({url: queryURL, method: "GET"}).done(function(response) {
          console.log(queryURL);

        // storing the data from the AJAX request in the results variable
        var results = response.data;
          console.log(response);

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {

              animatedURL.push(results[i].images.fixed_height.url);
              staticURL.push(results[i].images.fixed_height_still.url);

              // Creating and storing a div tag
              var carDiv = $("<div>");

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + results[i].rating);

              // Creating and storing an image tag
              var carImage = $("<img>");

              carImage.attr("data-number", i)
              // Setting the src attribute of the image to a property pulled off the result item
              carImage.attr("src", results[i].images.fixed_height_still.url);

              // Appending the paragraph and image tag to the carDiv
              carDiv.append(p);
              carDiv.append(carImage);

              // Prependng the carDiv to the HTML page in the "#cardiv
              $("#carDiv").prepend(carDiv);
                // this event will make the gif start moving when click and stop when clicked again
              carImage.click(function() {
              if ( $(this).attr("src") == staticURL[$(this).attr("data-number")] ) {
                $(this).attr("src", animatedURL[$(this).attr("data-number")])
              } else {
                $(this).attr("src", staticURL[$(this).attr("data-number")]);

                };
             });
           } //for loop

       }); // ajax / function response
    }); // myButtons function
  } // for loop 
} // display button function

//listener function will take info from the seach bar then pushes it into the types array
$("#newGif").on("click", function(event) {
    event.preventDefault();
    var type = $("#carInput").val().trim();
    types.push(type);
      console.log(types);
    //cleans search bar
    $("#carInput").val('');
      displayButtons();
   

      });

});//document ready


