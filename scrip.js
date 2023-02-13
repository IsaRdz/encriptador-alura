const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const convertedMessage = document.getElementById('converted-message');
const toHide = document.querySelectorAll('#to-hide');
const copy = document.getElementById('copy');
const clean = document.getElementById('clean');
const msgError = document.getElementById('msg-error');

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
    validar();
    encryptedText = inputText.replace(/a|e|i|o|u/gi, function(mached){
        return codeEncryp[mached];
    })
    convertedMessage.innerText = encryptedText;   
})

desencriptar.addEventListener("click",()=>{
    validar();
    decryptedText = inputText.replace(/ai|enter|imes|ober|ufat/gi, function(mached){
        return codeDecryp[mached];
    })
    convertedMessage.innerText = decryptedText;
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
    msgError.classList.add('hide');
})

const validar = () =>{
    const patron = /[A-Z\u00C0-\u017F\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    inputText = document.getElementById('input-text').value;
    if(patron.test(inputText) || inputText==""){
        console.log("Error");
        msgError.classList.remove('hide');
    }else{
        convertedMessage.style.display="block";
        toHide.forEach(hide => hide.style.display = "none");
        msgError.classList.add('hide');
    }
}