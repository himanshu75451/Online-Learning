// Write code related to Home page here

let form = document.querySelector("form");

form.addEventListener("submit", submitform);

function submitform(){

    let name = document.getElementById("name").value
    let desc = document.getElementById("desc").value
    let type = document.getElementById("type").value
    let course = document.getElementById("course").value
    let sprint = document.getElementById("sprint").value
    let schedule = document.getElementById("schedule").value

    let obj ={
        name : name,
        desc : desc,
        type : type,
        course : course,
        sprint : sprint,
        schedule : schedule,
    };

    let Assgm = JSON.parse(localStorage.getItem("assignments")) || [];
    Assgm.push(obj);
    //console.log(obj);
    localStorage.setItem("assignments",JSON.stringify(Assgm));
}