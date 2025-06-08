console.log("Hello World");
// let a = 10;
// let b = 1100;
// console.log("Sum is :"+ (a+b));
// let str = prompt("Enter the String");
// console.log(str);
// if(str.length>3 && (str[0]==='a')||str[0]=='A'){
//     console.log("This is a good string");
// }
// else{
//     console.log("This is not a good string");
// }





// let num = 74;
// if(num%10!=0){
//     console.log("Good");
// }
// else{
//     console.log("Bad");
// }






// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// console.log(`${name} is ${age} years old`);






// let a = 10;
// let b = 11;
// let c = 74;
// if(a>b && a>c){
//     console.log("a is greatest number");
// }
// if(b>a && b>c){
//     console.log("b is the greatest number");
// }

// else{
//     console.log("c is the greatest number");
// }



// let a = [7,9,0,-2];
// let n = 3;
// let ans =  a.slice(a.length-n);
// console.log(ans);

// let str = prompt("Enter any string : ");
// if(str.length == 0)
// {
//     console.log("The string is empty");
// }
// else{
//     console.log("The string is not empty");
//     console.log(str);
// }
// let string = "ApnACollege";
// let idx = 3;
// if (string[idx] == string[idx].toUpperCase()) {
//     console.log("Character is lowercase");
// }
// else{
//     console.log("Character is not in lowercase");
// }
// let string = prompt("Enter any string");
// console.log(`Original string is ${string}`);
// console.log(`String without spaces ${string.trim()}`);


// let arr = [1,2,3,4];
// let item = 4;
// if(arr.includes(item) ){
//     console.log("The item is in the array");
// }
// else{
//     console.log("The item is not in the array");
// }
// if(arr.indexOf(item)!=-1){
//     console.log("Element exists in the array");
// }
// else{
//     console.log("Element is not there in the array");
// }
// let n = prompt("Enter a number");
// n = parseInt(n);
// for(let i=n; i<=(n*10); i=i+n){
//     console.log(i);
// }

// //Array with nested for loop
// let arr = [[1,2,3] , [4,5,6]];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
//     for(let j=0; j<arr[i].length; j++){
//         console.log(`j=${j} ${arr[i][j]}`);
//     }
// }



// //For of for loop
// let fruits = ["Mango" , "Litchi" , "Pineapple" , "Apple"];
// for (fruit of fruits) {
//     console.log(fruit);
// }




// for (char of "ABCD") {
//     console.log(char);
// }
//Question 1
// let a = [1,2,3,4,5,6];
// let num = prompt("Enter the element index you want to delete");
// a.splice(num,1);
// for(numbers of a) {
//     console.log(numbers);
// }
// Question 2
// let b = [1,2,3,4,5,6];
// for(let i=0; i<b.length; i++){
//     console.log(`${b.length}`);
// }
//Write a program to check the sum of digits.
// let number = 74;
// let sum = 0;
// let rem;
// let copy = number;
// while (copy!=0) {
//     rem = (copy%10);
//     sum = sum + rem;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);
// // Write a program to check how many numbers.
// let n = 2874;
// let count = 0;
// let a = n;
// while(a>0) {
//     count++;
//     a = Math.floor(a/10);
// }
// console.log(count);
// //Write a program to check the facctorial of a number
// let n1 = prompt("Enter a number");
// n1 = parseInt(n1);
// let fact = 1;
// for(let i=1; i<=n1; i++) {
//     fact = fact*i;
// }
// console.log(fact);
//Write a program to check the largest number in an array
// let a1 = [];
// let l1 = prompt("Enter the size of the array");
// let largest = 0;
// for(let i=0; i<l1; i++){
//     a1[i] = prompt("Enter the number");
// }
// console.log("The array");
// for(let i=0; i<l1; i++){
//     console.log(a1[i]);
// }
// console.log("Checking the largest number");
// for(let a=0; a<a1.length; a++){
//     if(largest<a1[a]){
//         largest = a1[a];
//     }
// }
// console.log(`The largest value in the array is ${largest}`);