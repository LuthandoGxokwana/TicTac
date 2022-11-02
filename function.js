let moves=0;
let playingValue = "X";
let turn="Playing : Player1 as X";

$(function(){
    
    $(".player-turn").html(turn);

 ///////////////////////////////////////////////////TOP LEFT BOX HANDLING/////////////////////////////////////////////////////////////////////////////////   
    $("#top-left").click(function(){
        if(playingValue=="X" && $("#top-left-value").text()==""){
            $("#top-left-value").html(playingValue);
            moves+=1;
            turn="Playing : Player2 as O";
            $(".player-turn").html(turn);
            playingValue="O";
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#bottom-right-value").text()=="X" && $("#middle-value").text()=="X" && $("#top-left-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#top-left").css({"background-color":"green"});
                $("#middle").css({"background-color":"green"});
                $("#bottom-right").css({"background-color":"green"});
            }else if($("#top-left-value").text()=="X" && $("#top-middle-value").text()=="X" && $("#top-right-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#top-left").css({"background-color":"green"});
                $("#top-middle").css({"background-color":"green"});
                $("#top-right").css({"background-color":"green"});
            }else if($("#bottom-left-value").text()=="X" && $("#middle-left-value").text()=="X" && $("#top-left-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#bottom-left").css({"background-color":"green"});
                $("#middle-left").css({"background-color":"green"});
                $("#top-left").css({"background-color":"green"});
           }
        }else if(playingValue=="O" && $("#top-left-value").text()==""){
            $("#top-left-value").html(playingValue);
            moves+=1;
            playingValue="X";
            turn="Playing : Player1 as X";
            $(".player-turn").html(turn);
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
            ///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#bottom-right-value").text()=="O" && $("#middle-value").text()=="O" && $("#top-left-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#top-left").css({"background-color":"green"});
                $("#middle").css({"background-color":"green"});
                $("#bottom-right").css({"background-color":"green"});
            }else if($("#top-left-value").text()=="O" && $("#top-middle-value").text()=="O" && $("#top-right-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#top-left").css({"background-color":"green"});
                $("#top-middle").css({"background-color":"green"});
                $("#top-right").css({"background-color":"green"});
            }else if($("#bottom-left-value").text()=="O" && $("#middle-left-value").text()=="O" && $("#top-left-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#bottom-left").css({"background-color":"green"});
                $("#middle-left").css({"background-color":"green"});
                $("#top-left").css({"background-color":"green"});
           }
        }
    });
///////////////////////////////////////////////////TOP MIDDLE BOX HANDLING/////////////////////////////////////////////////////////////////////////////////   
    $("#top-middle").click(function(){
        if(playingValue=="X" && $("#top-middle-value").text()==""){
            $("#top-middle-value").html(playingValue);
            moves+=1;
            turn="Playing : Player2 as O";
            $(".player-turn").html(turn);
            playingValue="O";
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#top-right-value").text()=="X" && $("#top-middle-value").text()=="X" && $("#top-left-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#top-right").css({"background-color":"green"});
                $("#top-middle").css({"background-color":"green"});
                $("#top-left").css({"background-color":"green"});
            }else if($("#middle-value").text()=="X" && $("#top-middle-value").text()=="X" && $("#bottom-middle-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#middle").css({"background-color":"green"});
                $("#bottom-middle").css({"background-color":"green"});
                $("#top-middle").css({"background-color":"green"});
            }
        }else if(playingValue=="O" && $("#top-middle-value").text()==""){
            $("#top-middle-value").html(playingValue);
            moves+=1;
            playingValue="X";
            turn="Playing : Player1 as X";
            $(".player-turn").html(turn);
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#top-right-value").text()=="O" && $("#top-middle-value").text()=="O" && $("#top-left-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#top-right").css({"background-color":"green"});
                $("#top-middle").css({"background-color":"green"});
                $("#top-left").css({"background-color":"green"});
            }else if($("#middle-value").text()=="O" && $("#top-middle-value").text()=="O" && $("#bottom-middle-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#middle").css({"background-color":"green"});
                $("#bottom-middle").css({"background-color":"green"});
                $("#top-middle").css({"background-color":"green"});
            }
        }
    });
