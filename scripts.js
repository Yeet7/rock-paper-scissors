/*
TODO:

    1. Create function that will randomly determine; rock, paper, or scissors.
        - math.random(), if num 0 > 0.3 => scissors, etc.
    2. Write for input of user choice (prompt), store the variable.
        - prompt: Input choice of rock paper or scissors.
        - let humanChoice = prompt()
        - return humanChoice
    3. Create human & computerscore
        - humanScore = 0
        - computerScore = 0
    4. Create playRound function, and update human/computer score depending
        - playRound{
            wrap all variables:
            switch (getHumanChoice){
                case paper{
                    if (getComputerChoice === rock){
                        log "you lose"
                    }
                }
            }
        }
    5. Create playGame, move prev. variables to within new func. Play 5 rounds.
        playGame(){
            if choice === choice {
                break
            }
        }
        -for loop everything to iterate 5 times.

*/
console.log("Hello!")

function getComputerChoice() {
    numChoice = Math.random();
    if (numChoice < 0.3) {
        return "paper";
    }
    else if (numChoice >= 0.3 && numChoice <= 0.6) {
        return "scissors";
    } else {
        return "rock";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice of rock, paper, or scissors: ");
    return humanChoice;
}

var humanScore = 0;
var computerScore = 0;

function playRound(computerChoice, humanChoice) {
    switch (humanChoice) {
        case "paper":
            if (computerChoice === "rock") {
                console.log("You won against the computer!");
                humanScore++;
            }
            else if (computerChoice === "scissors") {
                console.log("You lost against the computer!");
                computerScore++;
            }
            else {
                console.log("You tied against the computer!");
                computerScore++;
                humanScore++;
            }
            break;
        case "rock":
            if (computerChoice === "scissors") {
                console.log("You won against the computer!");
                humanScore++;
            }
            else if (computerChoice === "paper") {
                console.log("You lost against the computer!");
                computerScore++;
            }
            else {
                console.log("You tied against the computer!");
                computerScore++;
                humanScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                console.log("You won against the computer!");
                humanScore++;
            }
            else if (computerChoice === "rock") {
                console.log("You lost against the computer!");
                computerScore++;
            }
            else {
                console.log("You tied against the computer!");
                computerScore++;
                humanScore++;
            }
            break;
        default:
            console.log("You failed to enter a proper move, computer wins!");
            computerScore++;
            break;
    }

    console.log("\n Computer Score: " + computerScore);
    console.log("\n Human Score: " + humanScore);
}


function playGame(){
    for(var i = 0; i < 5; i++){
        playRound(getComputerChoice(),getHumanChoice());
    }

    if(humanScore > computerScore){
        console.log("You win the entire game!");
    }
    else if(humanScore < computerScore){
        console.log("You lost the entire game!");
    }
    else{
        console.log("You tied the whole game!");
    }
}

playGame();