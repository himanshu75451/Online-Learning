// // --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
// const baseServerURL = `http://localhost:${
//   import.meta.env.REACT_APP_JSON_SERVER_PORT
// }`;
// // --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// // use base url from the above to make api call for different end points

// // append data your coffee card to mainSection below
// let mainSection = document.getElementById("data-list-wrapper");
// let navbar = document.getElementById("Navbar");
// navbar.innerHTML = `<h1>Coffee House☕</h1>`;

// // `${baseServerURL}/coffee`  ---> url to fetch
// fetchData();

// async function fetchData(){
//   try{
//     let res = await fetch(`${baseServerURL}/coffee`)
//     let data = await res.json();
//     console.log(data);
//     DisplayData(data);
//   }
//   catch(err){
//     console.log(err);
//   }
// }

// function DisplayData(data){
//   data.forEach((element) => {
//     let div = document.createElement("div");
//     div.setAttribute('class',"card-list");

//     let div2 = document.createElement("div");
//     div2.setAttribute('class',"card");

//     let div3 = document.createElement("div");
//     div3.setAttribute("class","card__img");
//     let img = document.createElement("img");
//     img.setAttribute(src,element.image);

//     let div4 = document.createElement("div");
//     div4.setAttribute('class',"card__body");
//     let h2 = document.createElement("h2");
//     h2.innerText = element.title;
//     h2.setAttribute("class","card__item","card__title");
//     let div5 = document.createElement("div");
//     div5.innerText = element.description;
//     div5.setAttribute('class',"card__item",'card__description');

//     let div6 = document.createElement("div");
//     div6.setAttribute('class',"card__item",'card__ingredients');
    

//   });
// }

 

// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// use base url from the above to make api call for different end points

// append data your coffee card to mainSection below
let mainSection = document.getElementById("data-list-wrapper");

// `${baseServerURL}/coffee`  ---> url to fetch

let navtag=document.getElementById("Navbar")
let navdata=document.getElementsByTagName("nav")

fetchdata()

async function fetchdata(){
  try {
  let res=await fetch(`${baseServerURL}/coffee`)
  let data=await res.json()
  console.log(data)
  navtag.innerHTML=geth1()
  mainSection.innerHTML=getcard(data)
  } catch (error) {
    console.log(error)
  }
}

function getcard(data){
  let cardlist=`<div class="card-list">
  ${data.map((item)=>getcardlist(
    item.id,item.title,item.price,item.description,item.image,item.ingredients
  )).join("")}
  </div>`

  return cardlist
}

function getcardlist(id,title,price,desc,image,ing){
  //console.log(ing)
  let card=`<div class="card" data-id=${id}>
  <div class="card__img">
    <img src=${image} alt="coffee">
  </div>
  <div class="card__body">
    <h2 class="card__item card__title">${title}</h2>
    <div class="card__item card__description">${desc}</div>
    <div class="card__item card__ingredients">
      <ul>
      ${ing.map((item) =>getli(item))}
      </ul>
    </div>
    <div class="card__item card__price">${price}</div>
  </div>
</div>`
  return card
}

function getli(item){
 // console.log(item)
  if(item==","){
      return
  }else{
    let litag=`<li>${item}</li>`
    return litag
  }
  
 
}

function geth1(){
  let a="Coffe House"
  let h1=`<h1>${a}</h1>`
  return h1
}