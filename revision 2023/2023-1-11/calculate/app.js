let Oneinput = document.getElementById('one-id');
let twoinput = document.getElementById('two-id');
let resultinput = document.getElementById('result-id');

function addition(){
    resultinput.value = Number(Oneinput.value )+ Number(twoinput.value);
}
function subtraction(){
    resultinput.value = Oneinput.value  - twoinput.value;
}
function division(){
    resultinput.value = Oneinput.value  / twoinput.value;
}
function multiply(){
    resultinput.value = Oneinput.value  * twoinput.value;
}
function reminder(){
    resultinput.value = Oneinput.value % twoinput.value;
}