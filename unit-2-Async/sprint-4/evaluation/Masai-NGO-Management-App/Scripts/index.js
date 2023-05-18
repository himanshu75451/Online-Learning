// Write code related to Home Page

let form = document.querySelector("form");

form.addEventListener("submit", submitform);

function submitform(){

    let name = document.getElementById("name").value
    let number = document.getElementById("phone").value
    let email = document.getElementById("email").value
    let category = document.getElementById("category").value
    let type = document.getElementById("type").value
    
    let obj = {
        name : name,
        number : number,
        email : email,
        category : category,
        type : type,
    };

    let data = JSON.parse(localStorage.getItem("Helpers")) || [];
    data.push(obj);
    localStorage.setItem("Helpers",JSON.stringify(data))
}
