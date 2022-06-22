/**
 * Declare constants for DOM elements
 * and add possible choices
 */
let userScoreEl = document.getElementById('your-tally');
let compScoreEl = document.getElementById('comp-tally');
let userScore = 0;
let compScore = 0;
let resultPara = document.getElementById('inner-text');
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const resetButton = document.getElementById('reset-button');
const choices = ['Rock', 'Paper', 'Scissors'];

/**
 * Function to generate a random computer
 * choice from the choices array using Math.random
 */
function getCompChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

/**
 * This function increments the users score by 1 when 
 * a game is won, and shows the results in the DOM.
 */
function winGame(yourChoice, compChoice) {
    userScore++;
    userScoreEl.innerHTML = userScore;
    if (userScore < 10) {
        resultPara.innerHTML = (`${yourChoice} Beats ${compChoice}! You Win :D`);
        // Ends the game when user scores 10 points and disables play buttons
    } else if (userScore === 10) {
        resultPara.innerHTML = ('Congrats You Won! Reset To Play Again :D');
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
    // Adds a style class to the resultPara to turn the text green for .6 seconds after each win
    resultPara.classList.add('green-text');
    setTimeout(function () {
        resultPara.classList.remove('green-text');
    }, 600);
}

/**
 * This function increments the computers score by 1 when 
 * a game is lost, and shows the results in the DOM.
 */
function loseGame(yourChoice, compChoice) {
    compScore++;
    compScoreEl.innerHTML = compScore;
    if (compScore < 10) {
        resultPara.innerHTML = (`Opponent Played ${compChoice}! You Lose..`);
        // Ends the game when computer scores 10 points and disables play buttons
    } else if (compScore === 10) {
        resultPara.innerHTML = ('Aww You Lost This Game.. Reset To Play Again!');
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
    // Adds a style class to the resultPara to turn the text red for .6 seconds after each loss
    resultPara.classList.add('red-text');
    setTimeout(function () {
        resultPara.classList.remove('red-text');
    }, 600);
}

/**
 * This function changes the opening paragraph to display the game outcome  
 * when its a draw, using a template literal.
 */
function drawGame(yourChoice) {
    resultPara.innerHTML = (`You Both Played ${yourChoice}! Its A Draw!`);
}

/** 
 * Switch statement to determine whether the user
 * or computer wins, or if its a tie game.
 */
function runGame(yourChoice) {
    const compChoice = getCompChoice();
    switch (yourChoice + compChoice) {
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            drawGame(yourChoice, compChoice);
            break;
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            winGame(yourChoice, compChoice);
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            loseGame(yourChoice, compChoice);
            break;
    }
}

/**
 * The main game function with event listeners for the 
 * rock, paper and scissors buttons.
 */
function main() {
    rockButton.addEventListener('click', function () {
        runGame('Rock');
    });
    paperButton.addEventListener('click', function () {
        runGame('Paper');
    });
    scissorsButton.addEventListener('click', function () {
        runGame('Scissors');
    });
}

/**
 * This function resets the scores to zero and 
 * re-enables the buttons to increment score, so play can be restarted.
 */
function resetGame() {
    resetButton.addEventListener('click', function () {
        userScore = 0;
        compScore = 0;
        userScoreEl.innerHTML = userScore;
        compScoreEl.innerHTML = compScore;
        resultPara.innerHTML = ('Ready To Play Again? Make Your Move!');
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
    });
}

main();
resetGame();