let bgColorInputEl = document.getElementById("bgColorInput");
let fontColorInputEl = document.getElementById("fontColorInput");
let fontSizeInputEl = document.getElementById("fontSizeInput");
let fontWeightInputEl = document.getElementById("fontWeightInput");
let paddingInputEl = document.getElementById("paddingInput");
let borderRadiusInputEl = document.getElementById("borderRadiusInput");

let customBtnEl = document.getElementById("customButton");

function applyButton(){
    customBtnEl.style.backgroundColor = bgColorInputEl.value
    customBtnEl.style.color = fontColorInputEl.value;
    customBtnEl.style.fontSize = fontSizeInputEl.value;
    customBtnEl.style.fontWeight = fontWeightInputEl.value;
    customBtnEl.style.padding = paddingInputEl.value;
    customBtnEl.style.borderRadius = borderRadiusInputEl.value;
}

function restartButton(){
    bgColorInputEl.value = "";
    fontColorInputEl.value = "";
    fontSizeInputEl.value = "";
    fontWeightInputEl.value = "";
    paddingInputEl.value = "";
    borderRadiusInputEl.value = ""
    customBtnEl.style.backgroundColor =""
    customBtnEl.style.color = ""
    customBtnEl.style.fontSize = ""
    customBtnEl.style.fontWeight = ""
    customBtnEl.style.padding = ""
    customBtnEl.style.borderRadius = ""
}