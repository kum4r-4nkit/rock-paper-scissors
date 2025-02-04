function getHumanChoice() {
  userValue = prompt('Enter "Rock/paper/scissor" anyone!').toLowerCase()
  return userValue
}

function getComputerChoice() {
  str = Math.floor(Math.random() * 3)
  if (str === 0) return 'rock'
  else if (str === 1) return 'paper'
  else return 'scissor'
}

let humanScore = 0
let computerScore = 0

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  if (humanChoice == 'rock' && computerChoice == 'paper') {
    computerScore++
    console.log('Paper beats Rock', ', Your Choice: ', humanChoice, ', Computer Choice: ', computerChoice, ', Your Score: ', humanScore, ', Computer Score: ', computerScore);
  }
  else if (humanChoice == 'rock' && computerChoice == 'scissor') {
    humanScore++
    console.log('rock beats scissor', ', Your Choice: ', humanChoice, ', Computer Choice: ', computerChoice, ', Your Score: ', humanScore, ', Computer Score: ', computerScore);
  }
  else if (humanChoice == 'paper' && computerChoice == 'rock') {
    humanScore++
    console.log('Paper beats Rock', ', Your Choice: ', humanChoice, ', Computer Choice: ', computerChoice, ', Your Score: ', humanScore, ', Computer Score: ', computerScore);
  }
  else if (humanChoice == 'paper' && computerChoice == 'scissor') {
    computerScore++
    console.log('Scissor beats Paper', ', Your Choice: ', humanChoice, ', Computer Choice: ', computerChoice, ', Your Score: ', humanScore, ', Computer Score: ', computerScore);
  }
  else if (humanChoice == 'scissor' && computerChoice == 'rock') {
    computerScore++
    console.log('Rock beats Scissor', ', Your Choice: ', humanChoice, ', Computer Choice: ', computerChoice, ', Your Score: ', humanScore, ', Computer Score: ', computerScore);
  }
  else if (humanChoice == 'scissor' && computerChoice == 'paper') {
    humanScore++
    console.log('Scissor beats Paper', ', Your Choice: ', humanChoice, ', Computer Choice: ', computerChoice, ', Your Score: ', humanScore, ', Computer Score: ', computerScore);
  }
  else if (humanChoice == computerChoice) {
    console.log('You both selected same choice!', ', Your Choice: ', humanChoice, ', Computer Choice: ', computerChoice, ', Your Score: ', humanScore, ', Computer Score: ', computerScore);
  }
}

function playGame() {
  console.log('Game will be of 5 Rounds, Lets start...');  
  for (let i = 0; i < 5; i++) playRound()
  console.log('Your Score: ', humanScore, ', Computer Score: ', computerScore, humanScore > computerScore ? 'You WON!!!' : humanScore < computerScore ? 'Computer won, You lose!': 'No one Won!, No one lose!');
}

playGame()