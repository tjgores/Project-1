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

function pickCard() {
    // console.log ("card was clicked");
    // console.log(this);
        this.classList.toggle("flip");
    //     if (!pickedCard) {
    //         // if !pickedCard = false then this is the 1st click on it
    //      pickedCard = true;
    //      cardOne = this;
 
    //      console.log({pickedCard, cardOne});
    //  }
}

cardFaces.forEach(card => card.addEventListener("click", pickCard));