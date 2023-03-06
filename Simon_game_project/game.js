var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

// function nextSequence() {

var randomNumber = Math.floor(Math.random() * 4);

var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$(idOfElement).fadeIn(100).fadeOut(100).fadeIn(100);

var idOfElement = "#" + randomChosenColour;

tmp = "#" + randomChosenColour;
if (tmp === idOfElement) {
    var audio = new Audio("sounds/yellow.mp3");
    audio.play();
};

// };

// nextSequence();