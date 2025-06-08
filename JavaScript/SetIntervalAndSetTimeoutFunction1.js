//Sum of numbers in an array
const arrayAverage = (array) =>{
    let total = 0;
    for(let number of array){
        total+=number;
    }
    console.log(`Array: ${array}`);
    return total/array.length;
};
let array = [1,2,3,4,5,6,7,8,9,11];
arrayAverage(array);
console.log(arrayAverage(array));


//Arrow function to check even or not
isEven = (n) => n%2==0;





//
const object = {
    message: 'Hello, World!',
    // status: this,
    // function(){
    //     console.log(this.message);
    // },
    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

// const student = {
//     name: "Souvik De",
//     RollNo: 15,
//     prop: this,
//     getName: function() {
//         console.log(this);//Global Scope
//         return this.name;
//     },
//     getRollNo: ()=> {
//         console.log(this);//Parent's Scope
//         return this.name;
//     }
// };

let length = 4;
function callback() {
    console.log(this.length);
}


const object1 = {
    length: 5,
    method(callback){
        callback();
    },
};

object1.method(callback , 1 , 2);