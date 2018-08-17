//Setting initial game with 0 errors and the word choices
const wordChoices = [
    "Delores",
    "Arnold",
    "Simulation Theory",
    "West World",
    "Hosts"
]
let error = 0;
let p = document.createElement("p");

//defining random for random word choice
let random = Math.floor((Math.random()*(wordChoices.length - 1)));
//format random word from choices for the game
let word = wordChoices[random];
    word = word.toUpperCase();
let wordArr = word.split("");
console.log("Word split into arr: ", wordArr)


//Remove spaces from the play
for (var i=0; i < wordArr.length; i++){
    if (wordArr[i] === " "){
        wordArr[i] = "__";
    } else {
        wordArr[i] = "- "
    }
}

console.log("Chosen word: ", word)
console.log("Word arr as symbols: ", wordArr)

//Printing the wordArr in the guessField on the html
function printWordLength() {
    for (let i = 0; i < wordArr.length; i++){
        let wordLocation = document.querySelector(".guessField");
        let blanks = document.createTextNode(wordArr[i]);
        wordLocation.appendChild(blanks);
    }
};

//function to check characters against wordArr
let checkGuess = (char) => {
    
    char = char.toUpperCase();
    console.log ("check is running", char)
    

    //run through word to see if guess matches any letters in word
    for (let i=0; i<word.length; i++) {
        if (word[i] === char){
            console.log("char matches")
            wordArr[i] === char + " ";
            
        } else {
            let wrongField = document.querySelector(".wrongLetters");
            
            wrongField.appendChild(p);
            // wrongField.appendChild(wrongGuess);
            error++;
            let hangman = document.querySelector(".wimage");
            hangman.src = "images/" + error + ".png"
        }
    }
    
    let win = false;

    //check wordArr for the win
    for (let i = 0; i<wordArr.length; i++) {
        if (wordArr[i] === "- ") {
            win = false;
        } else {
            win = true;
        }
    }

    if (win) {
        window.alert("You win! And AI won't hurt you this time.");
    }
    
    //once you got six wrong guess, you lose
    if(error === 7){
        window.alert("The simulated humans are coming to get you now...");
    }
}

//Event function to read input from player
document.onkeyup = function (event) {
    console.log ("event", event)
    let char = event.key;
    char.toUpperCase();
    console.log ("char", char)
    
    if (event.key >= "a" && event.key <= "z"){
        checkGuess (char);
    } 
}


function init () {
    printWordLength();
}

window.onload = init;



