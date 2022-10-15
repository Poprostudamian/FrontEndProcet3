function computerPlay(choice = ["rock", "paper", "scissors"]){
    return choice[Math.floor(Math.random()*choice.length)];
}

    let humanScore = 0;
    let computerScore = 0;

function points(){
    if(humanScore > computerScore){
        console.log(`\nThe winner is You with the: ${humanScore} point/s!!!`);
        console.log(`The losser is computer with the: ${computerScore} point/s!!!`);
    }else{
        console.log(`\nThe winner is computer: ${computerScore} point/s!!!`);
        console.log(`The looser is You with the: ${humanScore} point/s!!!`);
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    points();
}

function playRound(playerSelection, computerSelection){
    console.log(`\nPlayer selection: ${playerSelection}\n`);
    console.log(`Computer selection: ${computerSelection}\n`);

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
}
game();
