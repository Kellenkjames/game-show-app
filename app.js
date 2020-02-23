// Globals
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('.phrase');

const missed = 0;
const startGame = document.querySelector('.btn__reset');
const startOverlay = document.querySelector('#overlay');
const phrases = 
[ 
    'If you spend too much time thinking about a thing, you\'ll never get it done', 
    'Do not pray for an easy life, pray for the strength to endure a difficult one', 
    'I fear not the man who has practices 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times', 
    'Real living is living for others', 
    'The successful warrior is the average man, with laser-like focus'  
]

// Return a random phrase from an array
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

// Will be used in the event listener to check against button
const checkLetter = button => {
    
    // Get all of the elements with a class of “letter” 
    const letters = document.querySelectorAll('.letter');
    let match = null;

    // Loop through collection
    for (let i = 0; i < letters.length; i++) {

        // Get the inner text of the li
        const letterText = letters[i].textContent;
        console.log(letterText);
    
        // If letter in index matches button chosen by player 
        if (letterText) {
            // Add class of "show" to ALL list items that have the same value and store to match variable. 
            match = letters[i].classList.add('show');
        } else {
            return null;
        }
        return match;
    }
};

// Listen for the start game button to be pressed
startGame.addEventListener('click', () => {
    // Hide the start screen overlay 
    startOverlay.style.display = 'none';
});

/* Add an event listener to the keyboard */
qwerty.addEventListener('click', e => {
    
    const letterChosen = e.target.textContent;
    // console.log(letterChosen);
    const button = e.target;
    // console.log(button);
    const keyrow = document.querySelectorAll('.keyrow');

    // If clicked element 
    if (button) {
        button.classList.add('chosen');
        button.disabled = true;
        console.log(button);
    }
    
    // If clicked element is outside of keyboard, make sure we remove styles of "chosen".
    for (let i = 0; i < keyrow.length; i++) {
        if (button === keyrow[i]) {
            console.log(button)
            console.log(keyrow[i]);
            keyrow[i].classList.remove('chosen');
        } 
    }

    const letterChecked = checkLetter(button);
    letterChecked;
});
