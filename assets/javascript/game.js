var wordBank = ['lantern', 'pumpkin'];
var wins = 0;
var loss = 0;
var wrongLetter = []; //
var guessesLeft = 8;
var underScores = [];
var userGuesses = [];
var randWord;
var winCounter = 0;

// Function 
function startGame(){
    // picks random word
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    for(var i = 0; i < randWord.length; i++)
    {
        underScores.push('_');

    }
        // printing underscores to the screen
        document.getElementById('word-blanks').textContent = underScores.join(' ');

        // reset
        function reset(){
        wrongLetter = [];
        guessesLeft = 8;
        
        }
        

        // HTML
        document.getElementById('guesses-left').textContent = guessesLeft;
        document.getElementById('wins').textContent = wins;
        document.getElementById('losses').textContent = loss;
        document.getElementById('wrong-guesses').textContent = wrongLetter;
        
        

}




// alert and add win or loss
function winlose()
{
    if(winCounter === randWord.length)
    {
        wins++;
        alert('You Win!');
        startGame()
    }
    else if(guessesLeft === 0)
    {
        loss++;
        alert('You Lose!');
        startGame()
    }
}

// key event for userGuesses
document.onkeyup = function(event)
{
    userGuesses = event.key;
    // checking if the letter exist inside of the word
    if(randWord.indexOf(userGuesses) > -1)
    {
        for(var i = 0; i < randWord.length; i++)
        {
            if(randWord[i] === userGuesses)
            {
                underScores[i] = randWord[i];
                winCounter++;
                winlose();
            }
        }
    }
    else
    {
        wrongLetter.push(userGuesses)
        guessesLeft--;
        winlose()
        console.log(underScores);
    }
}


// Main 
// ********************************

startGame();