console.log("hello world");



function initializeCode() {
    const submitButton = document.getElementById("submit-data");
    const emptyButton = document.getElementById("empty-table");
    const userData = document.getElementById("user-data");
    


    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        let nameToAdd = document.getElementById("input-username").value;
        let emailToAdd = document.getElementById("input-email").value;
        let adminRights = document.getElementById("input-admin").checked;
        let imageInput = document.getElementById("input-image");
        let imageUrl = "";
        if (imageInput.files && imageInput.files[0]) {
            imageUrl = URL.createObjectURL(imageInput.files[0]);
        }

        let exists = false;
        let rows = userData.getElementsByTagName("tr");

        for (let i = 0; i < rows.length; i++) {
            let userNameCell = rows[i].getElementsByTagName("td")[0];
            if (userNameCell && userNameCell.innerHTML === nameToAdd) {
                rows[i].getElementsByTagName("td")[1].innerText = emailToAdd;
                rows[i].getElementsByTagName("td")[2].innerText = adminRights ? "X" : "-";
                if (imageUrl) {
                    rows[i].getElementsByTagName("td")[3].innerHTML = `<img src="${imageUrl}" alt="User Image" style="width:64px;height:64px;">`;
                }
                exists = true;
                return;
            }
        }
        if (!exists) {
            let newRow = document.createElement("tr");
            newRow.innerHTML = `<td>${nameToAdd}</td><td>${emailToAdd}</td><td>${adminRights ? "X" : "-"}</td><td>${imageUrl ? `<img src="${imageUrl}" alt="User Image" style="width:64px;height:64px;">` : ""}</td>`;
            userData.appendChild(newRow);
        }
        
    });

    emptyButton.addEventListener("click", function(event) {
        event.preventDefault();
        while (userData.firstChild) {
            userData.removeChild(userData.firstChild);
        }

    });
}


window.onload = initializeCode;