console.log("hello world");


const buttonName = document.getElementById("my-button");
const listButton = document.getElementById("add-data");
var area = document.getElementById("area");
var list = document.getElementById("list");

buttonName.addEventListener("click", function() {
    const nameInput = document.getElementById("h1");
    h1.textContent = "Moi maailma";
    
})



listButton.addEventListener("click", function() {
    
    const listItem = document.createElement("li");
    let textToAdd = area.value;  
    listItem.append(textToAdd);
    console.log(textToAdd);
    list.append(listItem);
    area.value = "";


    
})