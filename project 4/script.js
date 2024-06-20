let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#sub');
const userInput = document.querySelector('.guessField');
const preGuesses = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.result');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;
if(playGame)
    {
        submit.addEventListener('click', (event) =>
        {
            event.preventDefault();
            const guess = parseInt(userInput.value);
            validGuess(guess);
        })
    }

const validGuess = (guess) => 
    {
        if(isNaN(guess))
            {
                alert('Please enter the valid number');
            }
        else if(guess < 1)
            {
                alert('Please enter the number between 1 and 100');
            }
        else if(guess > 100)
            {
                alert('Please enter the number between 1 and 100');      
            }
        else
        {
            prevGuess.push(guess);
            if(numGuess === 10)
                {
                    displayGuess(guess);
                    displayMsg(`Game Over. Random number was ${randomNum}`);
                    endGame();
                }
            else{
                displayGuess(guess);
                checkGuess(guess)
            }
        }
    }

const checkGuess = (guess) =>
    {
        if(guess === randomNum)
            {
                displayMsg('You guessed it right');
                endGame()
            }
        else if(guess < randomNum)
        {
            displayMsg('The number is lower than random number');
        }
        else if(guess > randomNum)
        {
                displayMsg('The number is larger than random number');
        }
    }

const displayGuess = (guess) =>
    {
        userInput.value = '';
        preGuesses.innerHTML += `${guess}, `;
        numGuess++;
        remainingGuesses.innerHTML = `${10 - numGuess}`;
    }

const displayMsg = (message) =>
    {
        lowOrHigh.innerHTML = `<h2>${message}</h2>`
    }

const newGame = () =>
    {
        const newGamestart = document.querySelector('.newGame');
        newGamestart.addEventListener('click', () =>
        {
            randomNum = parseInt(Math.random() * 100 + 1);
            prevGuess = [];
            preGuesses = 1;
            userInput.innerHTML = '';
            remainingGuesses.innerHTML = `${10-numGuess}`;
            userInput.removeAttribute('disablade');
            startOver.removeChild(p);
            playGame = true;
        })
    }

const endGame = () =>
    {
        userInput.value = '';
        userInput.setAttribute('disabled','');
        p.classList.add('button')
        p.innerHTML = `<h2 class="newGame">Start new Game</h2>`
        startOver.appendChild(p);
        playGame = false;
        newGame()
    }