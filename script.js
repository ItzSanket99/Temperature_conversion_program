const textBox = document.getElementById("textBox");
const radioBtn1 = document.getElementById("checkBox1");
const radioBtn2 = document.getElementById("checkBox2");
const result = document.getElementById("result");
let temp;

function convert(){
    if(radioBtn1.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else if(radioBtn2.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°F" ;
    }
    else{
        result.textContent = "unit";
    }
}