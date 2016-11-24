var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

	/*if(cardTwo === cardFour){
		alert("You found the match!");
	}
	else{
		alert("Sorry try again!");
	}*/

	var game-board = document.getElementById("game-board");

	var createBoard = function() {
	  for(var i = 0; i < cards.lenth; i+=1) {
		  var cardElement = document.createElement("div");
		  cardElement.className = "card";
		  board.appendChild(cardElement);
  }

}