///////////////////////////////////////////////////TOP RIGHT BOX HANDLING/////////////////////////////////////////////////////////////////////////////////   
    $("#top-right").click(function(){
        if(playingValue=="X" && $("#top-right-value").text()==""){
            $("#top-right-value").html(playingValue);
            moves+=1;
            turn="Playing : Player2 as O";
            $(".player-turn").html(turn);
            playingValue="O";
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
            ///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#bottom-left-value").text()=="X" && $("#middle-value").text()=="X" && $("#top-right-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#top-right").css({"background-color":"green"});
                $("#middle").css({"background-color":"green"});
                $("#bottom-left").css({"background-color":"green"});
            }else if($("#top-left-value").text()=="X" && $("#top-middle-value").text()=="X" && $("#top-right-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#top-left").css({"background-color":"green"});
                $("#top-middle").css({"background-color":"green"});
                $("#top-right").css({"background-color":"green"});
            }else if($("#bottom-right-value").text()=="X" && $("#middle-right-value").text()=="X" && $("#top-right-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#bottom-right").css({"background-color":"green"});
                $("#middle-right").css({"background-color":"green"});
                $("#top-right").css({"background-color":"green"});
           }
        }else if(playingValue=="O" && $("#top-right-value").text()==""){
            $("#top-right-value").html(playingValue);
            moves+=1;
            playingValue="X";
            turn="Playing : Player1 as X";
            $(".player-turn").html(turn);
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
    ///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
             if($("#bottom-left-value").text()=="O" && $("#middle-value").text()=="O" && $("#top-right-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#top-right").css({"background-color":"green"});
                $("#middle").css({"background-color":"green"});
                $("#bottom-left").css({"background-color":"green"});
            }else if($("#top-left-value").text()=="O" && $("#top-middle-value").text()=="O" && $("#top-right-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#top-left").css({"background-color":"green"});
                $("#top-middle").css({"background-color":"green"});
                $("#top-right").css({"background-color":"green"});
            }else if($("#bottom-right-value").text()=="O" && $("#middle-right-value").text()=="O" && $("#top-right-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#bottom-right").css({"background-color":"green"});
                $("#middle-right").css({"background-color":"green"});
                $("#top-right").css({"background-color":"green"});
           }
        }
    });
///////////////////////////////////////////////////MIDDLE LEFT BOX HANDLING/////////////////////////////////////////////////////////////////////////////////   
    $("#middle-left").click(function(){
        if(playingValue=="X" && $("#middle-left-value").text()==""){
            $("#middle-left-value").html(playingValue);
            moves+=1;
            turn="Playing : Player2 as O";
            $(".player-turn").html(turn);
            playingValue="O";
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
            ///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#middle-right-value").text()=="X" && $("#middle-value").text()=="X" && $("#middle-left-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#middle-right").css({"background-color":"green"});
                $("#middle").css({"background-color":"green"});
                $("#middle-left").css({"background-color":"green"});
            }else if($("#middle-left-value").text()=="X" && $("#top-left-value").text()=="X" && $("#bottom-left-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#middle-left").css({"background-color":"green"});
                $("#bottom-left").css({"background-color":"green"});
                $("#top-left").css({"background-color":"green"});
            }
        }else if(playingValue=="O" && $("#middle-left-value").text()==""){
            $("#middle-left-value").html(playingValue);
            moves+=1;
            playingValue="X";
            turn="Playing : Player1 as X";
            $(".player-turn").html(turn);
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#middle-right-value").text()=="O" && $("#middle-value").text()=="O" && $("#middle-left-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#middle-right").css({"background-color":"green"});
                $("#middle").css({"background-color":"green"});
                $("#middle-left").css({"background-color":"green"});
            }else if($("#middle-left-value").text()=="O" && $("#top-left-value").text()=="O" && $("#bottom-left-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#middle-left").css({"background-color":"green"});
                $("#bottom-left").css({"background-color":"green"});
                $("#top-left").css({"background-color":"green"});
            }
        }
    });
///////////////////////////////////////////////////MIDDLE BOX HANDLING/////////////////////////////////////////////////////////////////////////////////   
    $("#middle").click(function(){
        if(playingValue=="X" && $("#middle-value").text()==""){
            $("#middle-value").html(playingValue);
            moves+=1;
            turn="Playing : Player2 as O";
            $(".player-turn").html(turn);
            playingValue="O";
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#middle-right-value").text()=="X" && $("#middle-value").text()=="X" && $("#middle-left-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#middle-right").css({"background-color":"green"});
                $("#middle").css({"background-color":"green"});
                $("#middle-left").css({"background-color":"green"});
            }else if($("#middle-value").text()=="X" && $("#top-middle-value").text()=="X" && $("#bottom-middle-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#middle").css({"background-color":"green"});
                $("#bottom-middle").css({"background-color":"green"});
                $("#top-middle").css({"background-color":"green"});
            }
        }else if(playingValue=="O" && $("#middle-value").text()==""){
            $("#middle-value").html(playingValue);
            moves+=1;
            playingValue="X";
            turn="Playing : Player1 as X";
            $(".player-turn").html(turn);
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#middle-right-value").text()=="O" && $("#middle-value").text()=="O" && $("#middle-left-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#middle-right").css({"background-color":"green"});
                $("#middle").css({"background-color":"green"});
                $("#middle-left").css({"background-color":"green"});
            }else if($("#middle-value").text()=="O" && $("#top-middle-value").text()=="O" && $("#bottom-middle-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#middle").css({"background-color":"green"});
                $("#bottom-middle").css({"background-color":"green"});
                $("#top-middle").css({"background-color":"green"});
            }
        }
    });
