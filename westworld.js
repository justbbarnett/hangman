var wordArr = [
        "Delores",
        "Arnold",
        "Simulation Theory",
        "West World",
        "Hosts"]

    //defining random for random word choice
    var random = Math.floor((Math.random()*(wordArr.length - 1)));
    var error = 0; //defining starting point in errors or lives

    var word = wordArr[random];
        console.log (word); //checking for word choice
     word = word.toUpperCase(); //array of characters capitalized for simple search
    var wordNoSpace = word.split(""); //splitting word into array of characters


        //defining for loop to separate letters from spaces, so spaces will not count as errors
        for (var i = 0; i<wordNoSpace.length; i++){
            if (wordNoSpace[i] === " "){
                console.log("space found") //log to confirm for loop is working for spaces
                wordNoSpace[i] = "___"; //if there is a space is replaced with an underscore
            }
            else { //this is for any index that is not a space
                wordNoSpace[i] = "- "; //any other character will be viewed as a hyphen
            }
        }

        console.log(word + " word capitalized")
        console.log(wordNoSpace + " wordNoSpace array, should be your symbols")

        //these need to be two separate arrays as the symbols will not let you find letters

        //here is where I jump off the ledge to try to chang input to onkeyup


        //to print the guessfield
        function printWordLength() {
            for (var i = 0; i < wordNoSpace.length; i++){
                var wordLocation = document.getElementById("guessField");
                var blanks = document.createTextNode(wordNoSpace[i]);
                wordLocation.appendChild(blanks);
            }
        }


        var checkGuesses = function(char){
            // var f = document.input; 

            // var b = f.elements["judgeGuesses"]; //the empty input for guesses
            var newGuess = char;
            

            // if (char) {
            //     newGuess = char;
            
            // } 
            // else {
            //     newGuess = char
            //     // newGuess = b.value; // the letter provided by the user
            // }
            newGuess = newGuess.toUpperCase();
            

            for (var i = 0; i < word.length; i++){
                if(word[i] === newGuess){
                    wordNoSpace[i] = newGuess + " ";
                    var wrong = true;
                }
            // b.value = "";
            }
            
            console.log(newGuess + " newGuess");
            
            //if guessed letter is not in the word, the letter will be added to wrong list
            var guesses = document.getElementById("guessField");
            guesses.innerHTML=""; 
            printWordLength();
            
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
            

        document.onkeyup = function (event) {
            console.log (event);
            var char = event.key;
            if (event.keyCode >= 65 && event.keyCode <= 90){
                checkGuesses (char);
            }
        };
            

        function init(){
        printWordLength();
        }
        
        window.onload = init;
    








            // //this function checks the letters guessed against the word; this is why we needed two separate arrays
            // function checkGuesses (event){
            //     var f = event.key; 
            //     var newGuess = f.value; // the letter provided by the user
            //     newGuess = newGuess.toUpperCase();
            //     for (var i = 0; i < word.length; i++){
            //         if(word[i] === newGuess){
            //             wordNoSpace[i] = newGuess + " ";
            //             var wrong = true;
            //         }
                
            //     }
            //     console.log(newGuess + " newGuess");
            // // }

            // //delete the guessfield and replaces it with new one to take into account both arrays
            // var guesses = document.getElementById("guessField");
            // guesses.innerHTML="";
            // printWordLength(); //defined above as function to print guessfield

            

            // //wrong guesses will be added to wrong letters and the hangman will fill in
            // if(!wrong){
            //     var wrongLetters = document.getElementById("wrongLetters");
            //     var wrongGuess = document.createTextNode(" " + newGuess);
            //     wrongLetters.appendChild(wrongGuess); 
            //     error++;
            //     var hangman = document.getElementById("hangman");
            //     hangman.src = "images/error" + error + ".png";
            // }

            // //checks to make sure all letter have been filled
            // var win = true;
            // for (var i = 0; i< wordNoSpace.length; i++) {
            //     if (wordNoSpace[i] === "- "){ //checking for hyphens because that is symbol replacing the letter
            //         win = false;
            //     }
            // }
            //     if (win) {
            //     window.alert("You win! A.I. didn't hurt you this time.");
            //     }
            //     //if you ger 6 errors... you loose
            //     if (error === 7) {
            //         window.alert("The simulated humans are coming to get you now... I suggest you run.");
            //     }

