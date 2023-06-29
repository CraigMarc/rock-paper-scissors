

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    let randomArray = ["Rock", "Paper", "Scissors"]
    return randomArray[randomNumber]
}

console.log(getComputerChoice())