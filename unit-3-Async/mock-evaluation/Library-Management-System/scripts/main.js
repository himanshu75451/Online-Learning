// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const bookURL = `${baseServerURL}/books`;
let mainSection = document.getElementById("data-list-wrapper");

// book
let bookTitleInput = document.getElementById("book-title");
let bookImageInput = document.getElementById("book-image");
let bookCategoryInput = document.getElementById("book-category");
let bookAuthorInput = document.getElementById("book-author");
let bookPriceInput = document.getElementById("book-price");
let bookCreateBtn = document.getElementById("add-book");

// Update book
let updateBookIdInput = document.getElementById("update-book-id");
let updateBookTitleInput = document.getElementById("update-book-title");
let updateBookImageInput = document.getElementById("update-book-image");
let updateBookAuthorInput = document.getElementById("update-book-author");
let updateBookCategoryInput = document.getElementById("update-book-category");
let updateBookPriceInput = document.getElementById("update-book-price");
let updateBookBtn = document.getElementById("update-book");

//Update price
let updatePriceBookId = document.getElementById("update-price-book-id");
let updatePriceBookPrice = document.getElementById("update-price-book-price");
let updatePriceBookPriceButton = document.getElementById("update-price-book");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterClassic = document.getElementById("filter-Classic");
let filterFantasy = document.getElementById("filter-Fantasy");
let filterMystery = document.getElementById("filter-Mystery");

//Search by title/author

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Books Data
let booksData = [];

window.addEventListener("load", () =>{
  FetchData();
})


async function FetchData(){
  try{
    let res = await fetch(`${baseServerURL}/books`);
    let data = await res.json();
    console.log(data);
    mainSection.innerHTML = null;

    let cardList = DisplayData(data);
    mainSection.append(cardList);
  }
  catch(err){
    console.log(err);
  }
}


function DisplayData(data){
  let cardList = document.createElement("div");
  cardList.className = "card-list";

  data.forEach((item) => {
    cardList.append(createdCard(item));
  });
  return cardList;
}

function createdCard(item){
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", item.id);

  let cardImg = document.createElement("div");
  cardImg.classList.add("card-img");

  let img = document.createElement("img");
  img.src = item.image;
  img.setAttribute("alt", "book-Error");

  cardImg.append(img);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardTitle = document.createElement("h4");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = item.title;

  let cardAuthor = document.createElement("p");
  cardAuthor.classList.add("card-author");
  cardAuthor.innerText = item.author;

  let cardCategory = document.createElement("p");
  cardCategory.classList.add("card-category");
  cardCategory.innerText = item.category;

  let cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");
  cardPrice.setAttribute("class","card-price")
  cardPrice.innerText = item.price;

  let cardEdit = document.createElement("a");
  cardEdit.setAttribute("href", "#");
  cardEdit.setAttribute("data-id", item.id)
  cardEdit.classList.add("card-link");
  cardEdit.innerText = "Edit";

  let cardButton = document.createElement("button");
  cardButton.setAttribute("data-id", item.id)
  cardButton.classList.add("card-button");
  cardButton.innerText = "Delete";

  cardButton.addEventListener("click", () =>{
    fetch(`${baseServerURL}/books/${item.id}`,{
      method : "DELETE",
      headers : {
        'Content-type' : 'application/json'
      },
    })
    .then((res) => res.json())
    .then((data) => {
      FetchData();
    })
  });
  

  card.append(cardImg);
  card.append(cardTitle);
  card.append(cardAuthor);
  card.append(cardCategory);
  card.append(cardPrice);
  card.append(cardEdit)
  card.append(cardButton);

  return card;
}



bookCreateBtn.addEventListener("click",() => {
  let bookTitle = bookTitleInput.value;
  let bookImage = bookImageInput.value;
  let bookCategory = bookCategoryInput.value;
  let bookAuthor = bookAuthorInput.value;
  let bookPrice = bookPriceInput.value;

  let bookObj = {
    title : bookTitle,
    image : bookImage,
    category : bookCategory,
    author : bookAuthor,
    price : bookPrice
  }

  fetch(`${baseServerURL}/books`,{
    method : "POST",
    headers : {
      'Content-type' : 'application/json'
    },
    body : JSON.stringify(bookObj)
  })
  .then((res) => res.json())
  .then((data) => {
    FetchData();
  })
})
 

updateBookBtn.addEventListener("click",() => {
  let updatebookId = updateBookIdInput.value;
  let updatebookTitle = updateBookTitleInput.value;
  let updatebookImage = updateBookImageInput.value;
  let updatebookCategory = updateBookCategoryInput.value;
  let updatebookAuthor = updateBookAuthorInput.value;
  let updatebookPrice = +updateBookPriceInput.value;

  let updatebookObj = {
    id : updatebookId,
    title : updatebookTitle,
    image : updatebookImage,
    category : updatebookCategory,
    author : updatebookAuthor,
    price : updatebookPrice
  }

  fetch(`${baseServerURL}/books/${updatebookId}`,{
    method : "PUT",
    headers : {
      'Content-type' : 'application/json'
    },
    body : JSON.stringify(updatebookObj)
  })
  .then((res) => res.json())
  .then((data) => {
    FetchData();
  })
})


updatePriceBookPriceButton.addEventListener("click",() => {
  let updatebookId2 = updatePriceBookId.value;
  let updatebookPrice2 = +updatePriceBookPrice.value;

  let updatebookObj2 = {
    id : updatebookId2,
    price : updatebookPrice2
  }

  fetch(`${baseServerURL}/books/${updatebookId2}`,{
    method : "PATCH",
    headers : {
      'Content-type' : 'application/json'
    },
    body : JSON.stringify(updatebookObj2)
  })
  .then((res) => res.json())
  .then((data) => {
    FetchData();
  })
})
 




sortAtoZBtn.addEventListener("click", async ()=>{
  try{
    let res = await fetch(`${baseServerURL}/books?_sort=price&_order=asc`);
    let data = await res.json();
    console.log(data);
    mainSection.innerHTML = null;

    let cardList = DisplayData(data);
    mainSection.append(cardList);
  }
  catch(err){
    console.log(err);
  }
})


sortZtoABtn.addEventListener("click", async ()=>{
  try{
    let res = await fetch(`${baseServerURL}/books?_sort=price&_order=desc`);
    let data = await res.json();
    console.log(data);
    mainSection.innerHTML = null;

    let cardList = DisplayData(data);
    mainSection.append(cardList);
  }
  catch(err){
    console.log(err);
  }
})

