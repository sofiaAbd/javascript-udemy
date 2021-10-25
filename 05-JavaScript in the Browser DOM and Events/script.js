//7.70
'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//console.log(document.querySelector('.guess').value);//è un valore vuoto
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//7.73

let secretNumber = Math.trunc(Math.random()*20)+1;//numero segreto
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // quando non c'è numero
    if (!guess) {
        //document.querySelector('.message').textContent = '⛔ No number';
        displayMessage('⛔ No number');
        
        //quando si vince
    }   else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber; //numero casuale
        
        //cambiare colore se si vince
        document.querySelector('body').style.backgroundColor = '#60b347';
        
        document.querySelector('.number').style.width = '30rem';
        
        //maggiore vincita
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        //when guess is wrong
    }   else if (guess !== secretNumber) {
        if (score > 1) {
            //document.querySelector('.message').textContent = guess > secretNumber ? '⬇️ Too high!' : '⬆️too low';
            displayMessage(guess > secretNumber ? '⬇️ Too high!' : '⬆️too low');
            score--;
            document.querySelector('.score').textContent = score;  
        }   else {
            //document.querySelector('.message').textContent = 'You lost the game!';
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#f00b0bd8';
        }  
    }
    
        
        //quando il numero è troppo alto
    // }   else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '⬇️ Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;  
    //     }   else {
    //         document.querySelector('.message').textContent = 'You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = '#f00b0bd8';
    //     }  
    //     //quando il numero è basso
    // }   else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '⬆️too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;  
    //     }   else {
    //         document.querySelector('.message').textContent = 'You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = '#f00b0bd8';
    //     }  
    // }
});

//7.76
/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK �
*/
//1
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.guess').value = null;//value per input
    document.querySelector('.score').textContent = 20;//textContent per paragrafo
    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    //console.log(guess, typeof guess)
    console.log('clicked')
});