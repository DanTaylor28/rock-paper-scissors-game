
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
    console.log(getCompChoice());

    function runGame(yourChoice) {

    }
    
    function Main() {
        rockButton.addEventListener('click', function() {
            runGame('rock');
        })
        paperButton.addEventListener('click', function() {
            runGame('paper');
        })
        scissorsButton.addEventListener('click', function() {
            runGame('scissors');
        })
        resetButton.addEventListener('click', function() {
            runGame('reset');
        })
    }


    function increaseUserScore() {

    }

    function increaseCompScore() {

    }

    function resetGame() {

    }

Main();


   

                   
            
            
            
            
