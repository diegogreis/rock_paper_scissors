let win = 0;
let lost = 0;
let tie = 0;


function userPlay() {
    const userChoice = prompt('Choose your destiny: Rock, Paper ou Scissors? ').toLowerCase();
    return userChoice
}

function cpuPlay() {
    let cpuChoice = Math.random();
    if (cpuChoice < 0.34) {
            cpuChoice = 'rock';
    } else if (cpuChoice <= 0.67) {
            cpuChoice = 'paper';
    } else {
            cpuChoice = 'scissors';
    }
    return cpuChoice
}

function playRound(userChoice, cpuChoice) {
    /* Rock choice */
    if (userChoice == 'rock' && cpuChoice == 'rock') {
        tie += 1;
        return alert('It\'s a draw!');
    } else if (userChoice == 'rock' && cpuChoice == 'paper') {
        lost += 1;
        return alert('You lost! Paper beats rock!');
    } else if (userChoice == 'rock' && cpuChoice == 'scissors') {
        win += 1;
        return alert('You won! Rock beats Scissors!');
    /* Paper choice */
    } else if (userChoice == 'paper' && cpuChoice == 'rock') {
        win += 1;
        return alert('You won! Paper beats Rock!'); 
    } else if (userChoice == 'paper' && cpuChoice == 'paper') {
        tie += 1;
        return alert('It\'s a draw!');
    } else if (userChoice == 'paper' && cpuChoice == 'scissors') {
        lost += 1;
        return alert('You lost! Scissors beats Paper!');
    /* Scissors choice */
    } else if (userChoice == 'scissors' && cpuChoice == 'rock') {
        lost += 1;
        return alert('You lost! Rock beats Scissors!'); 
    } else if (userChoice == 'scissors' && cpuChoice == 'paper') {
        win += 1;
        return alert('You won! Scissors beats Paper!');
    } else if (userChoice == 'scissors' && cpuChoice == 'scissors') {
        tie += 1;
        return alert('It\'s a draw!'); 
    } else {
        if (userChoice != 'rock' || 'paper' || 'scissors');
        return alert('Invalid option!');
    }
}

function game() {
    for (i = 0; i < 4; i++) {
    playRound(userPlay(), cpuPlay());
    }
}

console.log(game(playRound(userPlay(), cpuPlay())));

let winner = (win > lost) ? 'You are the Winner!' :
    (win < lost) ? 'You lost!' :
    'No winner, that was a tie!'

alert(`You won ${win} times; You lost ${lost} times; We got a tie ${tie} times!`);
alert(winner);