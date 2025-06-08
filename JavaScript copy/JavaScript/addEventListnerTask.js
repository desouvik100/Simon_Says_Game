let btn = document.getElementById("btn");
// btn.onclick = function(){
//     console.log("Button clicked using onclick event handler");
//     console.log(this);
// }
btn.addEventListener("mouseout",function(){
    console.log("Button clicked using addEventListener event handler");
    console.log(this);
});
btn.addEventListener("click",function(){
    console.log("Button is clicked");
    btn.style.backgroundColor = "green";
    
});

let heading = document.querySelector("#h2");
let input = document.querySelector("#input");
input.addEventListener("input",function(){
    let filteredvalue = input.value.replace(/[^a-zA-Z]/g,"");
    this.value = filteredvalue;// It does not allow to enter any other character except a-z and A-Z
    // this.value = this.value.replace(/[^a-zA-Z]/g,"");
    heading.textContent = filteredvalue;// It will show the value in the heading
    heading.style.color = getRandomColor();

});
function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}