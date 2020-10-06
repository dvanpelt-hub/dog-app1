'use strict';

function handleImageCall(userInput) {
    //This function handles the user input and returns results accordingly
    if (userInput >= 1 && userInput <= 50) {
        fetch(`https://dog.ceo/api/breeds/image/random/${userInput}?random=3`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .then(responseJson => console.log(responseJson));
    }
    else if (userInput < 1 || userInput > 50) {
        //Uses a promise
        alert("Please select a number between 1 and 50");
    }
    else {
        alert("Sorry, please enter an amount between 1 and 50");
    }
};

function displayResults(responseJson) {
  let myMap = responseJson.message;
  console.log("Here are the mapped results: " + myMap);
  console.log(responseJson);
  $(".results").html("");
  responseJson.message.forEach(responseImg => {
    $(".results").append(`<img src="${responseImg}" class="results">`);
  });  
  responseJson.message.forEach(myMap => {
      $(".image-results").replaceWith(
      `<img src="${myMap}" class="image-results">`
      );
  //display the results section
      $(".results").removeClass("hidden");
  }
)};

function handleFormSubmit() {
  //This function handles the submit button for user input
  $("#dog-submit").submit((event) => {
    event.preventDefault();
    let dogValue = $("#dog-amount").val();
    console.log(dogValue);
    handleImageCall(dogValue);
  });
}

$(function() {
    console.log("test");
    handleFormSubmit();
});

/*use the array function map which returns a <img> tags with the src containing the url

all these img tags should be wrapped in a parent div*/
