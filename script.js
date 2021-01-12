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
            pickedCard = false;
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
}

function reflipCard() {
    cardsLocked = true;
    setTimeout(() => {
    // not a match case
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    cardsLocked = false;
    }, 1500);
}

function boardReset() {
    [pickedCard, boardReset] = [false, false];
    [cardOne, cardTwo] = [null, null];
}

cardFaces.forEach(card => card.addEventListener("click", pickCard));