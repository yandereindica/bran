// Part I: testing code that logs a message to the console
    console.log("Window loaded!");

// Part II: add event listener to button click
function handleClick()
{
    console.log("Button clicked!");
}

const encryptButton = document.getElementById("encrypt-it");
encryptButton.addEventListener("click", handleClick);

// Part III: implement shift cipher
function shiftCipher(text) 
{
    text = text.toLowerCase();
    let result = "";

    for (let i = 0; i < text.length; i++)
    {
        if (text[i] < 'a' || text[i] > 'z')
        {
            result += text[i];
        } else if (text[i] == 'z') {
            result += 'a';
        } else {
            let letter = text.charCodeAt(i);
            let resultLetter = String.fromCharCode(letter + 1);
            result += resultLetter;
        }
    }
    return result;
}

function handleClick()
{
    const inputText = document.getElementById("input-text").value;
    const encryptedText = shiftCipher(inputText);
    const resultElement = document.getElementById("result");
    resultElement.textContent = encryptedText;
}

encryptButton.addEventListener("click", handleClick);

// Note: the script tag linking this file to the HTML should be added in the HTML file.