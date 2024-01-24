'use strict';


  
let yourCount = 0;
let compCount = 0;

let button = document.getElementById('play');

let res = document.getElementById('result');
let count = document.getElementById('count');

let playerSelection;
let choses = document.querySelector('#choose');
choses.addEventListener('click',(e) => {
    let target = e.target;
    switch(target.id){
        case "rock" :
        playerSelection = "rock";
        break;
        case "paper":
        playerSelection = "paper";
        break;
        case "scissors":
        playerSelection = "scissors";
        break;

    }
   game()
})


function stopGame(){
   
    console.log(compCount + '- compcount' + yourCount + '- yourcount')
    if(yourCount === compCount){
        res.textContent =  "Finish! it's a tie."
    }else if( compCount > yourCount){
        res.textContent =  'Finish! You lose('
    }else {
        res.textContent =  'Finish! You win!'
    }

    compCount = 0;
    yourCount = 0;


    
}

function game(){
    count.textContent = "Your count : " + yourCount + ' Computer count : ' + compCount;
   if(compCount === 5 || yourCount === 5){
   
        return (stopGame());
    
}
   
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
           res.textContent = "It's a tie";
          
           
           break;
        case 1:
            yourCount +=1;
            res.textContent =  'You win! You count is ' + yourCount  + ' and computer is ' + compCount;
            break;
        case -1:
            compCount +=1;
            res.textContent =  'You Lose! You count is ' + yourCount + ' and computer is ' + compCount;
            break;
    }

   

}


   

