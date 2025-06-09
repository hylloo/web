console.log("hello world");


const buttonName = document.getElementById("submit-data");
var area = document.getElementById("area");
var list = document.getElementById("list");

buttonName.addEventListener("click", function() {
    const usernameInput = document.getElementById("h1");
    let nameToAdd = document.getElementById("input-username");
    let emailToAdd = document.getElementById("input-email");
    let adminRights = document.getElementById("input-admin");

    
})



function addUser() {
    let nameToAdd = document.getElementById("input-username").value;
    let emailToAdd = document.getElementById("input-email").value;
    let adminRights = document.getElementById("input-admin").checked;

    if (nameToAdd && emailToAdd) {
        let userItem = document.createElement("li");
        userItem.textContent = `${nameToAdd} (${emailToAdd}) ${adminRights ? "(Admin)" : ""}`;
        list.appendChild(userItem);
        
        // Clear input fields
        document.getElementById("input-username").value = '';
        document.getElementById("input-email").value = '';
        document.getElementById("input-admin").checked = false;
    } else {
        alert("Please fill in both username and email.");
    }
}