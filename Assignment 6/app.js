var up,mu,md,del;
// let id;
function doLoad()
 {
    //  localStorage.remove();
    // var getJSON = localStorage.getItem('li');
    // // alert(JSON.parse(getJSON));
    // let ul=document.getElementById("todolist");
    // if (getJSON){
    //     let li=document.createElement("li");
    //     li.innerHTML = JSON.parse(getJSON);
    //     ul.appendChild(li);
    // }
    document.getElementById("todobox").addEventListener('keypress',function(e){
    //  alert(e.which===13);
    if(e.which===13)
    doAdd();
    });
    
}
function doAdd(){
    // alert("hlo");
let val=document.getElementById("todobox");
let li=document.createElement("li");
let span=document.createElement("span");
// li.setAttribute('id',)
// li.appendChild(document.createTextNode(val.value));

span.innerHTML=val.value ;
let ul=document.getElementById("todolist");

up=document.createElement('img');
mu=document.createElement('img');
md=document.createElement('img');
del=document.createElement('img');
addImg();

li.appendChild(span);
li.appendChild(md);
li.appendChild(mu);
li.appendChild(up);
li.appendChild(del);

// var sendJSON = JSON.stringify(li.innerHTML);

// window.localStorage.setItem("li",sendJSON);
// id++;
ul.appendChild(li);


val.value="";

mu.addEventListener('click',function(){
   var wrapper = this.parentElement;

    if (wrapper.previousElementSibling)
   wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
});

md.addEventListener('click',function(){
    var wrapper = this.parentElement;

    if (wrapper.nextElementSibling)
        wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
});

up.addEventListener('click',(e)=>{
    let v=prompt("Enter new task");
    span.innerHTML=v;
});

del.addEventListener('click',()=>{
    li.remove();
});




}


function addImg(){
  

md.src='pics/moveDown.png';
md.height='25';
md.style.float='right';
md.style.marginRight='10px';
// md.id='mdd';
md.style.cursor='pointer';

mu.src='pics/moveUp.jfif';
mu.height='25';
mu.style.float='right';
mu.style.marginRight='10px';
// mu.id='muu';
mu.style.cursor='pointer';

up.src='pics/update.jfif';
up.height='25';
up.style.float='right';
up.style.marginRight='10px';
// up.id='upp';
up.style.cursor='pointer';

del.src='pics/delete.jfif';
del.height='25';
del.style.float='right';
del.style.marginRight='10px';
// del.id='dell';
del.style.cursor='pointer';

}
