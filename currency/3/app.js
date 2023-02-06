let dollarinput =  document.getElementById('dollar');
let yeninput =  document.getElementById('yen');
let rupeeinput =  document.getElementById('rupee');
let kyatinput =  document.getElementById('kyat');
let bhatinput =  document.getElementById('bhat');
let poundinput =  document.getElementById('pound');


function calculatecash(){
    yeninput.value  = dollarinput.value * 135.39;
    rupeeinput.value  = dollarinput.value * 132.18;
    poundinput.value  = dollarinput.value * 0.8;
    kyatinput.value  = dollarinput.value * 2099.64;
    bhatinput.value  = dollarinput.value * 34.61;
}
