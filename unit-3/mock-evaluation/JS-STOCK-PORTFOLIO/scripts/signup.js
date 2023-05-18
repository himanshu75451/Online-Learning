import { baseServerURL } from "../templateConstants.js"; // Make no Changes here

let form = document.querySelector("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit",async (e)=>{
    e.preventDefault()
    try{
        let obj = {
            "username" : name.value,
            "email" : email.value,
            "password" : password.value,
        }
        let res = await fetch(`${baseServerURL}/register`,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(obj),
        });
        let data = await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
});
