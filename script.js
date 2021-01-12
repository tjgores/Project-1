/* 
MVP requirements
This will be a flash card game

a grid of squares will be presented

the player will choose a random square

the squares will show animals when selected

the player views the image shown and tries to remembers it

another square is selected

if this square shows the same animal then the match is made and the images remain

if the square shows a different image then both images disappear and the player picks again

a message will display when all sqaures are matched to their pair

a button will offer to reset the game

styling will be minimal

stretch goals:
1) vibrating a match
2) tracking correct answers

*/

/*
PSEUDOCODE


*/
const cardFaces = document.querySelectorAll(".card");

let pickedCard = false;
let cardOne, cardTwo;
let cardsLocked = false;

function pickCard() {
    if (cardsLocked) return;
    if (this === cardOne) return;
    console.log ("card was clicked");
    console.log(this);
        this.classList.toggle("flip");
        if (!pickedCard) {
            // if !pickedCard = false then this is the 1st click on it
            pickedCard = true;
            cardOne = this;
            // console.log({pickedCard, cardOne, pickedCard});
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

function matchTest() {
// matched cards test
if (cardOne.dataset.name === cardTwo.dataset.name) {
    cardsUsed();
 } else {
   reflipCard();
 }
}

function cardsUsed() {
    // not reflipping a matched pair
    cardOne.removeEventListener("click", pickCard);
    cardTwo.removeEventListener("click", pickCard);

    boardReset();
}

// 
function reflipCard() {
    cardsLocked = true;
    setTimeout(() => {
    // not a match case
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    boardReset();
    }, 1500);
}

// using ES6 Destructuring Assignment to set the previously delared constants
// to valus that will reset the board to a state where no cards have been picked
function boardReset() {
    [pickedCard, cardsLocked] = [false, false];
    [cardOne, cardTwo] = [null, null];
}

// reordering the cards in a separate function which is wrapped in an outer set 
// of parentheses with another set of parentheses right after that, making it
// an Immediatley Invoked Function Expression (IIFE), which is executed as
// soon as it is defined
(function cardsReorder () {
    cardFaces.forEach(card => {
        let unorderCards = Math.floor(Math.random() * 15)
        card.style.order = unorderCards;
    });
})();

cardFaces.forEach(card => card.addEventListener("click", pickCard));

// Resetting the game with the "reset" button. Note: this does not keep
// score but only reloads the website
let reset = document.querySelector(".reset");
reset.addEventListener("click", function() {
location.reload();
})