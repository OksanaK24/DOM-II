// Your code goes here

//  1. focus; 2. blur; 10.doubleclick;
let navEl = document.querySelectorAll("nav a");
function focusEl(event) { 
    event.preventDefault();
    event.target.style.backgroundColor = "grey"; 
    event.target.style.color = "white";
    event.target.style.fontSize = "2.5rem";
}

function blurEl (event) { 
    event.preventDefault();
    event.target.style.backgroundColor = ""; 
    event.target.style.color = "";
    event.target.style.fontSize = "";
}

function DoubleCl (event){
    event.preventDefault();
    event.target.style.border = "0.2rem solid red";
}

for (let u = 0; u<navEl.length; u++){
    navEl[u].addEventListener ("focus", focusEl);
    navEl[u].addEventListener("blur", blurEl);
    navEl[u].addEventListener("dblclick", DoubleCl);
    navEl[u].addEventListener("mouseout", MouseOt)
}

// 3. mouseover;  4. mouseout;
function MouseOv(event){
    event.stopPropagation();
    event.target.style.backgroundColor = "Khaki";
    event.target.style.color = "DarkRed";
}
function MouseOt(event){
    // event.stopPropagation();
    event.currentTarget.style.backgroundColor = "";
    event.currentTarget.style.color = "";
    event.currentTarget.style.border = "";
}

let parEl = document.querySelectorAll("p");
for (let i = 0; i<parEl.length; i++){
parEl[i].addEventListener("mouseover", MouseOv);
parEl[i].addEventListener("mouseout", MouseOt)
}

// 5. keydown; 6. keyup;
document.addEventListener("keydown", (e) => {
    alert(`${e.code} was pressed`)
})

document.addEventListener("keyup", (e) =>{
    alert(`${e.code} was released`)
})

// 7. resize;
window.addEventListener("resize", resizeFun);
let x = 0;
function resizeFun() {
  x += 1;
  console.log(`Window was resized ${x} times`);  
}

// 8. mousemove;
let destEl = document.querySelectorAll(".content-pick .destination");
function MouseMov(event){
   event.currentTarget.style.backgroundColor = "LightGreen";
}

for (let r=0; r<destEl.length; r++){
    destEl[r].addEventListener("mousemove", MouseMov);
    destEl[r].addEventListener("mouseout", MouseOt);    
}

// 9. click;
let ButtonEl = document.querySelectorAll(".destination .btn");
function BtnCl(event){
    event.stopPropagation();
    event.target.style.shadow = "black";
    event.target.style.backgroundColor = "red";
}

for (let w=0; w<ButtonEl.length; w++){
    ButtonEl[w].addEventListener("click", BtnCl)
    ButtonEl[w].addEventListener("mouseout", MouseOt)
}

