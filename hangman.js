var words = [
    ["D", "E", "L", "O", "R", "E", "S"],
      ["S","I","M","U","L","A","T","I","O","N"],
      ["A", "R", "N", "O", "L", "D"]
    ]
    var random = Math.floor((Math.random()*(words.length-1))); 
    
    var word = words[random]; // the word to guess will be chosen from the array above
    var wordLength = new Array(word.length);
    var error = 0;
    
    // every letter in the word is symbolized by an underscore in the guessfield
    for (var i = 0; i < wordLength.length; i++){
        wordLength[i] = "_ ";
    }
    
    // prints the guessfield
    function printwordLength(){
        for (var i = 0; i < wordLength.length; i++){
        var guess = document.getElementById("guess");
        var letters = document.createTextNode(wordLength[i]);
        guess.appendChild(letters);
        }
    }
    
    //checks if the the letter provided by the user matches one or more of the guess in the word
    var checkCharacters = function(){
        var f = document.input; 
        var b = f.elements["ratecharacters"]; 
        var characters = b.value; // the letter provided by the user
        characters = characters.toUpperCase();
        for (var i = 0; i < word.length; i++){
            if(word[i] === characters){
                wordLength[i] = characters + " ";
                var wrong = true;
            }
        b.value = "";
        }
        
        //deletes the guessfield and replaces it with the new one
        var guess = document.getElementById("guess");
        guess.innerHTML=""; 
        printwordLength();
        
        // if a guessed letter is not in the word, the letter will be put on the "wrong guess"-list and hangman grows
        if(!wrong){
            var wrongLetters = document.getElementById("wrongLetters");
            var letters = document.createTextNode(" " + characters);
            wrongLetters.appendChild(letters); 
            error++;
            var hangman = document.getElementById("hangman");
        hangman.src = "images/error" + error + ".png";
        }
        
        //checks if all guess have been found
        var win = true;
        for (var i = 0; i < wordLength.length; i++){
            if(wordLength[i] === "_ "){
                win = false;
            }
        }
        if(win){
            window.alert("You win! And AI won't hurt you this time.");
        }
        
        //once you got six wrong guess, you lose
        if(error === 7){
            window.alert("The simulated humans are coming to get you now...");
        }
    }
    
    function init(){
        printwordLength();
    }
    
    window.onload = init;