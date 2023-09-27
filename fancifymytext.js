<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>fancify my text</title>
</head>
<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    fieldset{
        border: 5px solid gray;
        width: 50vw;
        text-align: center;
        margin: 25px;
        font-size: 20px;
    }
</style>
<body>
    <div class="container">
        <fieldset>
            <legend>Text</legend>
            <textarea name="" id="textarea" cols="30" rows="4"></textarea>
        </fieldset>
        <fieldset>
            <legend>fancify</legend>
            <button onclick="makeBig()">Bigger!</button>
            <input type="radio" name="fancify" id="fancy"> <label for="fancy">FancyShmancy</label>
            <input type="radio" name="fancify" id="boring"><label for="boring">BoringBetty</label>
            <button onclick="makeMoo()">Moo</button>
        </fieldset>
    </div>
</body>
<script src="fancifymytext.js"></script>
</html>

var textarea=document.getElementById("textarea");
function makeBig(){
    textarea.style.fontSize="24pt";
}
document.getElementsByName("fancify")[0].addEventListener("change",function(){
    textarea.style.fontWeight="bold";
    textarea.style.color="blue";
    textarea.style.textDecoration="underline"
    alert("styles added to the text area");
})
document.getElementsByName("fancify")[1].addEventListener("change",function(){
    textarea.style.fontWeight="normal";
    textarea.style.color="black";
    textarea.style.textDecoration="none"
    alert("styles removed from the text area");
})
function makeMoo(){
    textarea.style.textTransform="uppercase"
    let str=textarea.value.split(".");
    let str2=str.join("-Moo");
    textarea.value=str2;
}