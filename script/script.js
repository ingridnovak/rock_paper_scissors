'use strict';

function getComputerChoice(){
    let arr = ['Rock', 'Scissors', 'Paper'];
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return 'Its a tie! Next move!'
    }
     if((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection ==='Paper') || (playerSelection === 'Paper' && computerSelection === 'Rock')){
        return 'You win this round! Next move!'
      }
     if((playerSelection === 'Scissors' && computerSelection === 'Rock') || (playerSelection === 'Paper' && computerSelection ==='Scissors')||(playerSelection === 'Scissors' && computerSelection ==='Paper') || (playerSelection === 'Rock' && computerSelection === 'Paper')){
        return 'You lose! try again';
    }
  }
   
  const playerSelection = "Scissors";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));