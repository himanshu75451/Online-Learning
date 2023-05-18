import { baseServerURL } from "../templateConstants.js"; // Make no Changes here

let form = document.querySelector("form");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit",async (e)=>{
    e.preventDefault()
    try{
        let obj = {
            "email" : email.value,
            "password" : password.value,
        }
        let res = await fetch(`${baseServerURL}/login`,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(obj),
        });
        let data = await res.json();
        console.log(data);

        localStorage.setItem("auth",JSON.stringify(data.accessToken)); 
    }
    catch(err){
        console.log(err);
    }
});

