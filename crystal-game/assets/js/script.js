// this function will execute when the DOM is loaded
$( document ).ready(function(){

//crytal with random generated values 
var red = Math.floor(Math.random() * 12) + 1;
var blue = Math.floor(Math.random() * 12) + 1;
var green = Math.floor(Math.random() * 12) + 1;
var yellow = Math.floor(Math.random() * 12) + 1;

//score
var winC = 0;
var lossC = 0;

//generates a random number & display it 
var targetScore = Math.floor(Math.random() * 101) + 19;
$("#target").text(targetScore);

//holds score & displays it
var yourScore = 0;
$("#score").text(yourScore);

//display win/loss.
$("#winC").text(winC);
$("#lossC").text(lossC);

//this function will reset all the values. exept the  win/lose score.
function reset(){

var red = Math.floor(Math.random() * 12) + 1;
var blue = Math.floor(Math.random() * 12) + 1;
var green = Math.floor(Math.random() * 12) + 1;
var yellow = Math.floor(Math.random() * 12) + 1;

targetScore = Math.floor(Math.random() * 101) + 19;
$("#target").text(targetScore);

yourScore = 0;
$("#score").text();
}

//event listener, when x-color is clicked it will execute a function
$('#red').on ('click', function(){
    
    yourScore = yourScore + red;
        $('#score').text(yourScore);
        updateScore();
  });

$('#blue').on ('click', function(){
    
    yourScore = yourScore + blue;
        $('#score').text(yourScore);
        updateScore();
  });

$('#green').on ('click', function(){
    
    yourScore = yourScore + green;
        $('#score').text(yourScore);
        updateScore();
  });

$('#yellow').on ('click', function(){
      
      yourScore = yourScore + yellow;
        $('#score').text(yourScore);
        updateScore();
  });

//this function display  if you win/ lose also adds to the current score.
function updateScore(){
    
    if (yourScore > targetScore){
      lossC++;
      $("#lossC").text(lossC);
      reset();
    }

    if (yourScore == targetScore){
      winC++;
      $("#winC").text(winC);
      reset();
    };
  };
});





