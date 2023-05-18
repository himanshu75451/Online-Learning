// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;



let accessToken = ""
let userId2 

loginUserButton.addEventListener("click", async () =>{
   let obj = { 
    "username" : loginUserUsername.value,
    "password" : loginUserPassword.value,
   }
   try{
    let res = await fetch(`${baseServerURL}/user/login`, {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(obj)
    })
    let data = await res.json();
    //console.log(data);
    accessToken = data.accessToken;
    //console.log(accessToken);
    notificationWrapper.innerHTML =`<h5 class="notification info"> hey ${data.user.username}, welcome back!</h5>`

    userAuthToken = data.accessToken;
    userId = data.user.id
    userId2 = data.user.id
    localStorage.setItem('Auth-Token',userAuthToken,userId)
   }
   catch(err){
    console.log(err);
   }
})



getTodoButton.addEventListener("click",()=>{
  fetchAndRenderUsers();
});

function fetchAndRenderUsers(){
  fetch(`${baseServerURL}/todos?userId=${userId2}`,{
    headers:{
      'Authorization': `Bearer ${accessToken}`
    }  
  })
  .then((res)=>{
    if(res.ok){
      return res.json();
    }else{
     //console.log(res)
      throw(res.statusText)
    }
  })
  .then((data)=>{
    //console.log(data)
    mainSection.innerHTML = getcard(data);
  })
  .catch((err)=>{
    console.log(err)
  })  
}
// async function fetchAndRenderUsers(){
//   try{
//     let res = await fetch(`${baseServerURL}/todos/`,{
//       method : 'GET',
//       'Content-Type' : 'application/json',
//       'Authorization' : `Bearer ${accessToken}`
//     })
//     if (res.ok) {
//       let data = await res.json();
//       mainSection.innerHTML = getcard(data)
//     } else {
//       return `server responded with a ${res.status} error.`
//     }
//   }
//   catch(err){
//     console.log(err);
//   }
  
// }
function getcard(data){

  let carddata = `<div id="todo-list-wrapper" class="todo-list-wrapper">
  ${data.map((item) => getcat(
    item.id,
    item.title,
    item.completed,
)).join("")}</div>`
  return carddata
}

function getcat(id,title,completed){
  if(completed == true){
    let card = `<label><input class="todo-item-checkbox" data-id=${id} type="checkbox" checked>${title}</label>`
    return card
  }else{
    let card = `<label><input class="todo-item-checkbox" data-id=${id} type="checkbox">${title}</label>`
    return card
  }
}

