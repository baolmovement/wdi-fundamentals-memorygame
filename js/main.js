var cards = [
{  
rank: "queen", 
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
}, 
{ 
rank: "queen", 
suit: "diamonds", 
cardImage: "images/queen-of-diamonds.png"
},  
{  
rank: "king", 
suit: "hearts", 
cardImage: "images/king-of-hearts.png"
}, 
{ 
rank: "king", 
suit: "diamonds", 
cardImage: "images/king-of-diamonds.png"
}
];


var cardsInPlay = [];  


var checkForMatch = function(){ 
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
} 


var flipCard = function(){ 

var cardId = this.getAttribute('data-id');

var cardOne = cards[0];
cardsInPlay.push(cards[0].rank);
console.log("User flipped " + cards[0].rank);  
console.log(cards[0].cardImage);



var cardTwo = cards[2];
cardsInPlay.push(cards[2].rank);
console.log("User flipped " + cards[2].rank); 
console.log(cards[2].cardImage);

console.log(cards[0].src.setAttribute('src', this)

if (cardsInPlay.length === 2){alert("Sorry, try again!")} 
	else if (cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!");}   

checkForMatch;

};   

var createBoard = function(){ 
for (var i = 0; i < cards.length; i++) {   
	var cardElement = document.createElement('img');  
	cardElement.setAttribute('src', "images/back.png"); 
	cardElement.setAttribute(i,'data-id'); 
	cardElement.addEventListener('click',flipCard);   
	cardElement.appendChild('game-board')
};

createdBoard(); 





