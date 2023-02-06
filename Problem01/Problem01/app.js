let inputText = document.getElementById('inputtext');
let outputValue = document.getElementById('outputtext');
let outputLength =document.getElementById('outputlength'); 
let outputFirstChar = document.getElementById('outputfirst');
let outputLastChar = document.getElementById('outputlast');
let middleChar = document.getElementById('midtext');


function showInputData(){
    if(inputText.value.trim() == ""){
        outputValue.innerText= "please insert text";
    }else{
        outputValue.innerText = inputText.value ;
        }
}

function length(){
    outputLength.innerText = inputText.value.length; 
    
}

function showFirstChar(){
    // console.log(outputFirstChar)
    outputFirstChar.innerText = (inputText.value).slice(0,1);

}

function showlastChar(){
    outputLastChar.innerText = (inputText.value).slice(-1);

}

    function MidChars(){
   }


  function callallFunction(){
    showInputData();
    length();
    showFirstChar();
    showlastChar();
  }