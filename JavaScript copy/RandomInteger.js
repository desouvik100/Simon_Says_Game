// // let step1 = Math.random();
// // console.log(step1);

// // let step2 = step1*10;


// // let step3 = Math.floor(step2);
// // console.log(step3);
// // console.log(Math.floor(step3)+1);

// // console.log(Math.floor(Math.random()*100)+1);
// // function multiplicationTable(n){
// //     for(let i=n; i<=(n*10); i+=n){
// //         console.log(i);
// //     }
// // }
// // multiplicationTable(2);





// // let str = ["Hi","Hello","Bye","!"];
// // function concatenation(str){


// //     let NewString = "";
// //     for(let i=0; i<str.length; i++){
// //         NewString+=str[i];
// //     }
// //     return NewString;

// // }
// //Odd or Even Factory
// function OddorEvenFactory(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }
//     else if(request == "even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }
//     else{
//         console.log("Wrong request");
//     }
// }
// let request = "even";
// let calculator = {
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     multiplication: function(a,b){
//         return a*b;
//     },
//     division: function(a,b){
//         return a/b;
//     }
// };
//Question 1
// let number = 4;
// let arr = [1,2,3,4,5,6,7,8,9,10,11];
// function n(arr,number){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>number){
//             console.log(arr[i]);
//         }
//     }
// }
// n(arr,number);

//Question 2
// let str = "abcdabcdefghefghgh";
// function getstring(str){
//     let ans = "";
//     for (let i = 0; i < str.length; i++) {
//         let currentchar = str[i];
//         if (ans.indexOf(str[i]) == -1) {
//         ans+=currentchar;       
//         }
//     }
//     return ans;
// }
// getstring(str);


// //Find the unique characters in a string
// let string = "abcdabcdabcdabcdabcdabcdabcd";
// function uniqueCharacter(string){
//     let uniqueChar = "";
//     for (let index = 0; index < string.length; index++) {
//         let currentCharacter = string[index];
//             if (uniqueChar.indexOf(string[index]) == -1) {
//                 uniqueChar += currentCharacter;
//             }
//         }
//     return uniqueChar;
// }
// uniqueCharacter(string);

//Longest string
let Country = ["Australia", "Germany", "United States Of America"];
function longestCountryName(Country){
    let ansInx = 0;
    for (let index = 0; index < Country.length; index++) {
        let ansLength = Country[ansInx].length;
        let currentLength = Country[index].length;
        if (currentLength > ansLength) {
            ansInx = index;
        }
    }
    return Country[ansInx];
}
longestCountryName(Country);


// Check vowels in a string
let str = prompt("Enter a sentence or word");
function checkVowels(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == "a"|| str.charAt(i) == "e"|| str.charAt(i) == "i" || str.charAt(i) == "o"|| str.charAt(i) == "u") {
            count++;
        }
    }
    return count;
}
let a = checkVowels(str);
alert(a);

//Random number generate
let start = 2;
let end = 17;
let number = (Math.floor(Math.random()*end) + start);
alert(number);