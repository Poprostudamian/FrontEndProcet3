function computerPlay(choice = ["rock", "paper", "scissors"]){
        return choice[Math.floor(Math.random()*choice.length)];
}

//== "rock" && computerPlay()
function playRound(playerSelection, computerSelection){
//        if(toString(playerSelection) == computerSelection){
//         console.log("Same move");
//         }else if(toString(playerSelection) == "paper" && computerSelection == "rock"){
//             console.log("Paper beats rock!!! You won");
//         }else if(toString(playerSelection) == "scissors" && computerSelection == "rock"){
//             console.log("Rock beats scissors!!! You lost");
//         }else if(toString(playerSelection) == "paper" && computerSelection == "scissors"){
//             console.log("Scissors beats paper!!! You lost");
//         }else if(toString(playerSelection) == "rock" && computerSelection == "scissors"){
//             console.log("Rock beats sccisors!!! You won");
//         }else if(toString(playerSelection) == "scissors" && computerSelection == "paper"){
//             console.log("Paper beats rock!!! You won");
//         }else if(toString(playerSelection) == "scissors" && computerSelection == "paper"){
//             console.log("Paper beats rock!!! You won");
//         }else{
//             console.log("Computer wins!!! You lost")
//         }
switch(toString(playerSelection)){
            case "rock":
                if((toString(playerSelection) == "rock") && (computerSelection == "paper")){
                    console.log("Paper beats rock!!! You lost");
                }else if(toString(playerSelection) == "rock" && computerSelection == "scissors"){
                    console.log("Rock beats scissors!!! You lost");
                }else if(toString(playerSelection) == "rock" && computerSelection == "rock"){
                    console.log("Same move");
                }
                break;
            case "paper":
                if(toString(playerSelection) == "paper" && computerSelection == "rock"){
                    console.log("Paper beats rock!!! You won");
                }else if(toString(playerSelection) == "paper" && computerSelection == "scissors"){
                    console.log("Scissors beats paper!!! You lost");
                }else if(toString(playerSelection) == "paper" && computerSelection == "paper"){
                    console.log("Same move");
                }
                break;
            case "scissors":
                    if(toString(playerSelection) == "scissors" && computerSelection == "rock"){
                        console.log("Rock beats scissors!!! You lost");
                    }else if(toString(playerSelection) == "scissors" && computerSelection == "paper"){
                        console.log("Scissors beats paper!!! You won");
                    }else if(toString(playerSelection) == "scissors" && computerSelection == "scissors"){
                        console.log("Same move");
                    }
                break;
            default:
                console.log("Error");
        }
}

const playerSelection = prompt(("Rock? Paper? Scissors?").toLowerCase());
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
