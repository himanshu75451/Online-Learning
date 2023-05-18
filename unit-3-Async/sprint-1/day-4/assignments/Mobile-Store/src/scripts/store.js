
let data = JSON.parse(localStorage.getItem("mobile_data"));
let Mobile_Data = document.getElementById("mobile_list");
let lh=document.getElementById("lh")


function append(data) {
  data.forEach(element => {
    let name = document.createElement("h2")
    let brand = document.createElement("h3")
    let price = document.createElement("h4")
    let image = document.createElement("img")
    let remove = document.createElement("button")

    //img.setAttribute("src",element.img);
    remove.textContent= "Remove";
    image.src = element.img;
    name.textContent = element.name;
    brand.textContent = element.brand;
    price.textContent = element.price;

    Mobile_Data.append(image,name,brand,price,remove);
  });
}
append(data);

function remove(index){
  // logic to remove the mobiles data on selected index
  
}

// lh.addEventListener("click",()=>{
//  let display= sortLowToHigh(data);
//  append(display)

// });
// function sortLowToHigh(data){
  
//   data.sort((a,b)=>{
//     if(a.price<b.price){
//       return a
//     }
//   })
  
// }

function sortHighToLow() {
  // sort the list of mobiles in descending order of the price
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    append,
    remove,
    sortLowToHigh,
    sortHighToLow,
  };
}
