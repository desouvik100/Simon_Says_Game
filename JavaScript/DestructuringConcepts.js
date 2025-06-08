//Destructuring for any array
let names = ["A","B","C","D","E","F"];

let [winner,runnerup,secondrunnerup] = names;

//Destructuring array
let [winner01,runnerup01,secondrunnerup01,...otherplayers] = names;



//Destructuring objects
const student = {
    name: "Souvik De",
    rollNo: "15",
    username: "souvik01",
    password: "1234"
};
let {username,password} = student;//If we write now directly username or password we can get the username or password easily



//We can store username and password in a variable too
let {username: user, password: confidential} = student;