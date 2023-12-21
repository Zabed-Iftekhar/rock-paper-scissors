//script.js//


function getComputerChoice(){
    let choices=["rock","paper","scissors"];
    let randomChoice=choices[Math.floor(Math.random()*3)];
    let computerSelection=randomChoice;
    return computerSelection;
    
}


function getPlayerChoice(){
    let playerSelection=prompt("What choice would you make in this round ?","");
    playerSelection=playerSelection.toLowerCase();
    if (!(playerSelection==="rock" || playerSelection=="paper"||
    playerSelection=="scissors")){
        console.log("incorrect input");
    }
    else{
        return playerSelection;
    }
        
}


let computerSelection=getComputerChoice();
let playerSelection=getPlayerChoice();
console.log(`Computer: ${computerSelection}`);
console.log(`You: ${playerSelection}`);
