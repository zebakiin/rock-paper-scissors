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

//Asks the Human for their answer 
function askHuman () {answer = prompt("1: Rock 2: Paper 3: Scissors!").toLowerCase();
                        return answer;
}

askHuman();

//Accepts the answer and returns rock paper or scissors
function getHumanChoice () {
    
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
     }
    ;
// ouputs the answers for the viewer
    function answers () {
console.log ("You have chosen..:", humanChoice)
console.log ("It chose..:", computerChoice)}

//calls all these above
function getChoices() {askHuman(), humanChoice, computerChoice, answers()}

  


   const humanChoice = getHumanChoice(); 
  const computerChoice = getComputerChoice();

 
  
  const noWin = (humanChoice == computerChoice);

  const humanWins = (humanChoice == "rock" && computerChoice == "scissors" ||
     humanChoice == "scissors" && computerChoice == "paper" ||
      humanChoice == "paper" && computerChoice == "rock");
  const computerWins =(humanChoice == "rock" && computerChoice == "paper" ||
     humanChoice == "scissors" && computerChoice == "rock" ||
      humanChoice == "paper" && computerChoice == "scissors");
  

 




  function playGame () {

        function playRound () {
            getChoices();


        //sets both scores to 0

            let humanScore = 0; 
            let computerScore = 0;

        //incriment the scores based on who wins
        function scoreKeeper () {
            if (humanWins) {humanScore++}
            else if (computerWins) {computerScore++}
        }
    //If I choose rock and the other person chooses rock, nothing happens. IF the other person chooses Paper, I lose. If the other person chooses Scissors, I win
    // Rock beats scissors ; Scissors beats Paper ; Paper beats Rock
    if (humanWins) {{console.log ("You are the Vitkor! Stand proud, but dont let your valor get the better of you..."); scoreKeeper(); console.log ("You have:", humanScore,);}
    }
    else if(computerWins) {{console.log ("You have lost this one.. Dont fret for you might still stand victorius"); scoreKeeper(); console.log ("It has:", computerScore,);}
    }
    else if (noWin) {console.log ("No Points for No one")}
    };


    playRound();
            
  };
  
  playGame()
  



 