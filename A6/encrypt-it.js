// Part I: testing code that logs a message to the console
console.log("Window loaded!");

const encryptB = document.getElementById("encrypt-it");
encryptB.addEventListener("click", handleEncrypt);

const resetB = document.getElementById("reset");
resetB.addEventListener("click", handleReset);

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

function handleEncrypt()
{
    console.log("Encrypt clicked!");
    const inputText = document.getElementById("input-text").value;
    const encryptedText = shiftCipher(inputText);
    const resultElement = document.getElementById("result");
    resultElement.textContent = encryptedText;
}

function handleReset()
{
    console.log("Reset clicked!");
    document.getElementById("input-text").value = '';
}
// Note: the script tag linking this file to the HTML should be added in the HTML file.