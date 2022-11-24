

const totalScore = {computerScore:0, playerScore:0}
const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')


function getComputerChoice() {
  
  const rpsChoice = ['Rock', 'Paper', 'Scissors'];
  let randomMumber = Math.floor(Math.random()*3);
  const randomChoice = rpsChoice[randomMumber];
  return randomChoice
}

function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  
  let score;

  // All situations where human draws, set `score` to 0
  if(playerChoice==computerChoice)
  {
    score=0;
  }
  else if(playerChoice=='Rock' && computerChoice=='Scissors')
  {
    score=1;
  }
  else if(playerChoice=='Paper' && computerChoice=='Rock')
  {
    score=1;
  }
  else if(playerChoice=='Scissors' && computerChoice=='Paper')
  {
    score =1;
  }
  else{
  score=-1;
  }
  
  

  return score;
  
}


function showResult(score, playerChoice, computerChoice) {

  
  if(score== -1)
  {
    resultDiv.innerText="You Lose!"
  }
  else if(score==0)
  {
  resultDiv.innerText="Tie!"
  }
  else
  {
    resultDiv.innerText="You Won!"
  }

  handsDiv.innerText = `👧🏻${playerChoice} vs 💻${computerChoice}`

  playerScoreDiv.innerText= `Your Score: ${totalScore['playerScore']}`
}

function onClickRPS(playerChoice) {
  const compChoice = getComputerChoice();
  const score = getResult(playerChoice, compChoice)
  totalScore['playerScore']+=score;
  console.log({score})
 

  showResult(score, playerChoice, compChoice)

}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons

const rpsButtons = document.querySelectorAll('.rpsButton')

 rpsButtons.forEach(rpsButton=>{
   rpsButton.onclick=()=>onClickRPS(rpsButton.value)
 })

  endGameButtonDiv = document.getElementById('endGameButton')
  endGameButton.onclick=()=>endGame(totalScore)
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['playerScore']=0;
  resultDiv.innerText='';
  handsDiv.innerText='';
  playerScoreDiv.innerText='';
  
}

playGame()
