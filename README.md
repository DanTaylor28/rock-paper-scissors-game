# Rock, Paper Scissors Game
AM I RESPONSIVE IMAGE HERE

My game is the universally known roock, paper scissors game. It gives users three different choices to choose from before the computer plays their option and the winner is determined. The goal of the site is to provide a fun, interactive game of chance for users to enjoy whenever they the mood strikes.

The game is aimed at adults and children alike, the rules are simple with an intuitive, easy to follow layout that updates the scoreboard after each turn. Once 10 points are reached by either the user or the computer, the game ends with one winner and you then have the option to restart the game and play again!
* * * 

## Current Features

### The Header

- The header holds the title of the webpage. Its big and bold and aims to grab the users attention from the onset, it also contains a font awesome icon relating to the game.

- The title outlines the name of the game which will show any user visiting the site exactly what its purpose is and what content they can expect to come across!

![page-title](/assets/images/title-screenshot.png)

### Introductory Text

- On opening of the webpage, this text gives you an immediate, brief explanation on the rules of the game and how to get started playing. It outlines that its first to 10 points to win the game.

- This text is also valuable as it explains that you click a choice to begin playing. This will save the user time in wondering how to begin playing.

![intro-text](/assets/images/intro-text-screenshot.png)

### Results Paragraph

- The results after each go replace the introductory text explained above by using .innerHTML and template literals within javascript. It shows to the user whether you have won, drawn or lost your most recent go.

- After each click on a button the user makes, it updates offering you congratulations on a won round or informing you of a loss and what option the computer played to beat you. Along with that, the text flashes either green or red for .6 seconds to indicate a won or lost round as well as to draw the users attention to the text.

- The aim of this paragraph is to keep the user updated on how well the game is going and to also give you that much needed motivation to keep pushing to win! When either the user or computer has reached 10 points, it shows a message to tell you the game has come to an end and how to restart if you would like to continue playing.

![win-result](/assets/images/win-screenshot.png)
![draw-result](/assets/images/draw-screenshot.png)
![lose-result](/assets/images/lose-screenshot.png)

### Score Board

- This is a clear interactive scoreboard showing the users result next to the computers, seperated by a colon with two seperate text boxes indicating which score belongs to who. This is valuable to the user because it keeps you informed on the results and updates after each round to continuously monitor your progress.

- The scores continue updating until 10 points are reached by either the user or computer. The aim of ending the game at 10 points is to make each game short and sweet. It also keeps the users interest versus a game with unlimited points which would most likely result in the user getting bored and leaving the website much quicker.

![scoreboard](/assets/images/scoreboard-screenshot.png)

### Game Area

- This is the interactive game area of the site. It contains the three buttons that the user gets to choose from - rock, paper or scissors. The buttons are styled with an image to make it as easy as possible to show what each of them represent.

- When one of the buttons is clicked by the user, this triggers the game to begin. The computer then makes it random choice the result of the first round is passed to the result paragraph with the current score displayed.

![game-area](/assets/images/game-area-screenshot.png)

### Reset Button 

- This button positioned at the bottom of the page is there to allow the user to restart the game at any point they may want to. Once the game concludes at 10 points, the play buttons are disabled. Clicking this button re-enables the ability to interact with the play buttons while also resetting the scoreboard to show 0:0.

![reset-button](/assets/images/reset-screenshot.png)
* * * 

## Additional Features To Implement 

### Username Input 

- I feel this would add an extra level of interactivity within the game and the potential to introduce a leaderboard of different peoples scores could then become another future implementation.
 * * *

## Testing

- I have tested and confirmed that the website works on the following browsers: Chrome, Safari and Firefox.

- I have ensured that the game is responsive and works well on various different screen sizes. I have tested these in the development devices tools bar.

- I have played the game dozens of times ensuring that the scoring is correct. Iv also confirmed that the results paragraph is always displaying the correct information and that the green text corresponded to a win and the red to a loss.

- Throughout coding the javascript, I have been console.logging at every opportunity to ensure the code is working as expected before writing more indepth code and realsing later that something is broken when it would be a much harder bug to fix. 
* * *

## Validator Testing 

- All HTML code passed through the HTML W3C validator with no issues.

- All CSS passed through the CSS Jigsaw validator with no issues.

- All Javascript passes through JSHint with no issues.
When i first ran the code, it showed me warnings about version ES6. This issue was resolved by adding /*jshint esversion: 6*/ to the code.

![lighthouse-results](/assets/images/lighthouse-results.png)
* * * 

## Unfixed Bugs

- On some mobile screen sizes, the score tally shifts slightly on the page after a choice is made by the user. Im not sure whether this was caused by the positioning of the span or a bug in the javascript. I intend to investigate this further but unfortunately not in time for my submission date.
* * *

## Deployment 
* * *

# Credits

## Content 

- I used w3schools.com to refresh my knowledge and use of switch statements and to find out how to use the disabled property.

- The code i used to add and remove classList to change the text color of the result paragraph was taken from a thread on stackoverflow.com - https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element

- The icon in my title and the favicon are from fontawesome.com.

- The images used in my buttons were taken from icons8.com.







