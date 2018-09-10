var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1display = document.querySelector('#p1display');
var p2display = document.querySelector('#p2display');
var resetButton = document.querySelector('#reset');
var numInput = document.querySelector('input');
var winningScoreDisplay = document.querySelector('p span');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score ++;
    console.log(p1Score, winningScore);
    if(p1Score === winningScore){
      p1display.classList.add('winner');
      console.log('gameover');
      gameOver = true;
    }
    p1display.textContent = p1Score;
  }
});


p2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score ++;
    if(p2Score === winningScore){
        p2display.classList.add('winner');
      console.log('GAMEOVER');
      gameOver = true;
    }
    p2display.textContent = p2Score;
  }
});


resetButton.addEventListener("click", function(){
reset();

});

function reset(){
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1display.textContent = p1Score;
  p2display.textContent = p2Score;
  p1display.classList.remove('winner');
  p2display.classList.remove('winner');
}

numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});
