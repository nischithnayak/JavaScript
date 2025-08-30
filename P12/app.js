let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.oneclick=sayHello;
}
function sayHello(){
    alert("Hello!");
}