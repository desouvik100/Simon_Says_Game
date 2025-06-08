// let gameSequence = [];
// let userSequence = [];
// let level = 0;
// let started = false;

// let buttonColors = ["red", "blue", "green", "yellow"];

// let h3 = document.querySelector("h3");
// document.addEventListener("keypress", function(event) {
//     if(started == false){
//         console.log(`Game hasbeen started with key ${event.key}`);
//         started = true;
//         levelup();
//     }
// });

// function buttonFlash(btn_1){
//     btn_1.classList.add("flash");
//     setTimeout(function(){
//         btn_1.classList.remove("flash");
//     },500);
// }

// function levelup(){
//     level++;
//     h3.textContent = `Level ${level}`;
//     let randomNumber = Math.floor(Math.random() * 3);
//     let randomColor = buttonColors[randomNumber];
//     let randomButton = document.querySelector(`.${randomColor}`);
//     buttonFlash(randomButton);
// };


let gameSequence = [];
let userSequence = [];

let level = 0;

let started = false;
let buttonColor = ["red","yellow","green","purple"];
let h3 = document.querySelector("h3");
let n1 = document.querySelector(".Name");
alert("Welcome to Simon Says Game"+"Please enter your name to start the game");
let n2 = prompt("Enter your name");
n1.textContent = `Welcome ${n2} to Simon Says Game`;

document.addEventListener("keypress", function(event) {
    if(started == false){

        // console.log(`Game hasbeen started with key ${event.key}`);
        started = true;
        levelup();
    }
});

function levelup(){
    level++;
    userSequence = [];
    h3.textContent = `Level ${level}`;
    let randomNumber = Math.floor(Math.random()*4);
    let randomColor = buttonColor[randomNumber];
    let randomButton = document.querySelector(`.${randomColor}`);
    buttonflash(randomButton);
    gameSequence.push(randomColor);
    console.log(gameSequence);
    // console.log(`Random Number: ${randomNumber}`);
    console.log(`Random Color: ${randomColor}`);
}

function checkAnswer(inx){
    if(userSequence[inx] === gameSequence[inx]){
        if(userSequence.length === gameSequence.length){
            console.log("Success");
            setTimeout(levelup,1000);
        }
    }
    else{
        console.log("Wrong value");
        h3.innerHTML = `Game Over ! Your score was <b>${level}<b> <br> Press Any Key to Restart`;
        let currentLevel = level;

        actualButton = gameSequence[inx];
        let wrongButton = userSequence[userSequence.length-1];
        console.log(`The right button was ${actualButton}`);
        console.log(`You pressed ${wrongButton}`);
        document.querySelector("body").backgroundcolor = "red";
        setTimeout(function(){
            document.querySelector("body").backgroundcolor = "white";
        },1500);
        resetGame();
        if(currentLevel > level){
            highestScore = currentLevel;
            let h4 = document.createElement("h4");
            h4.textContent = `Highest score was ${highestScore}`;
        }
        else{
            highestScore = level;
            h4.textContent = `Highest score was ${highestScore}`;
        }
    }
}

function buttonflash(btn_1){
    btn_1.classList.add("flash");
    setTimeout(function(){
        btn_1.classList.remove("flash");
    },500);
}



let allButtons = document.querySelectorAll(".btn_1");
for(btn of allButtons){
    btn.addEventListener("click",userClick);
}


function userClick(){
    let btn = this;
    userflash(btn);
    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSequence.push(userColor);
    console.log(userSequence);
    checkAnswer(userSequence.length-1);
}
function userflash(btn_1){
    btn_1.classList.add("userflash");
    setTimeout(function(){
        btn_1.classList.remove("userflash");
    },500);
}
function resetGame(){
    userSequence = [];
    gameSequence = [];
    started = false;
    level = 0;
}