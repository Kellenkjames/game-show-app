// Globals
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('.phrase');

const startGame = document.querySelector('.btn__reset');
const startOverlay = document.querySelector('#overlay');
const phrases = 
[ 
    'a piece of cake', 
    'back to square one', 
    'close but no cigar', 
    'down for the count', 
    'speak of the devil'  
]

// Letter to be Returned
let letterFound;

// Scoreboard 
let missed = 0;

// Title
let headline = document.querySelector('.title');

// Return a random phrase from the array
let getRandomPhraseAsArray = arr => {
    // Randomly choose a phrase from the phrases array 
    return phrases[Math.floor(Math.random() * phrases.length)].toLowerCase().split("");
}

getRandomPhraseAsArray(phrases);
let phraseArray = getRandomPhraseAsArray(phrases);

// Adds the letters of a string to the display
const addPhraseToDisplay = arr => {
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (let i = 0; i < phraseArray.length; i++) {
        if (phraseArray.length > 0) {
            let text = phraseArray[i];
            const ul = document.querySelector('#phrase ul');
            const li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
            // is a letter and not a space
            if (phraseArray[i].trim()) {
                li.classList.add('letter');
            }
            
        }
    }
}
// Call Function and Pass random array as argument 
addPhraseToDisplay(phraseArray); 

// Check letter chosen against button that was clicked
const checkLetter = button => {
    // Get all of the elements with a class of "letter" 
    const letters = document.querySelectorAll('.letter');
    let match;
    let letterFound;
    
    // Get nodeList of tries / hearts
    const tries = document.querySelectorAll('.tries');
    
    // Check if letter chosen match the button that was clicked
    for (let i = 0; i < letters.length; i++) {
        // Check if they match the letter in the button the player has chosen.
        if (letters[i].textContent === button) {
            // Add class of "show" to ALL list items that have the same value. 
            match = letters[i].classList.add('show');
            // Store the letter returned 
            letterFound = letters[i].textContent;
            // console.log(letterFound);
        } else {
            match = null;
        }
    }
    // If CheckLetter function does not find a letter, remove one of the hearts
    if (!letterFound) {
        const ol = document.querySelector('ol');
        const li = document.querySelector('.tries');
        ol.removeChild(li);
        // Increment to missed counter
        missed++;
    } 
};

// Check if the game has been won or lost 
const checkWin = () => {
    
    // Get all li elements with class of "letter" as NodeList
    const letters = document.querySelectorAll('.letter');
    // Convert letters NodeList to an array
    const lettersArr = Array.from(letters).length;
    
    // Get all li elements with class of "show" as NodeList
    const lettersShow = document.querySelectorAll('.show');
    // Convert letters NodeList to an array
    const lettersShowArr = Array.from(lettersShow).length;
    
    // If length of 2 variables are the same - display the "win" overlay. 
    if (lettersArr === lettersShowArr) {
        startOverlay.classList.remove('lose');
        startOverlay.classList.add('win');
        headline.innerHTML = "You Win 😀";
        startOverlay.style.display = "flex";
        // Call Function to Reset Game
        resetGame(); 
    }
    // Check if the missed counter is greater than 4. If they are, display the lose overlay
    if (missed > 4) {
        startOverlay.classList.remove('win');
        startOverlay.classList.add('lose');
        headline.innerHTML = "You Lose... Try again 😉";
        startOverlay.style.display = "flex";
        // ReCreate the scoreboard
        for (let i = 0; i < 5; i++) {
            const ol = document.querySelector('ol');
            let li = document.createElement("li");
            li.classList.add('tries');
            let image = document.createElement('img');
            image.style.height = "35px";
            image.style.width = "30px";
            let imageUrl = "images/liveHeart.png";
            image.setAttribute("src", imageUrl);
            
            ol.appendChild(li);
            li.appendChild(image);
            
        }
        // Call Function to Reset Game
        resetGame();
    }
    
}

// Listen for the start game button to be pressed
startGame.addEventListener('click', () => {
    // Hide the start screen overlay 
    startOverlay.style.display = 'none';
});

// Listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
    
    // Check if we have a 'button" and do things
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        button.classList.add('chosen');
        button.disabled = true;
        checkLetter(button.textContent);
    } 
    // Check if the number of letters with class "show" is equal to the number of letters with class "letters"
    checkWin();
});

// Reset Game
const resetGame = phraseArray => {
    
    // Replace Inner Text of Start Button
    startGame.innerHTML = "Reset Game";
    
    // Reset the buttons in the keyboard
    const qwertyButtons = document.querySelectorAll('.keyrow button');
    for (let i = 0; i < qwertyButtons.length; i++) {
        qwertyButtons[i].classList.remove('chosen');
        qwertyButtons[i].removeAttribute('class');
        qwertyButtons[i].disabled = false;
    }
    
    // Reset the classes added on the li elements and empty elements before generating new random
    const phraseElements = document.querySelectorAll('#phrase li');
    for (let j = 0; j < phraseElements.length; j++) {
        const ul = document.querySelector('#phrase ul');
        const li = phraseElements[j];
        li.classList.remove('show');
        ul.removeChild(li);
    }

    // Generate random phrase and append to DOM
    phraseArray = getRandomisedPhraseAsArray(phrases);

    // Reset the number of misses to zero
    missed = 0;    
};








