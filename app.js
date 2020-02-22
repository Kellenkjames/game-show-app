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
    return phrases[Math.floor(Math.random() * phrases.length)].toLowerCase().split("");
}

// Call the function and pass phrases array to it
getRandomPhraseAsArray(phrases);

// Value returned by getRandomPhraseAsArray
const phraseArray = getRandomPhraseAsArray(phrases);

// Game Display - Loop through array of characters and add class of letter
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
    
    // Loop through collection
    for (let i = 0; i < letters.length; i++) {
        
        // Get the inner text of the li
        const letterText = letters[i].textContent;
        console.log(letterText);
        
        // Get button the player has chosen
        const buttonText = event.target.textContent;
        console.log(buttonText);
        
        // If letter in index matches button chosen by player 
        if (letterText === buttonText) {
            // Add class of "show" to ALL list items that have the same value. 
            letters[i].classList.add('show');
        } else {
            return null;
        }
    }
};

/* Add an event listener to the keyboard */
qwerty.addEventListener('click', e => {
    const elem = document.querySelector('')
    
    
    
});

// /* Add an event listener to the keyboard */
// qwerty.addEventListener('click', e => {
//     const clickedElement = e.target;
//     const buttons = document.querySelectorAll('.keyrow button');

//     // Loop through collection of buttons inside the keyrow container
//     for (let j = 0; j < buttons.length; j++) {
//         const buttonList = buttons[j];

//         // If we have a button inside the keyrow container, add class of "chosen" when the button is selected. 
//         if (clickedElement === buttonList) {
//             console.log(clickedElement);
//             clickedElement.classList.add('chosen');
//             clickedElement.disabled = true;
//         } else {
//             clickedElement.disabled = false;
//         }
//     }  
//     checkLetter(clickedElement);
// });







