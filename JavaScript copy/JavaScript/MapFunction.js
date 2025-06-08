//Map Function
let num = [1,2,3,4];
let double = num.map(function(e){
    return e*2;
})

let student = [{
    name: "Souvik De",
    marks: "92",
},
{
    name: "Arnab Dey",
    marks: "96",
}];



let gpa = student.map((a)=>{
    return (a.marks/10);
});


//Filter function
let arr = [1,2,3,4,5,6,7];
let newarray1 = arr.filter((e)=>{
    return e%2 == 0 && e<4;
});

let array1 = arr.every((a)=>{
    return a%2 == 0;
});

//Some Function
let array2 = arr.some((b)=>(b%2==0));

//Spread Function
let array4 = [1,2,3,4];
let array7 = [1,6,17,92];
let newarray4 = [...array4,...array7];
console.log(newarray4);

let char = [..."Souvik De"];
console.log(char);



//Creating of object from an array
let objectArray = [1,2,3,4,5,6,7];


let object = {...objectArray};