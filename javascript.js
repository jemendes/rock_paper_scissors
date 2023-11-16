
/*function getComputerChoice () {

    let random = Math.ceil(Math.random()*3)
    let choice

    if(random == 3) {
        choice = 'Rock';
    } else if (random == 2) {
        choice = 'Paper';
    } else {
        choice = 'Scissors';
    }

    return choice
}*/

let playerSelection

const rock = document.querySelector('#r');
rock.addEventListener('click', () => {
    playerSelection = 'Rock';
    console.log(playerSelection);
});

const paper = document.querySelector('#p');
paper.addEventListener('click', () => {
    playerSelection = 'Paper';
    console.log(playerSelection);
});

const scissors = document.querySelector('#s');
scissors.addEventListener('click', () => {
    playerSelection = 'Scissors';
    console.log(playerSelection);
});
    



/*function playRound (computerSelection, playerSelection) {
    
    if (computerSelection == playerSelection) {
        text = 'Its a draw!';
        return text;
    } else if ((computerSelection == 'Rock' && playerSelection == 'Scissors') || (computerSelection == 'Paper' && playerSelection == 'Rock') || (computerSelection == 'Scissors' && playerSelection == 'Paper')) {
        //++computerScore;
        text = 'Computer wins the round!';
        return text;
    } else {
        //++userScore;
        text = 'Player wins the round!';
        return text;
    }

}


function game() {

    let computerScore = 0;
    let userScore = 0;

    for (let i=0; i < 5; i++) {

        let computerSelection = getComputerChoice();
        let playerSelection = prompt('Chose Rock, Paper or Scissors');

        function playRound (computerSelection, playerSelection) {

            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
            let text;
            
            if (computerSelection == playerSelection) {
                text = 'Its a draw!';
                return text;
            } else if ((computerSelection == 'Rock' && playerSelection == 'Scissors') || (computerSelection == 'Paper' && playerSelection == 'Rock') || (computerSelection == 'Scissors' && playerSelection == 'Paper')) {
                ++computerScore;
                text = 'Computer wins the round!';
                return text;
            } else {
                ++userScore;
                text = 'Player wins the round!';
                return text;
            }
        
        }
        
        console.log('Computer: ' + computerScore + ' ' + 'User: ' + userScore);
        console.log(computerSelection + ' vs ' + playerSelection);
        console.log(playRound(computerSelection, playerSelection));
        console.log('');
    }

    if (computerScore > userScore) {
        let text = 'Computer Won the game!';
        console.log(text);
    } else if (userScore > computerScore) {
        let text = 'Player Won the Game!';
        console.log(text);
    } else {
        let text = 'It is a Tie';
        console.log(text);
    }

}

game()*/