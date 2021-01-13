
// Game strategy was inspired by the tutorial presented in the
// video: https://www.youtube.com/watch?v=ZniVgo8U7ek by Marina Fereira

// Create a constant representing a list of all HTML ".card" elements and
// store it in cardFaces using the "document.querySelectorAll" and inputing
// the data in the ".card" class.
const cardFaces = document.querySelectorAll(".card");

// Declaring constants 
let pickedCard = false;
let cardOne, cardTwo;
let cardsLocked = false;

// The "this" keyword value is dynamically set with respect to context.
// Here, the "this" value represents the element that triggered the event
// within the "cardFaces.forEach(card =>" loop which calls the pickCard
// function with a "click" event listener on the card. "In an event,
// "this" refers to the element that received the event." (source:
// https://www.w3schools.com/js/js_this.asp). In this case the event is
// the click referenced in the line of code below:
// cardFaces.forEach(card => card.addEventListener("click", pickCard));
function pickCard() {
    if (cardsLocked) return;
    if (this === cardOne) return;
    console.log ("card was clicked");
        // adding and toggling "flip" to the end of the HTML element
        // "cardOne.dataset.name" 
        this.classList.toggle("flip");
        if (!pickedCard) {
            // If !pickedCard = false then this is the 1st click on it
            // and pickedCard is switched to true here. The "!" in front
            // of the "pickedCard" is saying that if the opposite of the
            // default value ("true") is the value of the constant
            //  "pickedCard", then set the constant to "true".
            pickedCard = true;
            console.log(this);
            cardOne = this;
            // console.log({pickedCard, cardOne});
        } else {
            // card clicked for second time
            cardTwo = this;
            console.log({cardOne, cardTwo, pickedCard});
            // matching card test
            // console.log(cardOne.dataset.name);
            // console.log(cardTwo.dataset.name);

            matchTest();
        }  
}

// Matched cards test. The DOM "dataset.property" reads the HTML "data-"
// attribute from the HTML of the "name" defined on line 14 in HTML.
// Test if the "name" attribute passed to cardOne is equal to the "name"
// attribute passed to cardTwo. If true run function "cardsUsed", which 
// prevents the cards from being fliped over to their unmatched state.
// If false, run function "reflipCard" which flips cards over to their
// unmatched state with the "neutral" image.
// The reference on how to use "dataset" for data attribute extraction:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset
function matchTest() {
if (cardOne.dataset.name === cardTwo.dataset.name) {
    cardsUsed();
 } else {
   reflipCard();
 }
}

// The cardsUsed function prevents reflipping a matched pair by removing
// the "click" eventListener from the cardOne and cardTwo constants and
// then exectuting the pickCard function again. 
function cardsUsed() {
    cardOne.removeEventListener("click", pickCard);
    cardTwo.removeEventListener("click", pickCard);

    boardReset();
}

// When the picked cards are not a match. This is called in the matchTest
// function in that function's else statement. The purpose is to flip the
// cards over again if the two that were picked did not match. This is
// achieved by removing the "flip" attribute from the classList element
function reflipCard() {
    cardsLocked = true;
    setTimeout(() => {
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    boardReset();
    }, 1500);
}

// Using ES6 Destructuring Assignment to set the previously declared constants
// to values that will reset the board to a state where no cards have been picked.
// "The destructuring assignment syntax is a JavaScript expression that makes
// it possible to unpack values from arrays, or properties from objects, into
// distinct variables." (source: https://developer.mozilla.org/en-US/docs/Web
// /JavaScript/Reference/Operators/Destructuring_assignment)
function boardReset() {
    [pickedCard, cardsLocked] = [false, false];
    [cardOne, cardTwo] = [null, null];
}

// Reordering the cards in a separate function which is wrapped in an outer set 
// of parentheses with another set of parentheses right after that, making it
// an Immediatley Invoked Function Expression (IIFE), which is executed as
// soon as it is defined without calling it elsewhere
(function cardsReorder () {
    cardFaces.forEach(card => {
        let unorderCards = Math.floor(Math.random() * 15)
        card.style.order = unorderCards;
    });
})();

// Using the "".forEach" command to loop through the list of the html class
// ".card" elements which were stored within the array constant "cardFaces"
// whcih was defined in the first line of code. Then attach (with "=>"") an
// event listener with "addEventListener" to each of the cards and whenever
// that "click" event is heard then execute the "pickCard" function.
cardFaces.forEach(card => card.addEventListener("click", pickCard));

// Resetting the game with the "reset" button. Note: this does not keep
// score but only reloads the website with the location.reload command.
// The precious data is lost.
let reset = document.querySelector(".reset");
reset.addEventListener("click", function() {
location.reload();
})

// This function does not work. Intended to be the first part of a
// "Win" statement after completing the game.
function win () {
if (document.querySelectorAll(cardOne.card === "flip")) {
    console.log("win");
    }
}