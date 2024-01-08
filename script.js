//script.js//

let btnRock=document.querySelector('#rock');
let btnPaper=document.querySelector('#paper');
let btnScissors=document.querySelector('#scissors');
let playerScoreDiv=document.querySelector('#player-score');
let computerScoreDiv=document.querySelector('#computer-score');
let result =document.querySelector('.result');

let playerSelection="";
let computerSelection="";
let playerScore=0;
let computerScore=0;

playerScoreDiv.append(playerScore);
computerScoreDiv.append(computerScore);

btnPaper.addEventListener('click',()=>{
    playerSelection=btnPaper.innerText;
    computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    
    
})
    

btnScissors.addEventListener('click',()=>{
    playerSelection=btnScissors.innerText;
    computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    
})


 btnRock.addEventListener('click',function rockFunction(){

    playerSelection=btnRock.innerText;
    computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    
    
})



function getComputerChoice(){
    let choices=["Rock","Paper","Scissors"];
    let randomChoice=choices[Math.floor(Math.random()*3)];
    computerSelection=randomChoice;
    return computerSelection;
}




function playRound(playerSelection,computerSelection){
    
    
    if (playerSelection==computerSelection){
        result.innerText=`Computer chose ${playerSelection}. It's a tie. Try again !`
        
    }

    else if (computerSelection=="Paper" && playerSelection==="Rock" ||
    computerSelection=="Scissors" && playerSelection==="Paper" ||
    computerSelection=="Rock" && playerSelection==="Scissors" ){
        result.innerText=`Computer chose ${computerSelection}. You lose.`
        computerScore=++computerScore;
        computerScoreDiv.innerText=`Computer Scored :${computerScore}`;
        
        console.log(`Computer scored ${computerScore}`);
        if (computerScore===5){
            result.innerText="Computer scored 5, you lost the game. Do you want to play again ?";
            computerScore=0;
            playerScore=0;
        }
        else if (playerScore===5){
            result.innerText="You scored 5, you win the game ! Play again !";
            computerScore=0;
            playerScore=0;
        }
        

    }
    else if (computerSelection=="Rock" && playerSelection==="Paper" ||
    computerSelection=="Paper" && playerSelection==="Scissors" ||
    computerSelection=="Scissors" && playerSelection==="Rock" ){
        result.innerText=`Computer chose ${computerSelection}. You win !`
        
         playerScore=++playerScore;
         playerScoreDiv.innerText=`You Scored :${playerScore}`;

        console.log(`You scored ${playerScore}`);
        if (playerScore===5){
            result.innerText="You scored 5, you win ! Play again !";
            computerScore=0;
            playerScore=0;
        }
        else if (computerScore===5){
            result.innerText="Computer scored 5, you lost the game. Do you want to play again ?";
            computerScore=0;
            playerScore=0;
        }
        
    }  
}



