let n = [1,2,3,4,5,6,7];
//Square of the number
let n1 = n.map((number)=>(number*number));
console.log(n1);




//Sum of the numbers
let n2 = n.reduce((accumulator,number)=>(accumulator+number));
console.log(`The sum of the numbers is :${n2}`);


//Average of the numbers
let average = n2/n.length;
console.log(`The average of the numbers is : ${average}`);





//Create a  new array using the map function whose each element is equal to the original element plus 5.
let arr = [1,2,3,4];
console.log (arr.map((n)=>(n+5)));

//Create a new array whose elements are in uppercase of words present in the original array.
let arr1 = ["a","b","c","d","e","f","g","h","i"];
console.log(arr1.map((n)=>(n.toUpperCase())));

//Write a function called double And Return Args which accepts  an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled.
function double()