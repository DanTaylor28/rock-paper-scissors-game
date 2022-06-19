
/**
 * Declare constants for DOM elements
 * and add possible choices
 */
    let userScoreEl = document.getElementById('your-tally');
    let compScoreEl = document.getElementById('comp-tally');
    const userScore = 0;
    const compScore = 0;
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
 * Switch statement to determine whether the user
 * or computer wins each game
*/

    function runGame(yourChoice) {
        const compChoice = getCompChoice();
        switch(yourChoice + compChoice) {
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                alert('ITS A DRAW');
                break;
            case 'rockscissors':
            case 'paperrock':
            case 'scissorspaper':
                alert('YOU WON!');
                break;
            case 'rockpaper':
            case 'paperscissors':
            case 'scissorsrock':
                alert('YOU LOST!');
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


    function increaseUserScore() {

    }

    function increaseCompScore() {

    }

    function resetGame() {
        resetButton.addEventListener('click', function() {
            runGame('reset');
        })
    }

main();


   

                   
            
            
            
            
