// // let jsonRes = '{"fact": "Very good","length": 9}';
// // let validData = JSON.parse(jsonRes);
// // console.log(validData.fact);


// // let url = "https://catfact.ninja/fact";
// // fetch(url)
// // .then((response)=>{
// //     console.log(response);
// //     return response.json();
// // })
// // .then((response)=>{
// //     console.log(response.json());
// // })
// // .catch((err)=>{
// //     console.log("Error",err);
// // });




// // Cat facts and Dog pictures using API
// let url = "https://catfact.ninja/fact";
// let url1 = "https://dog.ceo/api/breeds/image/random";
// let btn = document.querySelector("button");
// let image = document.querySelector("img");
// let fact000 = document.getElementById("fact");
// btn.addEventListener("click",async()=>{
//     let link = await getImages();
//     image.setAttribute("src",link);
// })
// async function getImages(){
//     try{
//         let response = await axios.get(url1);
//         return response.data.message;
//     }
//     catch(e1){
//         return "/";
//     }
// }
// // btn.addEventListener("click",async()=>{
// //     let fact = await getFacts();
// //     console.log(fact);
// //     fact000.innerText = fact;
// //     fact000.style.color = getRandomColor();
// // })
// // async function getFacts(){
// //     try{
// //     let response = await axios.get(url);
// //     return response.data.fact;
// //     }
// //     catch(err){
// //         console.log("Error - "+err);
// //     }
// // }
// // function getRandomColor(){
// //     let red = Math.floor(Math.random()*255);
// //     let green = Math.floor(Math.random()*255);
// //     let blue = Math.floor(Math.random()*255);

// //     let rgb = `rgb(${red},${green},${blue})`;
// //     return rgb;
// // }










let url = "http://universities.hipolabs.com/search?name=";
let country = document.querySelector("input").value;
let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let colleges = await getColleges(country);
    console.log(colleges);
})
async function getColleges(country){
    try{
    let response = await axios.get(url+country);
    return response.data;
    }
    catch(e1){
        return e1;
    }
}