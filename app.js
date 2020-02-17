/* 
In this project, you'll create a word guessing game. Players will click letters from an onscreen keyboard to try to guess a random phrase. The player’s goal is to guess all the letters in the phrase. A player can keep choosing letters until they make five incorrect guesses. Letters guessed correctly will appear in the phrase. Letters guessed incorrectly will be counted at the bottom of the screen.
*/

// GLOBALS
const qwerty = document.querySelector('qwerty');
const phrase = document.querySelector('phrase');

const missed = 0;
