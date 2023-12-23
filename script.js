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



let winner=""

game();

function game(){

    //this function calls playRound() 5 times.

    let result=0;

    while(result<5){
        
        let computerSelection=getComputerChoice();
        let playerSelection=getPlayerChoice();
        
        
        console.log(`Computer: ${computerSelection}`);
        console.log(`You: ${playerSelection}`);
        result++
        console.log(`Round ${result} result is : `);
        playRound(computerSelection,playerSelection);
       
   
}
}







function playRound(computerSelection,playerSelection){
    
    //this function logs if the player has won or the computer has won based on the playerSelection and computerSelection
    
    if (playerSelection==="rock" && computerSelection==="scissors"){
        console.log(`Computer chose ${computerSelection} and you chose ${playerSelection}. Rock breaks scissors.
        You win !`)     
        

    }

    
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        console.log(`Computer chose ${computerSelection} and you chose ${playerSelection}.
        Rock breaks scissors.You lose.`)
        
    
    }
    
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        console.log(`Computer chose ${computerSelection} and you chose ${playerSelection}.
        Scissors cut paper.You lose.`)
        
    }

    else if (playerSelection==="scissors" && computerSelection==="paper"){
        console.log(`Computer chose ${computerSelection} and you chose ${playerSelection}.
        Scissors cut paper.You win!`)
        
          
       
    }
    
    else if (playerSelection==="paper" && computerSelection==="rock"){
        console.log(`Computer chose ${computerSelection} and you chose ${playerSelection}.
        Paper wraps rock.You win!`)
       
        
        
    }
    else if (playerSelection==="rock" && computerSelection==="paper"){
        console.log(`Computer chose ${computerSelection} and you chose ${playerSelection}.
        Paper wraps rock.You lose.`)
         
        
    }
            
            

    else if (playerSelection===computerSelection){
        console.log(`Computer chose ${computerSelection} and you chose ${playerSelection}. It\'s a tie ! Try again.`)
        
    }
    

    
}
