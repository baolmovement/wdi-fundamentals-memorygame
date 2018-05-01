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


function checkForMatch(){ 
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
		var cards = document.querySelectorAll("img");
		console.log(cards);
		setTimeout(function(){ 
			for (var i = 0; i < cards.length; i++) {
			  cards[i].setAttribute('src', 'images/back.png');
			}
			cardsInPlay = [];
		}, 1000);
	}
}


function flipCard() {
	var cardID = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID].rank);
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

function createBoard(){
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}


createBoard();
