console.log("Hello Team!")


//Makes a Random Choice and gives returns rock paper or scissors
function getComputerChoice () {
    let result
    result = Math.random()

    if (result >= 2/3) {
       
        return "rock"
    }
    else if (result <= 1/3) { 

        return "paper"
    }
    else 
    return "scissors"
}

function getHumanChoice () {

    answer = prompt("1: Rock 2: Paper 3: Scissors!").toLowerCase()

    if (answer == "rock" || answer == 1 ) {
       
        return "rock"
    }

    else if (answer == "paper"|| answer == 2) {
      
        return "paper"
    }

    else if (answer == "scissors"|| answer == 3) {
        
        return "scissors"
    }
    
    else
        return "not taken"
     };
    
//calls all these above

let humanScore = 0
let computerScore = 0




  function playGame () {
    function playRound(humanChoice, computerChoice) {

   if (humanChoice == "rock" && computerChoice == "scissors" ||
     humanChoice == "scissors" && computerChoice == "paper" ||
      humanChoice == "paper" && computerChoice == "rock") {console.log ("You are Viktor! You chose:", humanChoice, "which beats:", computerChoice, ++humanScore)}

        else if ((humanChoice == "rock" && computerChoice == "paper" ||
     humanChoice == "scissors" && computerChoice == "rock" ||
    humanChoice == "paper" && computerChoice == "scissors")) {console.log ("You lost this time You chose:", humanChoice, "which loses to:", computerChoice, ++computerScore)}

    else {console.log ("A standstil - You chose:", humanChoice, "It chose:", computerChoice)}
}
  function winner() {
    if 
  }
//Problem: variable does not redefine itself. Reason: variable takes on assigined value from function. Solution: recall choice function to get new choice. 
// Question: How to recall choice function -> return value



  playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
      playRound(getHumanChoice(), getComputerChoice())
        playRound(getHumanChoice(), getComputerChoice())
          playRound(getHumanChoice(), getComputerChoice())
          
  }
playGame()




 