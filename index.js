console.log("Hello Team!")

function getComputerChoice () {
    let result
    result = Math.random()

    if (result >= 2/3) {
        console.log ("Rock!")
        return "rock"
    }
    else if (result <= 1/3) { 
        console.log ("Paper!")
        return "paper"
    }
    else console.log ("Scissors!")
    return "scissors"
    return result;
}


function getHumanChoice () {
    let answer = prompt("1: Rock 2: Paper 3: Scissors!").toLowerCase();

    if (answer == "rock" || answer == 1 ) {
        console.log ("Rock!")
        return "rock"
    }

    else if (answer == "paper"|| answer == 2) {
        console.log ("Paper!")
        return "paper"
    }

    else if (answer == "scissors"|| answer == 3) {
        console.log ("Scissors!")
        return "scissors"
    }
    
    else {console.log ("Hey that wasnt an option >:(")
        return "not taken"
     }
    };


let humanScore = 0; 
let computerScore = 0;
  




  function playRound (humanChoice, computerChoice) {

//If I choose rock and the other person chooses rock, nothing happens. IF the other person chooses Paper, I lose. If the other person chooses Scissors, I win
// Rock beats scissors ; Scissors beats Paper ; Paper beats Rock
//
if (humanChoice == "rock" && computerChoice == "scissors" ||
     humanChoice == "scissors" && computerChoice == "paper" ||
      humanChoice == "paper" && computerChoice == "rock")
       {console.log ("You are the Vitkor! Stand proud, but dont let your valor get the better of you..."); humanScore++; console.log ("You have:", humanScore)}

else if (humanChoice == "rock" && computerChoice == "paper" ||
     humanChoice == "scissors" && computerChoice == "rock" ||
      humanChoice == "paper" && computerChoice == "scissors"
) {console.log ("You have lost this one.. Dont fret for you might still stand victorius"); computerScore++; console.log ("It has:", computerScore)
}

 else if (humanChoice == computerChoice) {console.log ("No Points for No one")}
    
  }
 
  playRound(getHumanChoice(), getComputerChoice())
  