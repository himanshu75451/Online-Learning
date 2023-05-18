// Write code related to Home page here

let form = document.querySelector("form");

form.addEventListener("submit", submitform);

function submitform()
{
    let name = document.getElementById("name").value
    let desc = document.getElementById("desc").value
    let type = document.getElementById("type").value
    let category = document.getElementById("category").value
    let price = document.getElementById("price").value

    let obj = {
        name : name,
        desc : desc,
        type : type,
        category : category,
        price : price,
    };

    let menulist = JSON.parse(localStorage.getItem("menu")) || [];
    menulist.push(obj);
    localStorage.setItem("menu",JSON.stringify(menulist));
}