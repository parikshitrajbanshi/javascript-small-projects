

function additem(){

    let fruitInput = document.getElementById('fruitInput-id');

    let fruitlist = document.getElementById('fruitlist-id');

    if(fruitInput.value.trim() != ""){
        fruitlist.innerHTML =  '<div class="fruit">' + fruitInput.value +'</div>' +  fruitlist.innerHTML;
    }


}