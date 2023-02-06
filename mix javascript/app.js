let aa = document.getElementById("titel"); // calling it to javascript by id.
console.log(aa);  // output = h1

console.log(aa.innerText);

// after update
aa.innerText = 'go for test bro';
console.log(aa.innerText);


//click + button 

function increment(){
   console.log('this is incement');
   let countText = document.getElementById('count-num-id');

//    string to number = number()+1
   countText.innerText = Number(countText.innerText) + 1;
}

//click - button
function decrement(){
    console.log('this is decrement');
    let countText = document.getElementById('count-num-id');
   countText.innerText = countText.innerText - 1;
}
// reset button

function reset(){
    console.log('to reset');
    let countText = document.getElementById('count-num-id');
    countText.innerText = 0;

}