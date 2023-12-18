document.addEventListener("DOMContentLoaded", function () {
    generateCapchaLetters();
});

function generateCapchaLetters() {
    var captchaText = document.getElementById("captcha-text");
    var captchaInput = document.getElementById("captcha-input");
    let length = makeRandomInt(10);
    if (length === 0){
        length = 1;
    }
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    captchaText.textContent = result;
    captchaInput.setAttribute("data-correct-value", result);
}

function generateCapchaNums(){
    var captchaText = document.getElementById("captcha-text");
    var captchaInput = document.getElementById("captcha-input");
    let length1 = 10**makeRandomInt(5);
    let length2 = 10**makeRandomInt(5);
    var num1 = Math.floor(Math.random() * length1);
    var num2 = Math.floor(Math.random() * length2);
    captchaText.textContent = num1 + " + " + num2;
    captchaInput.setAttribute("data-correct-value", (num1 + num2).toString());
}

function checkCaptcha() {
    var captchaInput = document.getElementById("captcha-input");
    var captchaText = document.getElementById("captcha-text");
    var correctValue = captchaInput.getAttribute("data-correct-value");

    if (isEmpty(captchaInput.value)) {
        alert("Введите капчу");
        return;
    }
    if (captchaInput.value === correctValue) {
        captchaText.textContent = "Правильно";
        alert("Правильно");
    } 
    else {
        alert("Ошибка попробуйте снова");
        generateCapchaNums();
    }
}

function isEmpty(value) {
    return value === "";
}

function makeRandomInt(max) {
    return  Math.floor(Math.random() * max);
}