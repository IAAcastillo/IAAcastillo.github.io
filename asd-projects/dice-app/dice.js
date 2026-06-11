$(document).ready(function () {
  // Your code goes here
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "brown")
    .css("position", "absolute")
    .css("top", 42)
    .css("left", 42)
    .appendTo("#die");
});

function makeDot(top, left, elementID){
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "brown")
    .css("position", "absolute")
    .css("top", top)
    .css("left", left)
    .appendTo(elementID);
}


function rollDie(dieId){
  $(dieID).empty();
  var randomNum = Math.ceil(Math.random() * 6);
  console.log(randomNum);
  if (randomNum === 1) {
    makeDot(42, 42, dieID); // middle middle
} else if (randomNum === 2) {
    makeDot(21, 21, dieID); // top left
    makeDot(63, 63, dieID); // bottom right
} else if (randomNum === 3) {
    makeDot(21, 21, dieID); // top left
    makeDot(63, 63, dieID); // bottom right
    makeDot(42, 42, dieID); // middle middle
} else if (randomNum === 4) {
    makeDot(63, 63, dieID); // bottom right
    makeDot(21, 21, dieID); // top left
    makeDot(21, 63, dieID); // bottom left
    makeDot(63, 21, dieID); // top right
} else if (randomNum === 5) {
    makeDot(42, 42, dieID); // middle middle
    makeDot(63, 63, dieID); // bottom right
    makeDot(21, 21, dieID); // top left
    makeDot(21, 63, dieID); // bottom left
    makeDot(63, 21, dieID); // top right
} else if (randomNum === 6) {
    makeDot(42, 63, dieID); // middle right
    makeDot(42, 21, dieID); // middle left
    makeDot(63, 63, dieID); // bottom right
    makeDot(21, 21, dieID); // top left
    makeDot(21, 63, dieID); // bottom left
    makeDot(63, 21, dieID); // top right
}
}

function handleClick(){
  rollDie("#die");
}

//5

$("#die").on("click", handleClick);

//TODO 6
