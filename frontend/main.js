let createUser = document.getElementById("createUser");
let login = document.getElementById("login");


createUser.addEventListener("click", createUserForm);



function createUserForm () {
    let newUserName = document.createElement("input");
    newUserName.placeholder="Ny användare";
    let newUserPassword = document.createElement("input");
    newUserPassword.placeholder="Nytt lösenord";
    let addUser = document.createElement("button");
    addUser.innerText="Skapa användare";
    let back = document.createElement("button");
    back.innerText="back";

    form.innerHtml = "";
    login.innerHTML="";
    form.append(back,newUserName,newUserPassword,addUser);
}

