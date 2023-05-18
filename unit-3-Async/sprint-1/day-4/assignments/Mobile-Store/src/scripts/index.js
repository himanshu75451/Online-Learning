let form = document.querySelector("form");
let name = document.getElementById("mobile_name");
let brand = document.getElementById("mobile_brand");
let price = document.getElementById("mobile_price");
let image = document.getElementById("mobile_image");
let arr = JSON.parse(localStorage.getItem("mobile_data")) || [];

form.addEventListener("submit", (e) =>{
  e.preventDefault()
  getInputData();
});

function getInputData(){
  addData(name.value, brand.value, price.value, image.value)
  }

function addData(name, brand, price, image){
  let obj = {
    name : name,
    brand : brand,
    price : price,
    image : image,
  }
  arr.push(obj);
  localStorage.setItem("mobile_data",JSON.stringify(arr));
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    addData,
  };
}