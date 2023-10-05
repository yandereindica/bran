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
        encryptButton.addEventListener("click", handleEncrypt);
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    }

    function handleEncrypt() {
        console.log("Button clicked!");
    }
    
    // Add any other functions in this area (you should not implement your
    // entire program in the init function, for similar reasons that
    // you shouldn't write an entire Java program in the main method).
    
    })();