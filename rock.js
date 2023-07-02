let playerWinner = 0
let computerWinner = 0



function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    let randomArray = ["Rock", "Paper", "Scissors"]
    return randomArray[randomNumber]
}

function playRound(playerSelection, computerSelection) {

    if (/rock/i.test(playerSelection) == true && computerSelection == "Scissors"){
        playerWinner = playerWinner + 1
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
    if (/scissors/i.test(playerSelection) == true && computerSelection == "Paper"){
        playerWinner = playerWinner + 1
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
    if (/paper/i.test(playerSelection) == true && computerSelection == "Rock"){
        playerWinner = playerWinner + 1
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()){
        return "Tie " + playerSelection + " same as " + computerSelection
    }
    else { 
        computerWinner = computerWinner + 1
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }

  }
   
function game() {

   /* for (let i = 0; i < 5; i++){*/

    let playerSelection = prompt("Enter Rock, Paper or Scissors") 
    
if (/paper/i.test(playerSelection) == false  && /scissors/i.test(playerSelection) == false && /rock/i.test(playerSelection) == false) {
    playerSelection = prompt("Invalid Entry: Enter Rock, Paper or Scissors")
 /*}*/

console.log(playRound(playerSelection, getComputerChoice()))
    }
    if (playerWinner == computerWinner) {
        console.log("Tie!")
    }




}

const btn = document.querySelectorAll('#btn');


  btn.forEach((button) => {

    button.addEventListener('click', () => {
     console.log(button.value)
     let gameResult = (playRound(button.value, getComputerChoice()))
     const container = document.querySelector('#container');
     const game = document.createElement('p');
     game.classList.add('game');
     game.textContent = gameResult;

     container.appendChild(game);

console.log(computerWinner)
     if (playerWinner == 5) {
        console.log("You Win!")

        const container = document.querySelector('#container');
     const gameWinner = document.createElement('h3');
     gameWinner.classList.add('gameWinner');
     gameWinner.textContent = "You Win!";
     container.appendChild(gameWinner);
     playerWinner = 0
     computerWinner = 0
    }
    if (computerWinner == 5) {
        console.log("You Lose!")

        const container = document.querySelector('#container');
        const gameLoser = document.createElement('h3');
     gameLoser.classList.add('gameLoser');
     gameLoser.textContent = "You Win!";
     container.appendChild(gameLoser);
     playerWinner = 0
     computerWinner = 0
    }
    });
  });

 


