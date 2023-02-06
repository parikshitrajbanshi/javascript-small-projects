

function adduser(){
    let nameinput = document.getElementById('name-id');
    let lastinput = document.getElementById('last-id');
    let ageinput = document.getElementById('age-id');
    let hobbyinput = document.getElementById('hobby-id');
    
   
    let newinput = document.getElementById('new-id');
    newinput.innerHTML = `<div class="user">
    <div class="user-name">
        <label for="">Name</label>
        <input type="text" value="${nameinput.value} ${lastinput.value}" disabled >
    </div>
    <div class="user-age">
        <label for="">user-age</label>
        <input type="text" value="${ageinput.value}" disabled >
    </div>
    <div class="user-hobby">
        <label for="">Hobby</label>
        <input type="text" value="${hobbyinput.value}" disabled >
    </div>
</div> `+ newinput.innerHTML ;

    
   

}