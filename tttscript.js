
var player = "X";//First player is X
var game = {
    numXwins: 0,
    numOwins: 0,
    firstPlayer: "X",
    restartWins: function(){ //Resets the counter for number of winners. 
        numXwins = 0,
        numOwins = 0,
        document.getElementById("areaWins").style.display = "none";
        displayWins();
    },
    displayWins: function(){ //displays the number of wins for X and O.
        document.getElementById("areaWins").style.display = "block";
        document.getElementById("Xwins").innerHTML = "X has won " + game.numXwins + " games.";
        document.getElementById("Owins").innerHTML = "O has won " + game.numOwins + " games.";  
    },
    firstPlayerDisplay: function(){ //displays the number of wins for X and O.
        document.getElementById("firstPlayerDisplay").style.display = "none";
        document.getElementById("firstPlayerDisplay").style.display = "block";
        document.getElementById("firstPlayerDisplay").innerHTML = game.firstPlayer + " goes first.";  
    },
    winner: function() { //determines winner of the game.
        if (
          document.getElementById("btn1").value ==="X" &&//horizontal X wins
          document.getElementById("btn2").value ==="X" &&
          document.getElementById("btn3").value ==="X" ||
          document.getElementById("btn4").value ==="X" &&
          document.getElementById("btn5").value ==="X" &&
          document.getElementById("btn6").value ==="X" ||
          document.getElementById("btn7").value ==="X" &&
          document.getElementById("btn8").value ==="X" &&
          document.getElementById("btn9").value ==="X" ||
          
          document.getElementById("btn1").value ==="X" &&//vertical X wins
          document.getElementById("btn4").value ==="X" &&
          document.getElementById("btn7").value ==="X" ||
          document.getElementById("btn2").value ==="X" &&
          document.getElementById("btn5").value ==="X" &&
          document.getElementById("btn8").value ==="X" ||
          document.getElementById("btn3").value ==="X" &&
          document.getElementById("btn6").value ==="X" &&
          document.getElementById("btn9").value ==="X" ||
          
          document.getElementById("btn1").value ==="X" &&//diagonal X wins
          document.getElementById("btn5").value ==="X" &&
          document.getElementById("btn9").value ==="X" ||
          document.getElementById("btn3").value ==="X" &&
          document.getElementById("btn5").value ==="X" &&
          document.getElementById("btn7").value ==="X"   
          )
       {
           game.numXwins = game.numXwins+1;
           alert("X IS THE WINNER!!! :D");
           game.displayWins();  //code  
       }
       
       else if (
          document.getElementById("btn1").value ==="O" &&//horizontal O wins
          document.getElementById("btn2").value ==="O" &&
          document.getElementById("btn3").value ==="O" ||
          document.getElementById("btn4").value ==="O" &&
          document.getElementById("btn5").value ==="O" &&
          document.getElementById("btn6").value ==="O" ||
          document.getElementById("btn7").value ==="O" &&
          document.getElementById("btn8").value ==="O" &&
          document.getElementById("btn9").value ==="O" ||
          
          document.getElementById("btn1").value ==="O" &&//vertical O wins
          document.getElementById("btn4").value ==="O" &&
          document.getElementById("btn7").value ==="O" ||
          document.getElementById("btn2").value ==="O" &&
          document.getElementById("btn5").value ==="O" &&
          document.getElementById("btn8").value ==="O" ||
          document.getElementById("btn3").value ==="O" &&
          document.getElementById("btn6").value ==="O" &&
          document.getElementById("btn9").value ==="O" ||
          
          document.getElementById("btn1").value ==="O" &&//diagonal O wins
          document.getElementById("btn5").value ==="O" &&
          document.getElementById("btn9").value ==="O" ||
          document.getElementById("btn3").value ==="O" &&
          document.getElementById("btn5").value ==="O" &&
          document.getElementById("btn7").value ==="O"  
           )
       {
           game.numOwins = game.numOwins+1;
           alert("O IS THE WINNER!!! :D");
           game.displayWins();  
       }  
   },
   
   reset: function() { 
    var currentbtn = 'btn';
    var i = 1;
    for (i=1; i<10; i++) {
         currentbtn = "btn" + i;
         document.getElementById(currentbtn).value = "";
         document.getElementById(currentbtn).disabled = false;   
     }
     if (game.firstPlayer === "X") {
        game.firstPlayer = "O";
     }
     else {
        game.firstPlayer = "X";//code
     };
     player = game.firstPlayer;
    game.firstPlayerDisplay();
    }
}

function clickBtn(btn){ // This function puts in an X or O when one of the squares are clicked. 
    if (player === "X") {
        document.getElementById(btn).value="X";
        document.getElementById(btn).disabled= true;
        player = "O";
    } else {
        document.getElementById(btn).value="O";
        document.getElementById(btn).disabled= true;
        player = "X";  
    };
    game.winner();
}
    
/*function reset() {  //This function clears out all the Xs and Os and starts a new game. 
    var currentbtn = 'btn';
    var i = 1;
    for (i=1; i<10; i++) {
        currentbtn = "btn" + i;
        document.getElementById(currentbtn).value = "";
        document.getElementById(currentbtn).disabled = false;   
    }
    player = "X";*/