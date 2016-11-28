var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


	var game-board = document.getElementById("game-board");

	var createBoard = function() {
	  for(var i = 0; i < cards.lenth; i+=1) {
		  var cardElement = document.createElement("div");
		  cardElement.className = "card";
			cardElement.setAttribute('data-card', cards[i]);
			cardElement.addEventListener('click', isTwoCards);
		  gameboard.appendChild(cardElement);
  }

}

var isMatch = function() {
	if(cardsInPlay[1] == cardsInPlay[3]) {
		alert("You found the match!");
	}
	else{
		alert("Sorry, try again!");
	}
}

var isTwoCards = function() {

	cardsInPlay.push(this.getAttribute('data-card'));

	revealCard(this, cardsInPlay);

  if (cardsInPlay.length === 2) {

		    isMatch(cardsInPlay);

		    cardsInPlay = [];

		  }

		}
	var refreshCards = function(){
	   var cardsPlayed = document.querySelectorAll('[data-card]');
	   for(var i=0; i<cardsPlayed.length; i++){
		    cardsPlayed[i].innerHTML = " ";
	}

    cardsInPlay = [];
}

		//flip the card
		var revealCard = function(element, cards){
			if(cards.length === 2){
				  if(element.getAttribute('data-card')=="queen"){
					  element.innerHTML = "<img src='queenOakland.jpg', alt='Queen of Oakland'/>";
				}
				else{
					element.innerHTML = "<img src='kingOakland.jpg', alt='King of Oakland'/>";
				}
			}
			else if(element.getAttribute('data-card')=="queen"){
					element.innerHTML = "<img src='queenHayward.jpg', alt='Queen of Hayward'/>";
				}
				else{
					element.innerHTML = "<img src='kingHayward.jpg', alt='King of Hayward'/>";
				}
			}
		}
  createBoard();
