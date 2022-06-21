
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
 * a game is won, and shows the results in the DOM.
 */

    function winGame(yourChoice, compChoice) {
        userScore++;
        userScoreEl.innerHTML = userScore;
        if (userScore<10) {resultPara.innerHTML = (`You played ${yourChoice} 
        and your opponent played ${compChoice}, YOU WIN!!`);
        } else if (userScore === 10) {
            resultPara.innerHTML = ('You won this game! Reset to play again :D');
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
            resetGame();
        }
    }

    /**
 * This function increments the computers score by 1 when 
 * a game is lost, and shows the results in the DOM.
 */

    function loseGame(yourChoice, compChoice) {
        compScore++;
        compScoreEl.innerHTML = compScore;
        if(compScore<10) {resultPara.innerHTML = (`You played ${yourChoice} and your opponent played ${compChoice}
        , YOU LOST THIS ONE...`);
        } else if (compScore === 10) {
            resultPara.innerHTML = ('You lost this game! Reset to play again!');
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
            resetGame();
        }
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
 * or computer wins, or if its a tie game.
*/

    function runGame(yourChoice) {
        const compChoice = getCompChoice();
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
            console.log('you clicked reset');
        })
    }

    


main();
resetGame();


   

                   
            
            
            
            
