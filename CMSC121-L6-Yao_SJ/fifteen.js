var square;            			
var xRow = '300px'; 			
var yColumn = '300px'; 			

window.onload = function(){
	var puzzleSquare = document.getElementById('puzzlearea');
	square = puzzleSquare.getElementsByTagName('div');          

	for (var i = 0; i < square.length; i++) {
		square[i].className = 'puzzlebox';                    
		square[i].style.left = (i % 4 * 100) + 'px';          //Horizontal Row
		square[i].style.top = (parseInt(i / 4) * 100) + 'px'; //Vertical Row
		square[i].style.backgroundPosition = '-' + square[i].style.left + ' ' + '-' + square[i].style.top; //Shows Zootopia BG

		square[i].onmouseover = function() {
			if (legalMove(parseInt(this.innerHTML - 1))) {   //checks if chosen square can be moved
				$(this).addClass('hover');                 	//alert user possible moves highlighted in red
			}
	    };

	    square[i].onmouseout = function() {                   //Do not show highlights when mouse is not hovered on any square.
			$(this).removeClass('hover');                  
    	};

    	square[i].onclick = function() {
      		if(legalMove(parseInt(this.innerHTML - 1))) {    //Let the user move the square if it is a legal move.
        		move(this.innerHTML - 1);                  	
				return;
			}
		};

	}

	$('#shufflebutton').click(shuffleButton);
};

function shuffleButton(){ 
	var random = parseInt(Math.random() * (500 - 100)) + 100; 				//generates a random integer between 100-500

	for(var i = 0; i < random; i++){
		for(var traverse = 0; traverse < square.length; traverse++){        //traverses through the squarees
			if(legalMove(traverse)){                             			//if the current square can be moved,
				let rand = parseInt(Math.random() * 2); 					//generate 0 or 1
				if(rand % 2 == 0){                      					//if rand is even,
					move(traverse);                           				//move the current square to the empty space
				}			
			}
		}
	}
}

function move(piece) {
	var selected = square[piece].style.left;
	square[piece].style.left = xRow;          //empty space will be occupied by some (x)
	xRow = selected;                         

	selected = square[piece].style.top;        
	square[piece].style.top = yColumn;		   //empty space will be occupied by some (y)
	yColumn = selected;                          
}

function legalMove(piece) {
	if(square[piece].style.left == xRow){     //if the x value of the selected square is equal to that of the empty square
		//checks if the square can be moved to the bottom or to the top 
		if(parseInt(square[piece].style.top) == parseInt(yColumn) - 100 || parseInt(square[piece].style.top) == parseInt(yColumn) + 100){
			return true;
		}
	}
	else if(square[piece].style.top == yColumn){ //if the y value of the selected square is equal to that of the empty square
		//checks if the square can be moved to the left or to the right
		if(parseInt(square[piece].style.left) == parseInt(xRow) - 100 || parseInt(square[piece].style.left) == parseInt(xRow) + 100){
			return true;
		}
	}
	else{
		return false;
	}
}


