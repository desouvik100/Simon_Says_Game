//Extracting form data from the form
let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    if(user.value == ""){
        alert("Please fill the username field");
        return;
    }
    else if(user.value.Length < 5){
        alert("Username should be atleast 5 characters long");
        return;
    }
});
let t1 = document.querySelector(".t1");
let t2 = document.querySelector(".t2");
    // let user = document.querySelector("#username");
    // let password = document.querySelector("#password");
    //Another way to get the form data is to use the elements property of the form
    // let user = this.elements[0];
    // let password = this.elements[1];
    // console.dir(form);

    // alert(`Username: ${user.value} Password: ${password.value}`);
    // console.log(user.value);
    // console.log(password.value);
    let user = document.querySelector("#username");
    user.addEventListener("change",function(event){
        if(user.value == ""){
            alert("Please fill the username field");
            return;
        }
        else if(user.value.length < 5){
            alert("Username should be atleast 5 characters long");
            return;
        }
        else if(user.value.length > 15){
            alert("Username should be atmost 15 characters long");
            return;
        }
        else if(user.value.includes(" ")){
            alert("Username should not contain spaces");
            return;
        }
        else if(user.value.includes("@")){
            alert("Username should not contain @");
            return;
        }
        else if(user.value.includes("#")){
            alert("Username should not contain #");
            return;
        }
        else if(user.value.includes("!")){
            alert("Username should not contain !");
            return;
        }
        else{
            console.log("Username hasbeen changed to:"+user.value);
            let correct = document.querySelector("#correct");
            correct.innerText = "✔️";
            correct.style.color = getRandomColor();
        }
    });

    user.addEventListener("input",function(event){
        let filteredValue = user.value.replace(/[^a-zA-Z]/g,"");
        t1.textContent = filteredValue;
        t1.style.color = getRandomColor();
    });

    let password = document.querySelector("#password");
    password.addEventListener("input",function(event){
        t2.innerText = "Due to security reasons, password is not displayed here please check the console";
        console.log(password.value);
    });
    password.addEventListener("change",function(event){
        console.log("Password hasbeen changed to:"+password.value);
        if(password.value == ""){
            alert("Please fill the password field");
            return;
        }
        
    });
    function getRandomColor(){
        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);
        let color = `rgb(${red},${green},${blue})`;
        // console.log(color);
        return color;
    }
    

    let btn = document.querySelector(".btn");
    btn.addEventListener("click",function(event){

        event.preventDefault();
        let checkInput1 = document.querySelector("#check");
        if(user.value == "" || password.value == ""){
            alert("Please fill all the fields");
            return;
        }
        console.log(password.value);
        checkInput1.innerText = password.value+" "+user.value;
        checkInput1.style.color = getRandomColor();
    });