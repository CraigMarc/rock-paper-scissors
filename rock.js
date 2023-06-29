

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    let randomArray = ["Rock", "Paper", "Scissors"]
    return randomArray[randomNumber]
}

function playRound(playerSelection, computerSelection) {

    if (/rock/i.test(playerSelection) == true && computerSelection == "Scissors"){
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
    if (/scissors/i.test(playerSelection) == true && computerSelection == "Paper"){
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
    if (/paper/i.test(playerSelection) == true && computerSelection == "Rock"){
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
    if (playerSelection == computerSelection){
        return "Tie " + playerSelection + " same as " + computerSelection
    }
    else { 
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }

  }
   
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice()
  console.log(playRound(playerSelection, computerSelection));
  console.log(playerSelection)
  console.log(computerSelection)