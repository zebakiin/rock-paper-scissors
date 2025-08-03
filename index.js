console.log("Hello Team!")

function getComputerChoice () {
    let result
    result = Math.random()

    if (result >= 2/3) {
        console.log ("Rock!")
    }
    else if (result <= 1/3) { 
        console.log ("Paper!");
    }
    else console.log ("Scissors!");
    return result;
}
console.log (getComputerChoice())

function getHumanChoice () {
    let answer = prompt("1: Rock 2: Paper 3: Scissors!");

    if (answer == "Rock" || answer == 1 ) {
        console.log ("Rock!")}

    else if (answer == "Paper"|| answer == 2) {
        console.log ("Paper!")}

    else if (answer == "Scissors"|| answer == 3) {
        console.log ("Scissors!")}
    
    else {console.log ("Hey that wasnt an option >:(") }
    };

getHumanChoice()

let humanScore = 0; 
let computerScore = 0;
  


    

  function playRound (humanChoice, computorChoice) {
   
  }
 