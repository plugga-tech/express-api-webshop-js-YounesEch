let userForm = document.getElementById("userForm");


export function printLoginForm (){
    let loginUserName = document.createElement("input");
    loginUserName.placeholder = "Name.....";

    let loginPassword = document.createElement("input");
    loginPassword.placeholder = "Password....";
    
    let loginUserBtn = document.createElement("button"); 
    loginUserBtn.innerText= "Login";

    loginUserBtn.addEventListener('click', ()=>{ 
        let loginUser =  {
            name: loginUserName.value,
            password: loginPassword.value
        }
    })
    userForm.innerHTML = "";
    userForm.append(loginUserName, loginPassword, loginUserBtn);
}