
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
    const choices = ['rock', 'paper', 'scissors'];

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
 * a game is won.
 */

    function winGame() {
        userScore++;
        userScoreEl.innerHTML = userScore;
    }

    /**
 * This function increments the computers score by 1 when 
 * a game is lost.
 */

    function loseGame() {
        compScore++;
        compScoreEl.innerHTML = compScore;
    }

/**
 * This function changes the opening paragraph to display the game outcome  
 * when its a draw, using a template literal.
 */

    function drawGame(yourChoice) {
        resultPara.innerHTML = (`Both of you played ${yourChoice}!, ITS A DRAW!`);
    }

/** 
 * Switch statement to determine whether the user
 * or computer wins each game
*/

    function runGame(yourChoice) {
        const compChoice = getCompChoice();
        console.log(`You played ${yourChoice} and your opponent played ${compChoice}`);
        switch(yourChoice + compChoice) {
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                drawGame(yourChoice, compChoice);
                break;
            case 'rockscissors':
            case 'paperrock':
            case 'scissorspaper':
                winGame(yourChoice, compChoice);
                break;
            case 'rockpaper':
            case 'paperscissors':
            case 'scissorsrock':
                loseGame(yourChoice, compChoice);
                break;
        }
    }

    function main() {
        rockButton.addEventListener('click', function() {
            runGame('rock');
        })
        paperButton.addEventListener('click', function() {
            runGame('paper');
        })
        scissorsButton.addEventListener('click', function() {
            runGame('scissors');
        })
    }

    function resetGame() {
        resetButton.addEventListener('click', function() {
            runGame('reset');
        })
    }

main();


   

                   
            
            
            
            
