/*
* Starter file
*/
(function() {
    "use strict";

    window.addEventListener("load", init);
    /**
    * The starting point in our program, setting up a listener
    * for the "load" event on the window, signalling the HTML DOM has been constructed
    * on the page. When this event occurs, the attached function (init) will be called.
    */
    
    /**
    * TODO: Write a function comment using JSDoc.
    */
    function init() {
        const encryptButton = document.getElementById("encrypt-it");
        const resetButton = document.getElementById("reset");
        encryptButton.addEventListener("click", handleEncrypt);
        resetButton.addEventListener("click", handleReset);

    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    }

    // Add any other functions in this area (you should not implement your
    // entire program in the init function, for similar reasons that
    // you shouldn't write an entire Java program in the main method).

    function handleReset() { 
        const inputTextArea = document.getElementById("input-text"); 
        inputTextArea.value = "";
    }

    function handleEncrypt() { 
        const inputTextArea = document.getElementById("input-text");
        const resultParagraph = document.getElementById("result");
        const inputText = inputTextArea.value;
        const encryptedText = shiftCipher(inputText);
        resultParagraph.textContent = "Encrypted Message: " + encryptedText;
    } 

    function shiftCipher(text) { 
        text = text.toLowerCase();
        let result = "";

        for (let i = 0; i < text.length; i++) {
            if (text[i] < 'a' || text[i] > 'z') {
                result += text[i];
            } else if (text[i] === 'z') {
                result += 'a'; 
            } else { 
                let letter = text.charCodeAt(i);
                let resultLetter = String.fromCharCode(letter + 1);
                result += resultLetter;
            }
        } 
        return result;
     }
})();