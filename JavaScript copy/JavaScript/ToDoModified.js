let btn = document.querySelector("button");
let input = document.querySelector("#taskInput");
let ul = document.querySelector("ul");
btn.addEventListener("click", function() {

    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    li.innerText = input.value;
    li.style.color = "blue";
    ul.appendChild(li);
    // li.addEventListener("click", function() {
    //     li.style.textDecoration = "line-through";
    //     li.style.color = "red";
    // });
    li.appendChild(deleteButton);
    console.log(input.value);
    // deleteButton.addEventListener("click", function() {
    //     ul.removeChild(li);
    // });
    //Using event delegation
    ul.addEventListener("click",function(event){
        if(event.target.nodeName == "BUTTON"){
            event.target.parentElement.remove();
        }
    });
    input.value = "";
});