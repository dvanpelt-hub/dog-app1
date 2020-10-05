'use strict';

function handleFormSubmit() {
  $("#dog-submit").submit((event) => {
    event.preventDefault();
    let dogValue = $("#dog-amount").val();
    console.log(dogValue);
    handleImageCall(dogValue);
  });
}

function handleImageCall(userInput) {
    if (userInput >= 3 && userInput <= 50) {
        fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
    }
    else {
        fetch(`https://dog.ceo/api/breeds/image/random/3`)
        .then((response) => response.json())
        .then((responseJson) => console.log(responseJson))
        .catch((error) => alert("Try again please"));
    }
};

$(function() {
    console.log("test");
    handleFormSubmit();
});