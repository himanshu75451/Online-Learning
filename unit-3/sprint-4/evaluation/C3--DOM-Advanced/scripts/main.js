// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

let urlTodosBase = `${baseServerURL}/todos/`;
let mainSection = document.getElementById("data-list-wrapper");
let getTodoButton = document.getElementById("fetch-todos");
let sortLowToHigh = document.getElementById("sort-low-to-high");
let sortHighToLow = document.getElementById("sort-high-to-low");
let filterCompleted = document.getElementById("filter-completed");
let filterPending = document.getElementById("filter-pending");
let filterByCategoryWrapper = document.getElementById("filter-by-categories-wrapper");
let todoItems = [];


window.addEventListener("click", async () => { 
  fetchAndRenderUsers();
});

// Fetch & render users
function fetchAndRenderUsers() {
  fetch(`${baseServerURL}/todos/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      
      mainSection.innerHTML=getcard(data)
    });
}
// utilites



function getcard(data){
    let carddata=`<div class="todo-list-wrapper"">
    ${data.map((item)=>getcat(
      item.id,
            item.title,
            item.completed,
            item.category
      
    )


    ).join("")}
    </div>`

    return carddata
}

function getcat(id,title,completed,category){
  let card=`<label class="todo-item-label"><input class="todo-item-checkbox" data-id=${id} type="checkbox">${title}</label>`
  return card
}
// function getCardList(data) {
//   const cardList = document.createElement("div");
//   cardList.classList.add(".todo-item-label");

//   data.forEach((item) => {
//     let card = getCard(
//       item.id,
//       item.title,
//       item.completed,
//       item.category
//     );

//     cardList.append(card);
//   });

//   return cardList;
// }

// function getCard(userId, fullName,completed,category){

//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.setAttribute("data-id", userId);

//   const cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");

//   const cardTitle = document.createElement("h5");
//   cardTitle.innerText = fullName;

//   // const cardDescription = document.createElement("div");;
//   // cardDescription.classList.add("checkbox");
//   // cardDescription.innerText = completed;

//   // const cardcategory = document.createElement("div");
//   // cardcategory.classList.add("card-work");
//   // cardcategory.innerText = category;

//   cardBody.append(cardTitle);
//   //cardBody.append(cardDescription);
//   //cardBody.append(cardcategory);
//   card.append(cardBody);

//   return card;
// }
