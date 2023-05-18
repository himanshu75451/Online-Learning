import { parse } from "dotenv";
import { baseServerURL } from "../templateConstants.js"; // Make no Changes here

let apiCall = "http://127.0.0.1:9090";

let appending = document.querySelector("tbody");
let token = JSON.parse(localStorage.getItem("auth"));

let pagination = document.getElementById("pagination");


stockData();

async function stockData(pageNo){
    try{
        let res = await fetch(`${apiCall}/stocks?_page=${pageNo}&_limit=5`,{
            method : "GET",
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            },
        })
        let total = res.headers.get("X-Total-count");
        let page = Math.ceil(total/10);
        pagination.innerHTML = "";
    
        for(let x=1; x<=page; x++){
          pagination.append(createaBtn(x));
        }
        let data = await res.json();
        //console.log(data);
        DisplayData(data);
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
      stockData(id)
    })
  
    return btn;
  }

function DisplayData(data){
    // console.log(data)
    appending.innerHTML = "";
    data.forEach((element) => {
        let tr = document.createElement("tr");
        let CamName = document.createElement("td");
        let category = document.createElement("td");
        let sector = document.createElement("td");
        let price = document.createElement("td");
        let quantity = document.createElement("td");
        let addDate = document.createElement("td");
        let button =document.createElement("button");
        button.innerText = "Sell"
        button.addEventListener("click",() =>{
            sellProduct(element.id);
        })
        CamName.innerText = element.name;
        category.innerText = element.category;
        sector.innerText = element.sector;
        price.innerText = element.price;
        quantity.innerText = element.quantity;
        addDate.innerText = element.addDate;

        tr.append(CamName,sector,category,price,quantity,addDate,button)
        appending.append(tr);
    });
}