///////////////////////////////////////////////////MIDDLE RIGHT BOX HANDLING/////////////////////////////////////////////////////////////////////////////////   
    $("#middle-right").click(function(){
        if(playingValue=="X" && $("#middle-right-value").text()==""){
            $("#middle-right-value").html(playingValue);
            moves+=1;
            turn="Playing : Player2 as O";
            $(".player-turn").html(turn);
            playingValue="O";
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#middle-right-value").text()=="X" && $("#middle-value").text()=="X" && $("#middle-left-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#middle-right").css({"background-color":"green"});
                $("#middle").css({"background-color":"green"});
                $("#middle-left").css({"background-color":"green"});
            }else if($("#middle-right-value").text()=="X" && $("#top-right-value").text()=="X" && $("#bottom-right-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#middle-right").css({"background-color":"green"});
                $("#bottom-right").css({"background-color":"green"});
                $("#top-right").css({"background-color":"green"});
            }
        }else if(playingValue=="O" && $("#middle-right-value").text()==""){
            $("#middle-right-value").html(playingValue);
            moves+=1;
            playingValue="X";
            turn="Playing : Player1 as X";
            $(".player-turn").html(turn);
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#middle-right-value").text()=="O" && $("#middle-value").text()=="O" && $("#middle-left-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#middle-right").css({"background-color":"green"});
                $("#middle").css({"background-color":"green"});
                $("#middle-left").css({"background-color":"green"});
            }else if($("#middle-right-value").text()=="O" && $("#top-right-value").text()=="O" && $("#bottom-right-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#middle-right").css({"background-color":"green"});
                $("#bottom-right").css({"background-color":"green"});
                $("#top-right").css({"background-color":"green"});
            }
        }
    });
///////////////////////////////////////////////////BOTTOM LEFT BOX HANDLING/////////////////////////////////////////////////////////////////////////////////   
    $("#bottom-left").click(function(){
        if(playingValue=="X" && $("#bottom-left-value").text()==""){
            $("#bottom-left-value").html(playingValue);
            moves+=1;
            turn="Playing : Player2 as O";
            $(".player-turn").html(turn);
            playingValue="O";
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#bottom-right-value").text()=="X" && $("#bottom-middle-value").text()=="X" && $("#bottom-left-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#bottom-right").css({"background-color":"green"});
                $("#bottom-middle").css({"background-color":"green"});
                $("#bottom-left").css({"background-color":"green"});
            }else if($("#bottom-left-value").text()=="X" && $("#middle-left-value").text()=="X" && $("#top-left-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#bottom-left").css({"background-color":"green"});
                $("#middle-left").css({"background-color":"green"});
                $("#top-left").css({"background-color":"green"});
            }else if($("#bottom-left-value").text()=="X" && $("#middle-value").text()=="X" && $("#top-right-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#bottom-left").css({"background-color":"green"});
                $("#middle").css({"background-color":"green"});
                $("#top-right").css({"background-color":"green"});
           }
        }else if(playingValue=="O" && $("#bottom-left-value").text()==""){
            $("#bottom-left-value").html(playingValue);
            moves+=1;
            playingValue="X";
            turn="Playing : Player1 as X";
            $(".player-turn").html(turn);
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#bottom-right-value").text()=="O" && $("#bottom-middle-value").text()=="O" && $("#bottom-left-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#bottom-right").css({"background-color":"green"});
                $("#bottom-middle").css({"background-color":"green"});
                $("#bottom-left").css({"background-color":"green"});
            }else if($("#bottom-left-value").text()=="O" && $("#middle-left-value").text()=="O" && $("#top-left-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#bottom-left").css({"background-color":"green"});
                $("#middle-left").css({"background-color":"green"});
                $("#top-left").css({"background-color":"green"});
            }else if($("#bottom-left-value").text()=="O" && $("#middle-value").text()=="O" && $("#top-right-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#bottom-left").css({"background-color":"green"});
                $("#middle").css({"background-color":"green"});
                $("#top-right").css({"background-color":"green"});
            }
        }
    });
