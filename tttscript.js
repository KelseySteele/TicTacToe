
var player = "X";//First player is X


function clickBtn(btn){

if (player === "X"){
         document.getElementById(btn).value="X";
         document.getElementById(btn).disabled= true;
    player = "O";
    winner();

}else{
     document.getElementById(btn).value="O";
    document.getElementById(btn).disabled= true;
     player = "X";
    
    };

}

function winner() {
    if(
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
        alert("X IS THE WINNER!!! :D");
          reset();  //code
        
          
    }
    
    else if(
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
        alert("O IS THE WINNER!!! :D");
          reset();
          
    }
    
   
} 
    

 




function reset(){
    
    
    var currentbtn = 'btn';
    var i = 1;
    for (i=1; i<10; i++){
        currentbtn = "btn" + i;
        document.getElementById(currentbtn).value = "";
        document.getElementById(currentbtn).disabled = false;
        
    }
    player = "X";
    
  
}



    









