var wordArr = [
    "Delores Is", "Simulation Theory", "West World"]

    var random = Math.floor((Math.random()*(wordArr.length-1))); 
    
    // var wholeWord = wordArr[random]; // the word to guess will be chosen from the array above
    // console.log (wholeWord);
    // var word = wholeWord.split("");
    // var wordNoSpace = word

    var word = wordArr[random];
    console.log (word);
    var wordNoSpace = word.split("");

    console.log (word + " word")
    word = word.toUpperCase();
    
    
    // var word = wordArr[random]; // the word to guess will be chosen from the array above

    // console.log (wordLength);

    // var wordLength = new Array(word.length);
   
    
    var error = 0;
    
    // every letter in the word is symbolized by an underscore in the guessfield
    
    // for (var i = 0; i < wordLength.length; i++){
    //     if (wordLength[i] === " "){
    //         console.log("space found")}}
    
    for (var i = 0; i < wordNoSpace.length; i++){
        if (wordNoSpace[i] === " "){
            console.log("space found")
            wordNoSpace[i] = "___";
        }
        else {
            wordNoSpace[i] = "- ";
    }}
    
    console.log(word + " word")
    console.log(wordNoSpace + " wordNoSpace")
    
    // prints the guessfield
    function printwordLength(){
        for (var i = 0; i < wordNoSpace.length; i++){
        var wordLocation = document.getElementById("guessField");
        var blanks = document.createTextNode(wordNoSpace[i]);
        wordLocation.appendChild(blanks);
        } 
    }
    
    // function keyHandler(event){
    //     if( theyJustWon ){
    //         document.removeEventListener("keyup", keyHandler);
    //     }
    // }

    // document.addEventListener("keyup", keyHandler);
    
    //checks if the the letter provided by the user matches one or more of the letters in the word
    var checkGuesses = function(){
        var f = document.input; 
        var b = f.elements["judgeGuesses"]; //the empty input for guesses
        var newGuess = b.value; // the letter provided by the user
        newGuess = newGuess.toUpperCase();
        for (var i = 0; i < word.length; i++){
            if(word[i] === newGuess){
                wordNoSpace[i] = newGuess + " ";
                var wrong = true;
            }
        b.value = "";
        }
        console.log(newGuess + " newGuess");
        
        //if guessed letter is not in the word, the letter will be added to wrong list
        var guesses = document.getElementById("guessField");
        guesses.innerHTML=""; 
        printwordLength();
        
        // if a guessed letter is not in the word, the letter will be put on the "wrong guess"-list and hangman grows
        if(!wrong){
            var wrongLetters = document.getElementById("wrongLetters");
            var wrongGuess = document.createTextNode(" " + newGuess);
            wrongLetters.appendChild(wrongGuess); 
            error++;
            var hangman = document.getElementById("hangman");
            hangman.src = "images/error" + error + ".png";
        }
        
        //checks if all guess have been found
        var win = true;
        for (var i = 0; i < wordNoSpace.length; i++){
            if(wordNoSpace[i] === "- "){
                win = false;
            }
        }
        if(win){
            window.alert("You win! And AI won't hurt you this time.");
        }
        
        //once you got six wrong guess, you lose
        if(error === 6){
            window.alert("The simulated humans are coming to get you now...");
        }
    }
    
    function init(){
        printwordLength();
    }
    
    window.onload = init;