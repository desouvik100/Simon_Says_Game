let h1 = document.createElement("h1");
h1.innerText = "This is a h1";
document.querySelector("body").append(h1);


let t1 = document.createElement("p");
t1.innerText = "This is a p";
document.querySelector("body").append(t1);
p.classList.add("p");


console.log(rgb(27,234,199)
); 
let btn = document.createElement("button");
btn.innerText = "Generate Color";
btn.classList.add("btn");
document.querySelector("body").append(btn);
btn.classList.add("btn");

let div = document.createElement("div");
div.innerText = "This is a div";
div.classList.add("div");
document.querySelector("body").append(div);



btn.addEventListener("click",function(){
    let randomColor = getRandomColor();
    document.querySelector("h1");
    h1.style.color = randomColor;

    document.querySelector("div");
    div.style.backgroundColor = randomColor;
    div.style.color = getRandomColor();
})

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`;
    console.log(color);
    return color;
}