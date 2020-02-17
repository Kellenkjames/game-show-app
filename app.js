/* 
In this project, you'll create a word guessing game. Players will click letters from an onscreen keyboard to try to guess a random phrase. The player’s goal is to guess all the letters in the phrase. A player can keep choosing letters until they make five incorrect guesses. Letters guessed correctly will appear in the phrase. Letters guessed incorrectly will be counted at the bottom of the screen.
*/

// GLOBALS
const qwerty = document.querySelector('qwerty');
const phrase = document.querySelector('phrase');

const missed = 0;
const startGame = document.querySelector('.btn__reset');
const startOverlay = document.querySelector('#overlay');

const phrases = 
    [ 
    'If you spend too much time thinking about a thing, you\'ll never get it done.', 
    'Do not pray for an easy life, pray for the strength to endure a difficult one', 
    'I fear not the man who has practices 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.', 
    'Real living is living for others.', 
    'The successful warrior is the average man, with laser-like focus.'  
    ]

// Start Game
startGame.addEventListener('click', () => {
    // Hide the start screen overlay 
    startOverlay.style.display = 'none';
});
