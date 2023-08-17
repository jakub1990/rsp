let computerScore = 0;
let playerScore = 0;


function getComputerChoice() {
    const choices = ['rock', 'scissors', 'paper'];
    const index = Math.floor(Math.random() * (choices.length - 1));
    const computerChoice = choices[index];
    return computerChoice;
}

function printWinner() {
    if(computerScore > playerScore) {
     console.log(`I'm sorry, computer is a winner!`);
    } else if(computerScore < playerScore) {
     console.log(`You Won the Game!`);
    } else {
     console.log(`It's a tie!`);
    }
 }

function getPlayerChoice() {
    const answer = prompt('Give me Rock, Scissors or Paper...').toLowerCase();
    return answer;
}

function playRound() {
    const playerSelect = getPlayerChoice();
    let result;
    const computerSelect = getComputerChoice();

    if(computerSelect === playerSelect) {
        result = 'Tie!';
    } else if(computerSelect === 'rock' && playerSelect === 'paper')
     {
        result = 'You won! Paper wins with rock!';
        playerScore += 1;
    } else if (computerSelect === 'scissors' && playerSelect === 'paper') {
        result = 'You lost! Scissors beats Paper!';
        computerScore += 1;
    } else if (computerSelect === 'paper' && playerSelect === 'scissors') {
        result = 'You won! Scissors wins with paper!';
        playerScore += 1;
    } else if (computerSelect === 'scissors' && playerSelect === 'rock') {
        result = 'You won! Rock wins with scissors!';
        playerScore += 1;
    }
    else if (computerSelect === 'paper' && playerSelect === 'rock') {
        result = 'You lost! Paper wins with Rock!';
        computerScore += 1;
    } else {
        result = 'You lost! Rock wins with Scissors!';
        computerScore += 1;
    }
    console.log(`${result} Your score is: ${playerScore} comptuter score is: ${computerScore}`);

}


  function game() {
       playRound();
  }

  for(let i = 0; i < 5; i++) {
  game();
  }
  
  printWinner();

