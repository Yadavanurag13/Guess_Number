let random = parseInt(Math.round(Math.random() * 100 + 1))
//console.log(random);

const submit = document.getElementById('subt')
const input = document.getElementById('guessField')
const result = document.getElementsByClassName('resultParas')
const prevGuessSlot = document.getElementsByClassName('guesses')
const remainint = document.getElementsByClassName('lastresult')
const lowOrHi = document.getElementsByClassName('lowOrHi')

const p = document.createElement('p')
let prevGuess = []
let numGuess = 0

let playGame = true;
if(playGame) {
    submit.addEventListener('submit', function(event) {
        event.preventDefault
        const guess = parseInt(input.value)
        //console.log(guess)
        guessValidation(guess)
    })
}
function guessValidation(input) {
    //funtion for input validation
    if(isNaN(input)) {
        alert('Please input a valid number')
    }else if(input <= 0) {
        alert('Please input number greater than zero')
    }else if(input > 100) {
        alert('Please input number less than 100')
    }else {
        prevGuess.push(guess)

        if(numGuess > 10) {
            displayGuess(guess)
            displayMessage(`Game over. Random Number was ${random}`)
        }else {
            displayGuess(guess)
            checkeGuess(guess)
        }
    }
}

function checkeGuess(input) {
    //this function will let useer know hint
    if(input < random) {
        displayMessage('Guess even more higher')
    }else if(input > random) {
        displayMessage('Guess even less')
    }else {
        displayMessage('Youuu Got it')
        endGame()
    }
}


function displayMessage() {
    //
}

function endGame() {
    //if(prevGuess)
    input
}

function newGame() {

}