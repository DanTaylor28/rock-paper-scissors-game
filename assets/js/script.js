
    let buttons = document.getElementsByTagName('button');
    let userScore = document.getElementById('your-tally');
    let compScore = document.getElementById('comp-tally');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            let playerChoice = this.getAttribute('data-type');
            alert ('buttons are connected')
        })
    }

   

                   
            
            
            
            
