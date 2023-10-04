//1-- Actual function which takes a string and shifts each character by 1 code
function shiftCipher(str) {
    // converting all characters to upper case as mentioned in question
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, rot13);
  
    function rot13(correspondance) {
      const charCode = correspondance.charCodeAt();
      //ASCII codes of -- A = 65, Z = 90
      return String.fromCharCode(
        // code to check if it's not exceeding the alphabet, for example z=90. So 90+1> z, so it'll be taken a
        charCode + 1 <= 90 ? charCode + 1 : ((charCode + 1) % 90) + 64
      );
    }
  }
  // function handleclick that gets triggered when clicked on encrypt
  function handleClick() {
    // storing the value of text-area in x
    let x = document.getElementById("input-text").value;
    //calling shiftCipher that'll actually cipher the string
    x = shiftCipher(x);
    // innerHTML to display the result
    document.getElementById("result").innerHTML = x;
  }
  
  // attaching the event handler to the encrypt it button
  document.getElementById("encrypt-it").addEventListener("click", handleClick)