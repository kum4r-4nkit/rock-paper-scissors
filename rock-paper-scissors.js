function getComputerChoice() {
  str = Math.floor(Math.random() * 3)
  if (str === 0) return 'rock'
  else if (str === 1) return 'paper'
  else return 'scissor'
}

let humanScore = 0
let computerScore = 0
let gameCount = 0

function playRound(hChoice) {
  if (gameCount === 5) resetGame()  
  let humanChoice = hChoice
  let playedRound = ''
  const computerChoice = getComputerChoice();
  if (humanChoice == 'rock' && computerChoice == 'paper') {
    computerScore++
    playedRound = 'Paper beats Rock'
  }
  else if (humanChoice == 'rock' && computerChoice == 'scissor') {
    humanScore++
    playedRound = 'rock beats scissor'
  }
  else if (humanChoice == 'paper' && computerChoice == 'rock') {
    humanScore++
    playedRound = 'Paper beats Rock'
  }
  else if (humanChoice == 'paper' && computerChoice == 'scissor') {
    computerScore++
    playedRound = 'Scissor beats Paper'
  }
  else if (humanChoice == 'scissor' && computerChoice == 'rock') {
    computerScore++
    playedRound = 'Rock beats Scissor'
  }
  else if (humanChoice == 'scissor' && computerChoice == 'paper') {
    humanScore++
    playedRound = 'Scissor beats Paper'
  }
  else if (humanChoice == computerChoice) {
    playedRound = 'You both selected same choice!'
  }
  gameCount++
  let li = document.createElement("li")
  li.textContent = `Rounds ${gameCount}: ${playedRound}, Your Choice: ${humanChoice}, Computer Choice: ${computerChoice}, Your Score: ${humanScore}, Computer Score: ${computerScore}`
  rounds.appendChild(li)
  if (gameCount === 5) finalScore()
}

function finalScore () {
  result.innerHTML = `<div>
    <h1>${humanScore > computerScore ? 'You WON!!!' : humanScore < computerScore ? 'Computer won, You lose!': 'No one Won!, No one lose!'}</h1>
  </div>`
}

function resetGame() {
  rounds.innerHTML = ''
  result.innerHTML = ''
  gameCount = 0
  humanScore = 0
  computerScore = 0
}

// select Element
let rock = document.getElementById("rock")
let paper = document.querySelector("#paper")
let scissor = document.getElementById("scissor")
let result = document.getElementById("result")
let rounds = document.getElementById("rounds")

// hover effect
rock.onmouseover = () => rock.style.borderColor="lightslategrey"
rock.onmousedown = () => rock.style.borderColor="aqua"
rock.onmouseout = () => rock.style.borderColor = ''
paper.onmouseover = () => paper.style.borderColor="lightslategrey"
paper.onmousedown = () => paper.style.borderColor="aqua"
paper.onmouseout = () => paper.style.borderColor = ''
scissor.onmouseover = () => scissor.style.borderColor="lightslategrey"
scissor.onmousedown = () => scissor.style.borderColor="aqua"
scissor.onmouseout = () => scissor.style.borderColor = ''

rock.onclick = () => playRound("rock")
paper.onclick = () => playRound("paper");
scissor.onclick = () => playRound("scissor");
