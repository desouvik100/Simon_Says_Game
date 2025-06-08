const student = {
    name: "Souvik De",
    RollNo: 15,
    prop: this,
    getName: function() {
        console.log(this);//Global Scope
        return this.name;
    },
    getRollNo: ()=> {
        console.log(this);//Parent's Scope
        return this.name;
    }

};

square = (n)=>(n*n);


let id = setInterval(()=>{
    console.log("Apna College");
},2000);

setTimeout(()=>{
    clearInterval(id);
},10000);

