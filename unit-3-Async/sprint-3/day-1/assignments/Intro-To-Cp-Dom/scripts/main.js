// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;

// Append div to main section
let mainSection = document.getElementById("data-list-wrapper");

//  add employees
let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");
let empCreateBtn = document.getElementById("add-employee");

//Sorting 
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

//Filter 
let filterLessThan1LBtn = document.getElementById("filter-less-than-1L");
let filterMoreThanEqualLBtn = document.getElementById("filter-more-than-equal-1L");

// Update employees
let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let updateEmpUpdateBtn = document.getElementById("update-employee");

//Update Salary
let updateScoreEmpId = document.getElementById("update-score-employee-id");
let updateScoreEmpSalary = document.getElementById("update-score-employee-salary");
let updateScoreEmpSalaryButton = document.getElementById("update-score-employee");

//Employee Data
let employeesData = [];

window.addEventListener("load",async() => {
  fetchAndRenderUsers();
})


// Fetch & render users
function fetchAndRenderUsers() {
  fetch(`${baseServerURL}/employees`)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      mainSection.innerHTML = null;

      getCardList(data);
    });
}
// utilites
function getCardList(data) {
  const cardList = document.createElement("div");
  cardList.classList.add("card-list");

  data.forEach((item) => {
    let card = getCard(
      item.id,
      item.name,
      item.salary,
      `${baseServerURL}/${item.image}`
    );

    cardList.append(card);
  });
  //return cardList;
  mainSection.innerHTML="";
  mainSection.append(cardList);
}

function getCard(userId, fullName, email, imageUrl){

  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", userId);

  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");

  const img = document.createElement("img");
  img.src = imageUrl;
  img.setAttribute("alt", "employee");

  cardImage.append(img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-item");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = fullName;

  const cardDescription = document.createElement("div");
  cardDescription.classList.add("card-item");
  cardDescription.classList.add("card-description");
  cardDescription.classList.add("card-salary");
  cardDescription.innerText = email;

  const cardEdit = document.createElement("a");
  cardEdit.setAttribute("href", "#");
  cardEdit.setAttribute("data-id", userId);
  cardEdit.setAttribute("data-name", fullName);
  cardEdit.setAttribute("class", "card-item card-link");
  cardEdit.innerText = "EDIT";

  cardBody.append(cardTitle);
  cardBody.append(cardDescription);
  cardBody.append(cardEdit);

  card.append(cardImage);
  card.append(cardBody);
  // card.append(cardTitle);
  // card.append(cardDescription);
  // card.append(cardEdit);

  return card;
}


empCreateBtn.addEventListener("click",()=>{
  let empName = empNameInput.value;
  let empImage = empImgInput.value;
  let empDept = empDeptInput.value;
  let empSalary = empSalaryInput.value;
  //console.log(empName,empImage,empDept,empSalary);

  let newEmpobj = {
    name : empName,
    image : empImage,
    department : empDept,
    salary : empSalary
  }
  //console.log(newEmpobj);

  fetch(`${baseServerURL}/employees`,{
    method : 'POST',
    headers : {
      'Content-type' : 'application/json'
    },
    body : JSON.stringify(newEmpobj)
  })
  .then((res) => res.json())
  .then((data) => {
    fetchAndRenderUsers();
  })
})

updateEmpUpdateBtn.addEventListener("click",() => {

  let updateEmpId = updateEmpIdInput.value;
  let updateEmpName = updateEmpNameInput.value;
  let updateEmpImage = updateEmpImageInput.value;
  let updateEmpDept = updateEmpDeptInput.value;
  let updateEmpSalary = +updateEmpSalaryInput.value;

  let UpdateEmpobj = {
    id : updateEmpId,
    name : updateEmpName,
    image : updateEmpImage,
    department : updateEmpDept,
    salary : updateEmpSalary
  }
  console.log(UpdateEmpobj);

  fetch(`${baseServerURL}/employees/${updateEmpId}`, {
    method : 'PUT',
    headers : {
      'Content-type' : 'application/json'
    },
    body : JSON.stringify(UpdateEmpobj)
  })
    .then((res) => res.json())
    .then((data) => {
      fetchAndRenderUsers();
    })
})

updateScoreEmpSalaryButton.addEventListener("click",() => {

  let scoreEmpId = updateScoreEmpId.value;
  let scoreEmpSalary = +updateScoreEmpSalary.value;

  let newScoreEmpObj ={
    id : scoreEmpId,
    salary : scoreEmpSalary
  }
  console.log(newScoreEmpObj);
  fetch(`${baseServerURL}/employees/${scoreEmpId}`, {
    method : 'PATCH',
    headers : {
      'Content-type' : 'application/json'
    },
    body : JSON.stringify(newScoreEmpObj)
  })
    .then((res) => res.json())
    .then((data) => {
      fetchAndRenderUsers();
    })
})



sortAtoZBtn.addEventListener("click",async()=>{
  try {
    let res = await fetch(`${baseServerURL}/employees?_sort=salary&_order=asc`); 
    let data = await res.json()
    //fetchAndRenderUsers();
    console.log(data)
    getCardList(data);
    //getCardList(data)
  } catch (err) {
    console.log(err);
  }
})

sortZtoABtn.addEventListener("click",async()=>{
  try{
    let res = await fetch(`${baseServerURL}/employees?_sort=salary&_order=desc`)
    let data = await res.json()
    console.log(data)
    getCardList(data);
  }catch(err){
    console.log(err);
  }
})


filterLessThan1LBtn.addEventListener("click",async()=>{
  try{
    let res = await fetch(`${baseServerURL}/employees?salary_lte=100000`)
    let data = await res.json()
    console.log(data)
    getCardList(data);
  }catch(err){
    console.log(err);
  }
})
filterMoreThanEqualLBtn.addEventListener("click",async()=>{
  try{
    let res = await fetch(`${baseServerURL}/employees?salary_gte=100000`)
    let data = await res.json()
    console.log(data)
    getCardList(data);
  }catch(err){
    console.log(err);
  }
})




