function additem(){
    let itemlistbox = document.getElementById('item-list-id');
    // console.log(itemlistbox.innerHTML);

    // itemlistbox.innerHTML = itemlistbox.innerHTML +  '<div class="item"><p>Google</p></div>';

    let iteminput = document.getElementById('item-id');
    let errormsg = document.getElementById('error-msg');
    
    if( iteminput.value.trim()!=''){
        itemlistbox.innerHTML =  `<div class="item" onclick="delectele(ele)"><p>${iteminput.value}</p></div>`  + itemlistbox.innerHTML ;
            errormsg.innerText = '';
    }else{
        errormsg.innerText = 'PLEASE WRITE SOMETHING INIT...!'
    }

}
function delectele(ele){
    ele.remove();
}