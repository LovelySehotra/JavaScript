let randomNumber = parseInt(Math.random() *100 + 1);
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const prevGuessSlot=document.querySelector('.guesses');
const pendingGuess =document.querySelector('.lastResult');
const result = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let preGuess =[];
let numGuess=1;

let playGame = true;
if(playGame)
{
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validation(guess);

    });
}


function validation(guess)
{
    if(isNaN(guess))
    {
        alert('Plase enter a valid number');
    }else if(guess<1)
    {
        alert('Plase enter number greater than 1');
    }else if(guess>100)
    {
        alert('Plase enter number less than 100');
    }else{
        preGuess.push(guess);
        if(numGuess===11)
        {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();

        }else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }

};
function checkGuess(guess)
{
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
      } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
      } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`);
      }
};
function displayGuess(guess)
{
    userInput.value = '';
    prevGuessSlot.innerHTML+=`${guess},`;
    numGuess++;
    pendingGuess.innerHTML=`${11-numGuess}`;


};
function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    result.appendChild(p);
    playGame = false;
    newGame();

};
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      preGuess = [];
      numGuess = 1;
      prevGuessSlot.innerHTML = '';
      pendingGuess.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      result.removeChild(p);
  
      playGame = true;
    });
};


