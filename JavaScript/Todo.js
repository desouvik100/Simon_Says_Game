let todo = [];
let request = prompt("Please enter your request");
while(true) {
    if(request == "quit") {
        break;
    }

    if(request == "list") {
        for(let i=0; i<todo.length; i++) {
            console.log(i,todo[i]);
        }
    }
    else if("list" == null){
        console.log("Todo list is empty");
    }

    else if(request == "add" || request == "1"){
        let add = prompt("Enter the task you want to add");
        todo.push(add);
        console.log("task added successfully");
    }


    else if(request == "delete") {
        let d = prompt("Enter the element number you want to delete");
        todo.splice(d,1);
        console.log(`Index ${d} is deleted`);
    }

    
    request = prompt("Please enter your request");
}