// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

// data fetching URL's
const toursURL = `${baseServerURL}/tours`;
const recipeURL = `${baseServerURL}/recipes`;
const employeeURL = `${baseServerURL}/employees`;

//fetching buttons
let fetchRecipesBtn = document.getElementById("fetch-recipes");
let fetchEmployeesBtn = document.getElementById("fetch-employees");

//Append div with class "card-link" to mainSection
let mainSection = document.getElementById("data-list-wrapper");

//Sorting Buttons
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

//filtering buttons
let filterNationalTours = document.getElementById("filter-National-tours");
let filterInternationalTours = document.getElementById(
  "filter-International-tours"
);

//Ticket booking status div and cancel ticket button
let ticketBookStatus = document.getElementById("ticket-book-card");
let cancelTicketBtn = document.getElementById("cancel-ticket");

let employeesData = [];
let toursData = [];
let recipeData = [];

// ***** Event listeners ***** //



window.addEventListener("load",() => {
  fetchData();
})

function fetchData(){
  fetch(`${baseServerURL}/tours`)
  .then((res) => res.json())
  .then((data) =>{
    console.log(data);
    mainSection.innerHTML  = null;
    

    const cardList = DisplayData(data);
    mainSection.append(cardList);
    
  })
}

function DisplayData(data){
  
  let cardList = document.createElement("div");
  cardList.className = "card-list";

  data.forEach((item) => {
    cardList.append(createCard(item.id, item.location, item.price, item.image, item.type))
  });
  return cardList;
}

//function createCard(item){
  // let card = document.createElement('div');
  // card.setAttribute('data-id',item.id);
  // card.className = 'card';

  // let cardImg = document.createElement('div');
  // cardImg.className = 'card-img';

  // let cardBody = document.createElement('div');
  // cardBody.className ="card-body";

  // let cardDesc = document.createElement('div');
  // cardDesc.className = "card-item card-description";
  // cardDesc.textContent = item.email;

  // let img = document.createElement('img');
  // img.src = item.avatar;
  // img.setAttribute("alt",item.title);

  // let h3 = document.createElement('h3');
  // h3.className = "card-item card-title";
  // h3.textContent = item.title;

  // cardImg.append(img);
  // cardBody.append(h3,cardDesc);
  // card.append(cardImg,cardBody);

  function createCard(id, location, price, image, type){

    let  card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", id);
  
    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
  
    const img = document.createElement("img");
    img.src = image;
    img.setAttribute("src",image);
  
    cardImage.append(img);
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-item");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = location;
  
    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card-item");
    cardDescription.classList.add("card-description");
    cardDescription.classList.add("card-salary");
    cardDescription.innerText = price;
  
    const cardEdit = document.createElement("a");
    cardEdit.setAttribute("href", "#");
    cardEdit.setAttribute("data-id", id);
    cardEdit.innerText = "Book Now";


    let h3 = document.createElement('h3');
    h3.className = "card-item card-title";
    h3.textContent = type;
  
    cardBody.append(cardTitle);
    cardBody.append(cardDescription);
    cardBody.append(cardEdit);
    cardBody.append(h3);

    card.append(cardImage);
    card.append(cardBody);
    //card.append(cardTitle);
    //card.append(cardDescription);
    //card.append(cardEdit);

  return card;
}


