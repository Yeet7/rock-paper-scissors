/*
TODO:


*/
console.log("Hello!")

var humanScore = 0;
var computerScore = 0;

var rockbtn = document.querySelector("#rock-btn");
var paperbtn = document.querySelector("#paper-btn");
var scissorsbtn = document.querySelector("#scissors-btn");


const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}

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


const onClickRock = rockbtn.addEventListener("click", () => {
    console.log("rock");
})

const onClickPaper = paperbtn.addEventListener("click", () => {
    console.log("paper");
})

const onClickScissors = scissorsbtn.addEventListener("click", () => {
    console.log("scissors");
})





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