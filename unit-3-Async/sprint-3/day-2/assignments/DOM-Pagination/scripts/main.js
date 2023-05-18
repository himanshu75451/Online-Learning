// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------



//----------------------------------------------------------

// function fetchData(){
//   fetch(`${baseServerURL}/users?_page=1&_limit=10`)
//   .then(res => res.json())
//   .then(data =>{
//     (console.log(data))
//   })
//   .catch((err) =>{
//     console.log(err);
//   })
// }

//-------------------------------------------------------------

// async function fetchData(){
//   let res = await fetch(`${baseServerURL}/users?_page=1&_limit=10`)
//   let data = await res.json();
//   console.log(data);
// }

//--------------------------------------------------------------

let paginationWrapper = document.getElementById("pagination-wrapper");
let datalistWrapper = document.getElementById("data-list-wrapper");

fetchData(1);


async function fetchData(pageNo){
  try{
    //loading();
    let res = await fetch(`${baseServerURL}/users?_page=${pageNo}&_limit=10`);
    let total = res.headers.get("X-Total-count");
    let page = Math.ceil(total/10);
    paginationWrapper.innerHTML = "";

    for(let x=1; x<=page; x++){
      paginationWrapper.append(createaBtn(x));
    }
    let data = await res.json();
    console.log(data);
    DisplayData(data)
  }
  catch(err){
    console.log(err);
  }
}

function createaBtn(id){
  let btn = document.createElement("button");
  btn.className = "pagination-button";
  btn.setAttribute("data-page-number",id);
  btn.textContent=id;

  btn.addEventListener("click",() =>{
    fetchData(id)
  })

  return btn;
}

function createCard(item){
  let card = document.createElement('div');
  card.setAttribute('data-id',item.id);
  card.className = 'card';

  let cardImg = document.createElement('div');
  cardImg.className = 'card__img';

  let cardBody = document.createElement('div');
  cardBody.className ="card__body";

  let cardDesc = document.createElement('div');
  cardDesc.className = "card__item card__description";
  cardDesc.textContent = item.email;

  let img = document.createElement('img');
  img.src = item.avatar;
  img.setAttribute("alt",`${item.firstname} ${item.lastname}`);

  let h3 = document.createElement('h3');
  h3.className = "card__item card__title";
  h3.textContent = `${item.firstname} ${item.lastname}`;

  cardImg.append(img);
  cardBody.append(h3,cardDesc);
  card.append(cardImg,cardBody);

  return card;
}


function DisplayData(data){
  datalistWrapper.innerHTML ="";
  let cardList = document.createElement("div");
  cardList.className = "card-list";

  datalistWrapper.append(cardList);

  data.forEach((item) => {
    cardList.append(createCard(item))
  });
}


// function loading(){
//   let img = document.createElement("img");
//   img.src ="https://miro.medium.com/v2/resize:fit:1400/1*cD8WMb82cSXACDTG8mlWhw.gif";
//   datalistWrapper.append(img);

// }

