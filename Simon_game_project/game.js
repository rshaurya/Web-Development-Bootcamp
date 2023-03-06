var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

nextSequence();

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    var idOfElement = "#" + randomChosenColour;

    $(idOfElement).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

};



// document.lastElementChild.lastElementChild.querySelector(idOfElement);



// $(idOfElement).click(function() {

//     var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//     audio.play();
// });




// tmp = "#" + randomChosenColour;
// if (tmp === idOfElement) {
//     var audio = new Audio("sounds/yellow.mp3");
//     audio.play();
// }

// };

// nextSequence();