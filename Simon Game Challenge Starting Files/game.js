var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

// function nextSequence() {
var randomNumber = Math.floor(Math.random() * 4);

var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

// var idOfElement = randomChosenColour;

$(randomChosenColour).click(function() {
    alert(randomChosenColour + " button clicked!")
})

// };

nextSequence();

// $("#green").click(function() {
//     alert("button clicked!");
// });