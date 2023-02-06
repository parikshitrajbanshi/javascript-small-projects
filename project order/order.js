let count = document.getElementById('adding');
let totalprice = document.getElementById('totalprice');
let  sobaprice = document.getElementById('price-id');


function increment(){
    console.log('this is incement');
    count.innerText = Number(count.innerText)+ 1;
    totalprice.innerText = (count.innerText)*sobaprice.innerText;
}

function decrement(){
    console.log('this is decrement');
    if(count.innerText>0){
    count.innerText = count.innerText - 1;
    totalprice.innerText = (count.innerText)*sobaprice.innerText;

    }
   

}
 