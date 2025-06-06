console.log("hello world");


const buttonName = document.getElementById("my-button");
const listButton = document.getElementById("my-list");

buttonName.addEventListener("click", function() {
    const nameInput = document.getElementById("h1");
    h1.textContent = "Moi maailma";
    
})



listButton.addEventListener("click", function() {
    const list = document.getElementById("list");
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    list.appendChild(newItem);
    
})