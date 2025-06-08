//Program to find maximum value in an array
let arr = [1,2,3,4,5,6,7];
let MaximumValue = -1;
for(let i=0; i<arr.length; i++){
    if(MaximumValue < arr[i]){
        MaximumValue = arr[i];
    }
}
console.log(MaximumValue);

//Programto find maximum value in an array by using reduce function
let array1 = [1,2,3,4];
// let max = -1;
let newarray1 = array1.reduce((accumulator,element)=>{
    if(accumulator < element){
        return element;
    }
    else{
        return accumulator;
    }
});
console.log(newarray1);



let array = [10,50,100,40];
let ans = array.every((a1)=>(a1 % 10 == 0));
console.log(ans);




//Program to find the minimum number in an array
let array2 = [1,2,3,4,5,6,7];
let a = array2.reduce((a,b)=>{
    if(b<a){
        return b;
    }
    else{
        return a;
    }
});
console.log(a);