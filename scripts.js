/*
TODO:


*/
console.log("Hello!")

var humanScore = 0;
var computerScore = 0;

var rockbtn = document.querySelector("#rock-btn");
var paperbtn = document.querySelector("#paper-btn");
var scissorsbtn = document.querySelector("#scissors-btn");
const results = document.querySelector("#result");


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
    playGame("rock");
})

const onClickPaper = paperbtn.addEventListener("click", () => {
    console.log("paper");
    playGame("paper");
})

const onClickScissors = scissorsbtn.addEventListener("click", () => {
    console.log("scissors");
    playGame("scissors");
})





function playRound(computerChoice, humanChoice) {
    if (![beats] === humanChoice) {
        alert("ERROR! Invalid!")
    } else if (humanChoice === computerChoice) {
        console.log(`Tied! ${humanChoice} vs ${computerChoice}`)
    } else if (beats[humanChoice] === computerChoice) {
        humanScore++;
    } else if (beats[humanChoice] !== computerChoice) {
        computerScore++;
    }

    console.log("\n\n Computer Score: " + computerScore);
    console.log("\n Human Score: " + humanScore);
}


function playGame(humanChoice) {

    if(humanScore < 5 && computerScore < 5){
        playRound(getComputerChoice(), humanChoice);
    }
}