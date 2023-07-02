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

if (playerWinner > computerWinner) {
    console.log("You Win!")
}
if (playerWinner < computerWinner) {
    console.log("You Lose!")
}


}

const btn = document.querySelectorAll('#btn');
/*
btn.addEventListener('click', function (e) {
    let fired_button = btn.value
console.log(fired_button)
  });*/

  btn.forEach((button) => {

    button.addEventListener('click', () => {
     console.log(button.value)
     console.log(playRound(button.value, getComputerChoice()))
    });
  });



