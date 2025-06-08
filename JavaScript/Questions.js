// This file contains the code for the Questions component
// It is responsible for rendering the questions and handling user interactions
//adding a paragraph to the body
// let paragraph1 = document.createElement("p");
// paragraph1.innerText = "I am a paragraph";
// document.querySelector("body").append(paragraph1);
// paragraph1.classList.add("p");



//adding a div to the body
// let div = document.createElement("div");
// div.innerText = "I am a div";
// let h = document.createElement("h1");
// h.innerText = "I am a heading";
// let paragraph2 = document.createElement("h1");
// paragraph2.innerText = "I am a paragraph";
// div.append(h);
// div.append(paragraph2);


// //adding a class to the div
// div.classList.add("d");
// document.querySelector("body").append(div);


// let button = document.createElement("button");
// button.innerText = "Click me";
// button.classList.add("btn");
// let input = document.createElement("input");
// input.type = "text";

// document.querySelector("body").append(button);
// document.querySelector("body").append(input);

// button.setAttribute("id","btn");
// input.setAttribute("placeholder","userid");
// document.querySelector("button").style.backgroundColor = "red";
// document.getElementById("btn").style.color = "yellow";



// let h1 = document.createElement("h1");
// h1.innerHTML = "<u>DOM</u>";

// document.querySelector("body").append(h1);/
let input1 = document.querySelector("input");
input1.addEventListener("keyup",function(event){
    console.log(event.key);

    console.log(event.code);
    console.log(event);
    console.log(this);
});
input1.addEventListener("click",function(event){
    this.style.backgroundColor ="yellow";
});