///////////////////////////////////////////////////BOTTOM MIDDLE BOX HANDLING/////////////////////////////////////////////////////////////////////////////////   
    $("#bottom-middle").click(function(){
        if(playingValue=="X" && $("#bottom-middle-value").text()==""){
            $("#bottom-middle-value").html(playingValue);
            moves+=1;
            turn="Playing : Player2 as O";
            $(".player-turn").html(turn);
            playingValue="O";
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }
///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#bottom-right-value").text()=="X" && $("#bottom-middle-value").text()=="X" && $("#bottom-left-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#bottom-right").css({"background-color":"green"});
                $("#bottom-middle").css({"background-color":"green"});
                $("#bottom-left").css({"background-color":"green"});
            }else if($("#middle-value").text()=="X" && $("#top-middle-value").text()=="X" && $("#bottom-middle-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#middle").css({"background-color":"green"});
                $("#bottom-middle").css({"background-color":"green"});
                $("#top-middle").css({"background-color":"green"});
            }
        }else if(playingValue=="O" && $("#bottom-middle-value").text()==""){
            $("#bottom-middle-value").html(playingValue);
            moves+=1;
            playingValue="X";
            turn="Playing : Player1 as X";
            $(".player-turn").html(turn);
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }

///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#bottom-right-value").text()=="O" && $("#bottom-middle-value").text()=="O" && $("#bottom-left-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#bottom-right").css({"background-color":"green"});
                $("#bottom-middle").css({"background-color":"green"});
                $("#bottom-left").css({"background-color":"green"});
            }else if($("#middle-value").text()=="O" && $("#top-middle-value").text()=="O" && $("#bottom-middle-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#middle").css({"background-color":"green"});
                $("#bottom-middle").css({"background-color":"green"});
                $("#top-middle").css({"background-color":"green"});
            }
        }
    });
///////////////////////////////////////////////////BOTTOM RIGHT BOX HANDLING/////////////////////////////////////////////////////////////////////////////////   
    $("#bottom-right").click(function(){
        if(playingValue=="X" && $("#bottom-right-value").text()==""){
            $("#bottom-right-value").html(playingValue);
            moves+=1;
            turn="Playing : Player2 as O";
            $(".player-turn").html(turn);
            playingValue="O";
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            } 
///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#bottom-right-value").text()=="X" && $("#bottom-middle-value").text()=="X" && $("#bottom-left-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#bottom-right").css({"background-color":"green"});
                $("#bottom-middle").css({"background-color":"green"});
                $("#bottom-left").css({"background-color":"green"});
            }else if($("#bottom-right-value").text()=="X" && $("#middle-right-value").text()=="X" && $("#top-right-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#bottom-right").css({"background-color":"green"});
                $("#middle-right").css({"background-color":"green"});
                $("#top-right").css({"background-color":"green"});
            }else if($("#bottom-right-value").text()=="X" && $("#middle-value").text()=="X" && $("#top-left-value").text()=="X"){
                $(".player-turn").html("Game over Player1 won,refresh to restart"); 
                $("#bottom-right").css({"background-color":"green"});
                $("#middle").css({"background-color":"green"});
                $("#top-left").css({"background-color":"green"});
           }
        }else if(playingValue=="O" && $("#bottom-right-value").text()==""){
            $("#bottom-right-value").html(playingValue);
            moves+=1;
            playingValue="X";
            turn="Playing : Player1 as X";
            $(".player-turn").html(turn);
            if (moves==9) {
                $(".player-turn").html("Game over refresh to restart");
                $(".box").css({"background-color":"red"});
            }

///////////////////////////////////////////////////DETERMINE IF A PLAYER HAS WON/////////////////////////////////////////////////////////////////////////////////
            if($("#bottom-right-value").text()=="O" && $("#bottom-middle-value").text()=="O" && $("#bottom-left-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#bottom-right").css({"background-color":"green"});
                $("#bottom-middle").css({"background-color":"green"});
                $("#bottom-left").css({"background-color":"green"});
            }else if($("#bottom-right-value").text()=="O" && $("#middle-right-value").text()=="O" && $("#top-right-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#bottom-right").css({"background-color":"green"});
                $("#middle-right").css({"background-color":"green"});
                $("#top-right").css({"background-color":"green"});
            }else if($("#bottom-right-value").text()=="O" && $("#middle-value").text()=="O" && $("#top-left-value").text()=="O"){
                $(".player-turn").html("Game over Player2 won,refresh to restart"); 
                $("#bottom-right").css({"background-color":"green"});
                $("#middle").css({"background-color":"green"});
                $("#top-left").css({"background-color":"green"});
           }
        }
    });
    
    
    
});