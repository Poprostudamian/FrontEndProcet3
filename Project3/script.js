function computerPlay(choice = ["rock", "paper", "scissors"]){
        return choice[Math.floor(Math.random()*choice.length)];
}

//== "rock" && computerPlay()
function playRound(playerSelection, computerSelection){
        if(playerSelection == computerSelection){
            console.log("Same move");
            }else if(playerSelection == "paper" && computerSelection == "rock"){
                console.log("Paper beats rock!!! You won");
            }else if(playerSelection == "scissors" && computerSelection == "rock"){
                console.log("Rock beats scissors!!! You lost");
            }else if(playerSelection == "paper" && computerSelection == "scissors"){
                console.log("Scissors beats paper!!! You lost");
            }else if(playerSelection == "rock" && computerSelection == "scissors"){
                console.log("Rock beats sccisors!!! You won");
            }else if(playerSelection == "scissors" && computerSelection == "paper"){
                console.log("Paper beats rock!!! You won");
            }else if(playerSelection == "scissors" && computerSelection == "paper"){
                console.log("Paper beats rock!!! You won");
            }else{
                console.log("Computer wins!!! You lost")
            }

            console.log(typeof playerSelection)
            console.log(computerSelection)
    
}

const playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase;
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
