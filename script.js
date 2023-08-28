
const buttons = document.querySelectorAll('button');
let computerScore = 0;
let playerScore = 0;
const playerTextScore = document.querySelector('.ptext-score');
const computerTextScore = document.querySelector('.ctext-score');
const divResult = document.querySelector('.result');

function getComputerChoice() {
    const choices = ['rock', 'scissors', 'paper'];
    const index = Math.floor(Math.random() * (choices.length - 1));
    const computerChoice = choices[index];
    return computerChoice;
}

function printWinner() {
    if(computerScore > playerScore) {
     divResult.textContent = `I'm sorry, computer is a winner!`;
    } else if(computerScore < playerScore) {
        divResult.textContent = `You Won the Game!`;
    } else {
        divResult.textContent = `It's a tie!`;
    }
 }

function getPlayerChoice(e) {
    let answer = '';
    answer = e.target.innerHTML.toLowerCase();
    console.log(e.target.innerHTML.toLowerCase());
    //const answer = prompt('Give me Rock, Scissors or Paper...').toLowerCase();
    return answer;
}

function playRound(computerSelect, playerSelect) {
    let result;
    const infoRound = document.querySelector('.info-round');
    divResult.textContent = '';
      
    if(computerSelect === playerSelect) {
        result = 'Tie!';
    } else if(computerSelect === 'rock' && playerSelect === 'paper')
     {
        result = 'You won! Paper wins with rock!';
        playerTextScore.textContent = ++playerScore;

    } else if (computerSelect === 'scissors' && playerSelect === 'paper') {
        result = 'You lost! Scissors beats Paper!';
        computerTextScore.textContent = ++computerScore;
    } else if (computerSelect === 'paper' && playerSelect === 'scissors') {
        result = 'You won! Scissors wins with paper!';
        playerTextScore.textContent = ++playerScore;
    } else if (computerSelect === 'scissors' && playerSelect === 'rock') {
        result = 'You won! Rock wins with scissors!';
        playerTextScore.textContent = ++playerScore;
    }
    else if (computerSelect === 'paper' && playerSelect === 'rock') {
        result = 'You lost! Paper wins with Rock!';
        computerTextScore.textContent = ++computerScore;
    } else {
        result = 'You lost! Rock wins with Scissors!';
        computerTextScore.textContent = ++computerScore;
    }
    infoRound.textContent = result;
    if(computerScore == 5 || playerScore == 5) {
        printWinner();
        computerScore = 0;
        playerScore = 0;
        playerTextScore.textContent = 0;
        computerTextScore.textContent = 0;
   } 

}


  function game(e) {
       playRound(getComputerChoice(), getPlayerChoice(e));
  }


buttons.forEach(button => {
   button.addEventListener('click', (e) => {
    game(e);
  });
});
