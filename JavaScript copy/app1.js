let smallImages = document.getElementsByClassName("oldImg");
for(let i = 0; i < smallImages.length; i++){
    smallImages[i].src = "creation_1.png";
    console.log(`The value changed to ${smallImages[i].src} at index ${i}`);
}
//Adding elements
