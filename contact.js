let btn=document.querySelector(".btn");
let text=document.querySelector(".text");
let ct=document.querySelector(".closingtext");


btn.onclick=function(){
    text.classList.toggle("hideMsg");
    ct.classList.toggle("expandText");
}
