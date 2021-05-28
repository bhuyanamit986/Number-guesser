let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>  Math.floor(Math.random() * 10);
const compareGuesses = (human, computer, target) => (Math.abs(human - target) >= Math.abs(computer - target)) ? true : false
const updateScore = (winner) => {
  if(winner === 'human') {
    humanScore ++;
  }
  else {
    computerScore ++;
  }
}
const advanceRound = () => {
  currentRoundNumber ++;
}