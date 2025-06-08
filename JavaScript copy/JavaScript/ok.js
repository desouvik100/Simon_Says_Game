let id = setInterval(()=>{
    console.log("Sorry Aritrika 😢");
},500);
let id2 = setInterval(() => {
    console.log("Sorry 😢");
},1000);
setTimeout(()=>{
    clearInterval(id);
    clearInterval(id2);
},100000);