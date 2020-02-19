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

startGame.addEventListener('click', () => {
    // Hide the start screen overlay 
    startOverlay.style.display = 'none';
});

const getRandomPhraseAsArray = arr => {
    // Randomly choose a phrase from the phrases array 
    return phrases[Math.floor(Math.random() * phrases.length)];
}

// Get value returned by the getRandomPhraseAsArray and split into new array 
const phraseArray = getRandomPhraseAsArray(phrases).split("");

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
                // is a letter
                li.classList.add('letter');
            } 
        }
    }
}
// Pass new split array as argument
addPhraseToDisplay(phraseArray); 

const checkLetter = button => {
    // Get all of the elements with a class of “letter” 
    const letter = document.getElementsByClassName('letter');

    // Loop through collection of elements since we have a nodeList 
    Array.from(letter).forEach((el) => {
        // console.log(el);
        // Check if there is a match with the button that was clicked 
        if (el === button) {
            // Store matching letter
            const matchLetter = el;
            return matchLetter.classList.add('show');
        } else {
            return null;
        }
    }); 
}
checkLetter();

/* Add an event listener to the keyboard */
qwerty.addEventListener('click', (e) => {
    const letterChosen = e.target.textContent;
    const button = e.target;
    console.log(button);
    // If letter is chosen, add class of chosen so the same letter can't be added 2x and disable the button.  
    if (letterChosen.length > 0) {
        button.classList.add('chosen');
        button.disabled = true;
    }
});

