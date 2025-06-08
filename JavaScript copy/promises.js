// //Callback 
// // function saveToDB(data,success,failure){
// //     let internetSpeed = Math.floor(Math.random()*10)+1;
// //     if(internetSpeed > 4){
// //         success();
// //     }
// //     else{
// //         failure();
// //     }
// // }

// // saveToDB("Apna College",()=>{
// //     console.log("Success : your data was saved");
// //     saveToDB("Hello World",()=>{
// //         console.log("Success : your data2 was saved");
// //         saveToDB("Hi",()=>{
// //             console.log("Succcess : your data3 was saved");
// //         },()=>{
// //             console.log("Failure : your data3 not saved");
// //         })
// //     },
// //     ()=>{
// //         console.log("Failure : your data2 not saved");
// //     })
// // },
// // ()=>{
// //     console.log("Failure : your data not saved");}
// // );
// // Promise function resolve , reject promise object
// // function saveToDB(data){
// //     let internetSpeed = Math.floor(Math.random()*10)+1;
// //     return new Promise((resolve , reject)=>{
// //         if(internetSpeed > 4){
// //         resolve("Data is saved");
// //         }
// //         else{
// //             reject("Data is not saved");
// //         }
// // });
// // }

// // //Using then and catch function in Promises
// // saveToDB("A")
// // .then(()=>{
// //     console.log("Promise was resolved");
// // })

// // .catch(()=>{
// //     console.log("Promise was not resolved");
// // })

// function savetoDataBase(data){
//     return new Promise((resolve, reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve("Success : Data is saved");
//         }
//         else{
//             reject("Failure : Data is not saved");
//         }
//     });
// }
// savetoDataBase("Apna College").then(()=>{
//     console.log("Data1 is saved");
//     console.log(resolve);
//     return savetoDataBase("Hello World");
// })
// .then((result)=>{
//     console.log("Data2 is saved");
//     console.log(result);
//     return savetoDataBase("Database");
// })
// .then((result)=>{
//     console.log("Data3 is saved");
//     console.log(result);
//     return savetoDataBase("Hi");
// })
// .then((result)=>{
//     console.log("Data4 is saved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("Data is not saved");
//     console.log(error);
//
// })





// let h1 = document.querySelector("h1");
// function changeColor(color, delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("The color is changed");
//         },delay);
//     })
// }

// changeColor("red",1000).then((result)=>{
//     console.log("red color is changed",result);
//     return changeColor("blue",1000);
// })
// .then((result)=>{
//     console.log("blue color is changed",result);
//     return changeColor("Orange",1000);
// })
// .then((result)=>{
//     console.log("Orange color is changed",result);
//     return changeColor("yellow",2000);
// })

// .then((result)=>{
//     console.log("yellow color is changed",result);
// })




// .catch((error)=>{
//     console.log("Problem",error);
// });








//Handling rejections with await functions
let h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        let number = Math.floor(Math.random()*5)+1;
        if(number > 4){
            reject("Promise is rejected");
        }
        h1.style.color = color;
        console.log(`Color is changed to ${color}`);
        resolve("Color changed");
    },delay);
})
}


// Using async/await to handle promises
//Rejection handling with try and catch in await functions


async function demo(){
    try{
    await changeColor("red",1000);
    await changeColor("Orange",1000);
    await changeColor("blue",1000);
    await changeColor("yellow",1000);
    }
    catch(err){
        console.log("Error caught");
        console.log(err);
    }
    let a = 6;
    console.log(a);
}