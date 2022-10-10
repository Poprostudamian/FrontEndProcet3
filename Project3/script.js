const choice = ["rock", "paper", "scissors"];
let readyChoiceComputers;   
function computerPlay(choice){
        let randomChoice = Math.floor(Math.random()*choice.length);
        // console.log(choice[randomChoice]);
        // readyChoiceComputers = choice[randomchoice];
        // console.log(readyChoiceComputers);
        return ;
}

console.log(computerPlay(choice));
//== "rock" && computerPlay()
function playRound(playerSelection, computerSelection){
    // if(playerSelection == choice.indexOf[0] || playerSelection == choice.indexOf[1] || playerSelection == choice.indexOf[2]){
    //     console.log("The same move");
    // if (playerSelection === "rock" && choice.indexOf[1]){
    //     console.log("You Lose! Paper beats Rock");
    // }else if (playerSelection === "rock" && choice.indexOf[2]){
    //     console.log("You Won! Rock beats Scissors");
    // }else if (playerSelection === "paper" && choice.indexOf[0]){
    //     console.log("You Won! Paper beats Rock");
    // }else if (playerSelection === "paper" && choice.indexOf[2]){
    //     console.log("You Lose! Scissors beats paper");
    // if (playerSelection == choice.indexOf[0] && choice.indexOf[1]){
    //     console.log("You Lose! Paper beats Rock");
    // }else if (playerSelection == choice.indexOf[0] && choice.indexOf[2]){
    //     console.log("You Won! Rock beats Scissors");
    // }else if (playerSelection == choice.indexOf[1] && choice.indexOf[0]){
    //     console.log("You Won! Paper beats Rock");
    // }else if (playerSelection == choice.indexOf[1] && choice.indexOf[2]){
    //     console.log("You Lose! Scissors beats paper");
    // }else{
    //     console.log("The same move")
    // }
        // if((playerSelection == "rock") && (computerSelection == "rock") == choice[0]){
        // console.log("tak");
        // }else{
        //     console.log("nie");
        // }
        if(playerSelection  == choice[0]){
            console.log("tak");
            }
    
}

// else if (playerSelection == "scissors" && playerSelection == choice.indexOf[2]){
//     console.log("The same move")
// }
const playerSelection = "rock";
// prompt("Rock? Paper? Scissors?").toLowerCase
const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
playRound();
// if(playerSelection  == choice[0]){
//     console.log("tak");
//     }

if((computerSelection == choice.indexOf("rock"))  == choice[0]){
    console.log("tak");
    }
