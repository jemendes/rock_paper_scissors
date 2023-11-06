
function getComputerChoice () {

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
}

function playRound (computerSelection, playerSelection) {

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let text;
    
    if (computerSelection == playerSelection) {
        text = 'Its a draw!';
        return text;
    } else if ((computerSelection == 'Rock' && playerSelection == 'Scissors') || (computerSelection == 'Paper' && playerSelection == 'Rock') || (computerSelection == 'Scissors' && playerSelection == 'Paper')) {
        text = 'Computer Wins!';
        return text;
    } else {
        text = 'Player Wins!';
        return text;
    }

}

let computerSelection = getComputerChoice();
let playerSelection = "Paper";

console.log(computerSelection + ' vs ' + playerSelection);
console.log(playRound(computerSelection, playerSelection));