'use strict';


  
let yourCount = 0;
let compCount = 0;
let result = 0;
let button = document.getElementById('play');

button.addEventListener('click', () => { console.log(game()); })



function stopGame(){
   
      
        button.innerHTML = 'play again!';
        result = 0;
        compCount = 0;
        yourCount = 0;

    if(yourCount > compCount){
        return 'You win!'
    }else if( compCount > yourCount){
        return 'You lose('
    }else {
        return "it's a tie."
    }

    
}

function game(){
    result += 1;
    if(result === 5){
        return (stopGame());
    }
    
    const playerSelection = prompt('Enter your move(scissors, rock or paper?): ').toLowerCase();
function getComputerChoice(){
    let arr = ['rock', 'scissors', 'paper'];
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function playRound(playerSelection, computerSelection) {
    console.log('player - ' + playerSelection + ' and computer ' + computerSelection)

    if(playerSelection === computerSelection){
        return 0;
    }
    if((playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors')){
        return 1;
    }
    if((playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'rock' && computerSelection === 'paper')){
        return -1;
    }

}   
    switch(playRound(playerSelection, getComputerChoice())){
        case 0:
            return "It's a tie";
            break;
        case 1:
            yourCount +=1;
            return 'You win! You count is ' + yourCount  + ' and computer is ' + compCount;
            break;
        case -1:
            compCount +=1;
            return 'You Lose! You count is ' + yourCount + ' and computer is ' + compCount;
            break;
    }

   

}


   

