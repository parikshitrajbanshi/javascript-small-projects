
function calculateCash(){
    console.log('i am here');
    let amount = document.getElementById('amount-id'); // by id
    let taxrate = document.getElementById('tax-id');  //by id
    let taxAmountShow = document.getElementById('total-result'); // by id

    console.log(amount.value);
    console.log(taxrate.value);

    // calculate tax
    let tax = amount.value*(taxrate.value/100);

    // amount+ tax

    let totalAmount = Number(amount.value)+Number(tax);

    taxAmountShow.innerText = totalAmount;
}


// function calculateCash(){
//     console.log('i am here');
//     let amount = document.getElementById('amount-id'); // by id
//     let taxrate = document.getElementById('tax-id');  //by id
//     let taxAmountShow = document.getElementById('total-result'); // by id

//     console.log(amount.value);
//     console.log(taxrate.value);
//   if(amount>=0){
//     let tax = amount.value*(taxrate.value/100);
//     let totalAmount = Number(amount.value)+Number(tax);
    
//     taxAmountShow.innerText = totalAmount;
//     return taxAmountShow;
// }else{
//     return 'dame';
// }
// }

