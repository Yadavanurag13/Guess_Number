let random = parseInt(Math.round(Math.random() * 100 + 1))
//console.log(random);

const submit = document.getElementById('subt')
const input = document.getElementById('guessField')
const result = document.querySelector('.resultParas') //this will give message for start over
// const guessSlot = document.getElementsByClassName('guesses')
//const guessSlot = document.getElementsByClassName('guesses')
const guessSlot = document.querySelector('.guesses')
const remainint = document.querySelector('.lastResult')
//const remainint = document.getElementsByClassName('lastresult')

const lowOrHi = document.querySelector('.lowOrHi')
//const lowOrHi = document.getElementsByClassName('lowOrHi')

//take a paragraph which will get inject in the webpage
const p = document.createElement('p')

let prevGuess = []
//kitne attempt marr chuka
let numGuess = 0

//whenever u designed a game type project always take a variable which tell when to play game
//indirectly it show activeness of the player
let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()

        const guess = parseInt(input.value)
        console.log(guess)
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number')
    }else if(guess < 0) {
        alert('Please enter value more than 0')
    }else if (guess > 100) {
        alert('Please enter value less than 100')
    }else {
        prevGuess.push(guess)

        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game is over, Random number was ${random}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess == random) {
        displayMessage('You guessed it right')
        endGame()
    }else if(guess < random) {
        displayMessage('You are too less')
    }else {
        displayMessage('You are too high')
    }
}

function displayGuess(guess) {
    input.value = ''
    //here we have to add that guess and show at page
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remainint.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    input.value = '';
    input.setAttribute('disabled', 'disabled');

    //paragraph ke upper button le liya gya h
    p.classList.add('button');
    //it will show start new game
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    result.appendChild(p)
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(event) {

        //sari values ko null kardo then player ko true then go for 
        random = parseInt(Math.round(Math.random() * 100 + 1));
        prevGuess = [];
        numGuess = 0;
        guessSlot.innerHTML = '';
        remainint.innerHTML = `${11 - numGuess}`;
        input.disabled = false;
        result.removeChild(p);
        playGame = true;
    });
}