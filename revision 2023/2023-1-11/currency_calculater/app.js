let dollarInput = document.getElementById('dollarid');
let yenInput = document.getElementById('yenid');
let RupeeInput = document.getElementById('rupeeid');

function calculateCurrency(){
    yenInput.value = dollarInput.value * 132.33;
    RupeeInput.value = dollarInput.value * 130.88;
}