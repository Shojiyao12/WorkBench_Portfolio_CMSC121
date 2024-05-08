var WallwasTouched = false; 		
var StartwasClicked = false; 		

window.onload = function() {
    $('#start').click(startButton);
    if(StartwasClicked == true){
        $("div#maze div.boundary").each(function(){
            $(this).mouseover(OutsideWall);
        });
    }
};

function OutsideWall() {
    WallwasTouched = true;
    if(StartwasClicked == true){
        $("div#maze div.boundary").each(function(){
            $(this).addClass("youlose");
        });
        AlertUser();
    }
}

function AlertUser() {
    if (StartwasClicked == true && WallwasTouched == true) {
        $('#status').text("You lose! Click on S, to try again.");
    } 
    else if (StartwasClicked == true && WallwasTouched == false){
        $('#status').text("You win! Click on S, to start again.");
    }
    StartwasClicked = false;
}

function startButton(){
    StartwasClicked = true;

    if(StartwasClicked == true && WallwasTouched == true){
        $("div#maze div.boundary").each(function(){
            $(this).removeClass("youlose");
        });
        WallwasTouched = false;
    }

    $('#status').text("Find the end!");
    $("div#maze div.boundary").mouseover(OutsideWall);
    $("#end").mouseover(AlertUser);
    $("#maze").mouseleave(OutsideWall); 
}
