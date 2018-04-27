var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];  


var checkForMatch = function(){ 
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
} 


var flipCard = function(cardId){ 

var cardOne = cards[0];
cardsInPlay.push(cards[0]);
console.log("User flipped " + cards[0]); 

var cardTwo = cards[2];
cardsInPlay.push(cards[2]);
console.log("User flipped " + cards[2]);  


if (cardsInPlay.length === 2){alert("Sorry, try again!")} 
	else if (cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!");}   

checkForMatch;

};  

flipCard (0); 
flipCard (2);



