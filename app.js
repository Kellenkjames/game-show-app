// Globals
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('.phrase');

const startGame = document.querySelector('.btn__reset');
const startOverlay = document.querySelector('#overlay');
const phrases = 
[ 
    'If you spend too much time thinking about a thing you wont get it done', 
    'Do not pray for an easy life, pray for the strength to endure a difficult one', 
    'I fear not the man who has practices ten thousand kicks', 
    'Real living is living for others', 
    'The successful warrior is the average man with laser like focus'  
]

// Letter to be Returned
let letterFound;

// Scoreboard 
let missed = 0;

// Title
let headline = document.querySelector('.title');

// Return a random phrase from the array
const getRandomPhraseAsArray = arr => {
    // Randomly choose a phrase from the phrases array 
    return phrases[Math.floor(Math.random() * phrases.length)].toLowerCase().split("");
}

getRandomPhraseAsArray(phrases);
const phraseArray = getRandomPhraseAsArray(phrases);

// Adds the letters of a string to the display
const addPhraseToDisplay = arr => {
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (let i = 0; i < phraseArray.length; i++) {
        if (phraseArray.length > 0) {
            let text = phraseArray[i];
            const ul = document.getElementById('phrase');
            const li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
            if (phraseArray[i].trim()) {
                // is a letter and not a space
                li.classList.add('letter');
            } 
        }
    }
}
// Pass new split array as argument
addPhraseToDisplay(phraseArray); 

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
        startOverlay.classList.add('win');
        headline.innerHTML = "You Win 😀";
        startOverlay.style.display = "flex";
        // Call Function to Reset Game
        resetGame();
        
        
    }
    // Check if the missed counter is greater than 4. If they are, display the lose overlay
    if (missed > 4) {
        startOverlay.classList.add('lose');
        headline.innerHTML = "You Lose... Try again 😉";
        startOverlay.style.display = "flex";
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
const resetGame = () => {
    
    // Replace Inner Text of Start Button
    startGame.innerHTML = "Reset Game";

    // Remove class of chosen and attribute of class so we get a proper reset
    const qwertyButtons = document.querySelectorAll('.keyrow button');
   
    for (let i = 0; i < qwertyButtons.length; i++) {
        qwertyButtons[i].classList.remove('chosen');
        qwertyButtons[i].removeAttribute('class');
        qwertyButtons[i].disabled = false;
    }

    // Generate a new random phrase
    addPhraseToDisplay(phraseArray); 

    // Reset the number of misses to zero
    missed = 0;
    
    // The Hearts no longer exist because they have been removed.
    // Reset the hearts and inject back into DOM
    for (let i = 0; i < 5; i++) {
        const ol = document.querySelector('ol');
        let li = document.createElement("li")
        let image = document.createElement('img');
        image.style.height = "35px";
        image.style.width = "30px";
        let imageUrl = "images/liveHeart.png";
        image.setAttribute("src", imageUrl);
    
        ol.appendChild(li);
        li.appendChild(image);
        
    }
    
};








