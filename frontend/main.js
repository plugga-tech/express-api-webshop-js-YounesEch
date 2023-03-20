let createUser = document.getElementById("createUser");
let login = document.getElementById("login");


createUser.addEventListener("click", createUserForm);

 printClothes();

 /*********skapa inloggningsformulär *********/
function createUserForm () {
    let newUserName = document.createElement("input");
    newUserName.placeholder="Ny användare";
    let newUserPassword = document.createElement("input");
    newUserPassword.placeholder="Nytt lösenord";
    let addUser = document.createElement("button");
    addUser.innerText="Skapa användare";
    let back = document.createElement("button");
    back.innerText="back";
    newUserName.classList.add("newUser");

    addUser.addEventListener("click", ()=>{
            let user= {name: newUser.value, password:newUserPassword.value};
            console.log(user);
    
            fetch("http://localhost:3010/users/add", { 
            method: "POST", 
            headers:{
                "Content-Type": "application/json",          
            },
            body:JSON.stringify(user)               
        })
            .then(res => res.json())
            .then(data => {
                printUserList(data)
            });
            newUser.value ="";
            newUserPassword.value= "";
    })

    form.innerHtml = "";
    login.innerHTML="";
    form.append(back,newUserName,newUserPassword,addUser);
}


/*************skriv ut kläderna i domen *******/
function printClothes (){
    fetch("http://localhost:3000/products/")
    .then(res => res.json())
    .then(clothes =>{
        let productslist = document.createElement("div");
        productslist.classList.add("list");

        productslist.innerHTML="";
        clothes.map(cloth => {
            let container = document.createElement("div");
            let p = document.createElement("p");
            let addToCart = document.createElement("button");
            let button = document.createElement("button");

            addToCart.id = cloth.id;
            button.innerText= "More info";
            button.id = cloth.id;
            addToCart.innerText ="Lägg till";
            p.id = cloth.id;
            p.innerText = cloth.name;
            container.append(p, button, addToCart)
            productslist.append(container);
        })
        list.append(productslist);
    })

}