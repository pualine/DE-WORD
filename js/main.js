

// Access one input
// const tableRow = document.getElementById("tabel-row")
// console.log(tableRow);

function table(){
    // const tableRow = document.getElementById("tabel-row");
    document.getElementById("table-row").style.backgroundColor = 'red';
// console.log(tableRow);
}

table(); 





// Assume the correct word is stored in a variable
const correctWord = "apple";

// Function to validate the guess
function isValidGuess(guess) {
    return guess.length === 5 && /^[a-zA-Z]+$/.test(guess); // Check if the guess is 5 letters long and contains only alphabetic characters
}

// Function to calculate the proximity of the guess to the correct word
function calculateProximity(guess) {
    let proximity = 0;
    for (let i = 0; i < correctWord.length; i++) {
        if (guess[i] === correctWord[i]) {
            proximity++; // Increment proximity if the letter in the guess matches the letter in the correct word at the same position
        }
    }
    return proximity;
}

// Example usage:
const guess = "apply";
if (isValidGuess(guess)) {
    const proximity = calculateProximity(guess);
    console.log(`Proximity: ${proximity}`);
} else {
    console.log("Invalid guess! Please enter a valid 5-letter word.");
}
