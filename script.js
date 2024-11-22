const randomNumber = parseInt(Math.random()*100+1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#submit');
let count = 1;
let userGuesses = [];
let play = true;

if(play){
    submit.addEventListener('click', (event)=>{
        event.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
        count++;
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        window.alert(`Please Enter a valid number!`);
    }else if(guess < 1){
        window.alert(`Please enter a positive number!`);
    }else if(guess > 100){
        window.alert(`Please enter a number less than 100!`);
    }else{
        if(count === 11){
            const result = document.getElementById('currentInfo');
            result.style.textAlign = 'center';
            result.innerHTML = `<p>I'm sorry, you lose the game!</p>`
        }else{
            userGuesses.push(guess);
            checkGuess(guess);
            displayGuess(userGuesses);
            displayAttempts();
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        const result = document.getElementById('currentInfo');
        result.style.textAlign = 'center';
        result.innerHTML = `<p>Congratulation, you win!</p>`;
    }else if(guess < randomNumber){
        const status = document.getElementById('status').innerText = `Value is too low!`;
    }else{
        const status = document.getElementById(`status`).innerText = `Value is too high!`;
    }
}

function displayGuess(userGuesses){
    document.querySelector('span').appendChild(document.createTextNode(`${userGuesses[userGuesses.length-1]} `));
}

function displayAttempts(){
    document.querySelector('#attempts').innerHTML = `<p>Number of Attempts: ${count} </p>`
}