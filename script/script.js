'use strict';



let round = 0;


function countRound(){

return round += 1;
}


function getComputerChoice(){
    let arr = ['Rock', 'Scissors', 'Paper'];
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function playRound(playerSelection, computerSelection) {
   
    if(round >= 4){
        return 'Game over!';
    }
    console.log(round)
    console.log('player - ' + playerSelection + ' and computer ' + computerSelection)
    
    if(playerSelection === computerSelection){
        return 'its a tie'
    }

    if((playerSelection === 'Scissors' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Rock' && computerSelection === 'Scissors')){
        return 'You win!'
    }
   
    if((playerSelection === 'Scissors' && computerSelection === 'Rock') || (playerSelection === 'Paper' && computerSelection === 'Scissors') || (playerSelection === 'Rock' && computerSelection === 'Paper')){
        return 'You lose!'
    }

}   

   
  const playerSelection = 'Scissors';
  

  document.getElementById('play').addEventListener('click', () => {countRound(); console.log(playRound(playerSelection, getComputerChoice()))})
