let computerScore = 0;
let playerScore = 0;


function getComputerChoice() {
    const choices = ['rock', 'scissors', 'paper'];
    const index = Math.round(Math.random() * (choices.length - 1));
    const computerChoice = choices[index];
    return computerChoice;
}

function playRound(computerSelection) {
    const playerSelection = prompt('Give me Rock, Scissors or Paper...').toLowerCase();
    let result;
    const computerSelect = getComputerChoice();

    if(computerSelect === playerSelection) {
        result = 'Tie!';
    } else if(computerSelect === 'rock' && playerSelection === 'paper')
     {
        result = 'You won! Paper wins with rock!';
        playerScore += 1;
    } else if (computerSelect === 'scissors' && playerSelection === 'paper') {
        result = 'You lost! Scissors beats Paper!';
        computerScore += 1;
    } else if (computerSelect === 'paper' && playerSelection === 'scissors') {
        result = 'You won! Scissors wins with paper!';
        playerScore += 1;
    } else if (computerSelect === 'scissors' && playerSelection === 'rock') {
        result = 'You won! Rock wins with scissors!';
        playerScore += 1;
    }
    else if (computerSelect === 'paper' && playerSelection === 'rock') {
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

  game();
  game();
  game();
  game();
  game();