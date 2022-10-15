function computerPlay(choice = ["rock", "paper", "scissors"]){
    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerSelection, computerSelection){
    console.log({playerSelection});
    console.log({computerSelection});

    let humanScore = 0;
    let computerScore = 0;

        switch(playerSelection){
            case "rock":
                if((playerSelection === "rock") && (computerSelection === "paper")){
                    console.log("Paper beats rock!!! You lost");
                    computerScore++;
                }else if(playerSelection === "rock" && computerSelection === "scissors"){
                    console.log("Rock beats scissors!!! You won");
                    humanScore++;
                }else if(playerSelection === "rock" && computerSelection === "rock"){
                    console.log("Same move");
                }
                break;
            case "paper":
                if(playerSelection === "paper" && computerSelection === "rock"){
                    console.log("Paper beats rock!!! You won");
                    humanScore++;
                }else if(playerSelection === "paper" && computerSelection === "scissors"){
                    console.log("Scissors beats paper!!! You lost");
                    computerScore++;
                }else if(playerSelection === "paper" && computerSelection === "paper"){
                    console.log("Same move");
                }
                break;
            case "scissors":
                    if(playerSelection === "scissors" && computerSelection === "rock"){
                        console.log("Rock beats scissors!!! You lost");
                        computerScore++;
                    }else if(playerSelection === "scissors" && computerSelection === "paper"){
                        console.log("Scissors beats paper!!! You won");
                        humanScore++;
                    }else if(playerSelection === "scissors" && computerSelection === "scissors"){
                        console.log("Same move");
                    }
                break;
            default:
                console.log("Error");
                break;
        }
        console.log({humanScore});
        console.log({computerScore});
    }

function game(){
    for(let i = 0; i < 5; i++){
            playRound(playerSelection, computerSelection);
    }  
}

const playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase();
const computerSelection = computerPlay();
// playRound(playerSelection, computerSelection);
game();
