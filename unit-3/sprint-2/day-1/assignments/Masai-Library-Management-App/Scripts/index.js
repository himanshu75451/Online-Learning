// you can write your js code here

let form = document.querySelector("form");

form.addEventListener("submit", submitform);

function submitform(){

    let name = document.getElementById("name").value
    let authorName = document.getElementById("author").value
    let desc = document.getElementById("desc").value
    let date = document.getElementById("added").value
    let category = document.getElementById("category").value
    let price = document.getElementById("price").value

    let obj = {
        name : name,
        authorName : authorName,
        desc : desc,
        date : date,
        category : category,
        price : price,
    };

    let booklist = JSON.parse(localStorage.getItem("book-list")) || [];
    booklist.push(obj);
    localStorage.setItem("book-list", JSON.stringify(booklist));
}