let humanScore = 0
let computerScore = 0

let isRunning = true

const choices = ['r', 'p', 's']

while (isRunning) {
  const humanChoice = prompt("Choose r, p, or s").toLowerCase()

  // check for invalid input
  if (!choices.includes(humanChoice)) {
    alert('Invalid input. You need to choose r, p, or s.')
  }
  
  const randomIndex = Math.floor( Math.random() * choices.length )
  const computerChoice = choices[randomIndex]
  
  if (
    (humanChoice === 'r' && computerChoice === 's') || 
    (humanChoice === 'p' && computerChoice === 'r') || 
    (humanChoice === 's' && computerChoice === 'p')
  ) { 
    alert("you won!")
    humanScore++
  } else if (humanChoice === computerChoice) { // if tie
    alert("it was a tie!")
  } else { 
    // computer won
    alert("you lost!")
    computerScore++
  }
  
  alert(`Human: ${humanScore} | Computer: ${computerScore}`)
  
  isRunning = confirm('do you want to play again?')
}

alert('Goodbye')