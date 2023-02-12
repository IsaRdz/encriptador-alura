const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const convertedMessage = document.getElementById('converted-message');
const toHide = document.querySelectorAll('#to-hide');
const copy = document.getElementById('copy');
const clean = document.getElementById('clean');

var inputText;
var encryptedText;
var decryptedText;

const codeEncryp = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
}
const codeDecryp = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u"
}
encriptar.addEventListener("click",()=>{
    inputText = document.getElementById('input-text').value;
    encryptedText = inputText.replace(/a|e|i|o|u/gi, function(mached){
        return codeEncryp[mached];
    })
    convertedMessage.style.display="block";
    convertedMessage.innerText = encryptedText;
    toHide.forEach(hide => hide.style.display = "none")
})

desencriptar.addEventListener("click",()=>{
    inputText = document.getElementById('input-text').value;
    decryptedText = inputText.replace(/ai|enter|imes|ober|ufat/gi, function(mached){
        return codeDecryp[mached];
    })
    convertedMessage.style.display="block";
    convertedMessage.innerText = decryptedText;
    toHide.forEach(hide => hide.style.display = "none")
})
copy.addEventListener("click",()=>{
    convertedMessage.select();
    convertedMessage.setSelectionRange(0, 99999);
    document.execCommand("copy");
})
clean.addEventListener("click",()=>{
    document.getElementById('input-text').value = "";
    convertedMessage.style.display = "none";
    toHide.forEach(hide => hide.style.display = "block")
})