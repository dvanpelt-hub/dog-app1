'use strict';

function handleFormSubmit() {
    //This function handles the submit button for user input
  $("#dog-submit").submit((event) => {
    event.preventDefault();
    let dogValue = $("#dog-amount").val();
    console.log(dogValue);
    handleImageCall(dogValue);
  });
}

function handleImageCall(userInput) {
    //This function handles the user input and returns results accordingly
    if (userInput >= 3 && userInput <= 50) {
        fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .then(responseJson => console.log(responseJson));
    }
    else {
        //Uses a promise
        fetch(`https://dog.ceo/api/breeds/image/random/3`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(error => alert("Try again please"));
    }
};

function displayResults(responseJson) {
  console.log(responseJson);
  $(".image-results").html("");  
  responseJson.message.forEach(receivedImage => {
      $(".results").append(`<img src="${receivedImage}" class="image-results">`
      );
  //display the results section
      $(".results").removeClass("hidden");
  }
)};

$(function() {
    console.log("test");
    handleFormSubmit();
});