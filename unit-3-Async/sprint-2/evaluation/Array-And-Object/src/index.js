// Problem 1. `createProduct` factory function (3 Marks)
// you are not allowed to use the this keyword in the createProduct function.
function createProduct(product_name,brand,reviews,price,rating) {

  let obj = {};

  obj.product_name = product_name;
  obj.brand = brand;
  obj.reviews = reviews;
  obj.price = price;
  obj.rating = rating;

  obj.getPrice = function(){
    return price;
  }
  obj.increasePrice = function(amount){
    return price += amount;
  }

  obj.decreasePrice = function(amount){
    return price -= amount;
  }

  obj.isExpensive = function(){
    if(price >= 1000){
      return true;
    }else{
      return false;
    }
  }

  return obj;
}

// // Example invocation
let product1 = createProduct("Black Pure Cotton Formal Shirt","Peter England Elite", 224, 1799, "4.3")
console.log(product1)
console.log(product1.getPrice()) // 1799
console.log(product1.increasePrice(301)) //2100
console.log(product1.isExpensive()) // true
console.log(product1.decreasePrice(1200)) // 900
console.log(product1.isExpensive()) // false

// Problem 2. `CreateProduct` constructor function (1 Marks)
function CreateProduct(product_name,brand,reviews,price,rating) {

  this.product_name = product_name;
  this.brand = brand;
  this.reviews = reviews;
  this.price = price;
  this.rating = rating;

  this.getPrice = function(){
    return price;
  }
  this.increasePrice = function(amount){
    return price += amount;
  }

  this.decreasePrice = function(amount){
    return price -= amount;
  }

  this.isExpensive = function(){
    if(price >= 1000){
      return true;
    }else{
      return false;
    }
  }

}

// //Example invocation
let product2 = new CreateProduct("Black Pure Cotton Formal Shirt","Peter England Elite", 224, 1799, "4.3")
console.log(product2)
console.log(product2.getPrice()) // 1799
console.log(product2.increasePrice(301)) //2100
console.log(product2.isExpensive()) // true
console.log(product2.decreasePrice(1200)) // 900
console.log(product2.isExpensive()) // false

//Problem 3. `Product` class (1 Marks)
class Product {
  constructor(product_name,brand,reviews,price,rating) {

    this.product_name = product_name;
    this.brand = brand;
    this.reviews = reviews;
    this.price = price;
    this.rating = rating;
  
    this.getPrice = function(){
      return price;
    }
    this.increasePrice = function(amount){
      return price += amount;
    }
  
    this.decreasePrice = function(amount){
      return price -= amount;
    }
  
    this.isExpensive = function(){
      if(price >= 1000){
        return true;
      }else{
        return false;
      }
    }
  }  
}

// //Example invocation
 let product3 = new Product("Black Pure Cotton Formal Shirt","Peter England Elite", 224, 1799, "4.3")
 console.log(product3)
 console.log(product3.getPrice()) // 1799
 console.log(product3.increasePrice(301)) //2100
 console.log(product3.isExpensive()) // true
 console.log(product3.decreasePrice(1200)) // 900
 console.log(product3.isExpensive()) // false

//Problem 4.  2 Marks
  let arr = [ 
    { name: "student1", 
      subjects: [{Maths:60},{History:30},{English:"50"},{Biology:"40"}], 
      total:""
    },
    { name: "student2", 
      subjects: [{Maths:"35"},{History:"66"},{English:"20"},{Biology:"30"}],
      total:""
    } 
  ];

function findTotal(arr) {
  arr.forEach((student) =>{
    let total = 0;
    student.subjects.forEach((subject) => {
      total += +(Object.values(subject)[0]);
    });
    student.total = total;
  });
  return arr;
}
console.log(findTotal(arr));
// [
//   {
//   name: "student1",
//   subjects:[{Maths:60},{History:30},{English:"50"},{Biology:"40"}],
//   total:180
//   },
//   {
//   name: "student2",
//   subjects:[{Maths:"35"},{History:"66"},{English:"20"},{Biology:"30"}],
//   total:151
//   }
// ]

// Problem 5. 4 Marks

let categoriesDirectory = {
  1: "ASUS",
  2: "HP",
  3: "Dell",
};
let MadeInArea = [
  { id: 1, name: "India" },
  { id: 2, name: "USA" },
];
let MadeInAreaDirectory = MadeInArea.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

let exampleInputArray = [
  {
    idProduct: "8TH GEN CORE I7",
    strProduct: "ASUS ZENBOOK FLIP 13 UX362FA LAPTOP",
    Category: 1,
    Area: 2,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "8th Gen",
    strDetail3: "8 MB",
    strDetail4: "Quad Core",
    strDetail5: "8565U",
    strDetail6: "Intel",
    strDetail7: "Core i7",
    strDetail8: "1.8 GHz",
    strDetail9: "4.6 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },

  {
    idProduct: "8TH GEN CORE I5",
    strProduct: "HP ELITEBook X360 (4SU65UT) LAPTOP",
    Category: 2,
    Area: 1,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "8th Gen",
    strDetail3: "6 MB",
    strDetail4: "Quad Core",
    strDetail5: "8250U",
    strDetail6: "Intel",
    strDetail7: "Core i5",
    strDetail8: "1.6 GHz",
    strDetail9: "3.4 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
  {
    idProduct: "7TH GEN PENTIUM GOLD",
    strProduct: "DELL INSPIRON 15 3583 LAPTOP",
    Category: 3,
    Area: 1,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "7th Gen",
    strDetail3: "2 MB",
    strDetail4: "Dual Core",
    strDetail5: "5405U",
    strDetail6: "Intel",
    strDetail7: "Pentium Gold",
    strDetail8: "1.6 GHz",
    strDetail9: "2.3 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
];
let exampleInputArray2 = [
  {
    idProduct: "9TH GEN CORE I7",
    strProduct: "ASUS ROG STRIX SCAR III G531GU-ES016T GAMING LAPTOP",
    Category: 1,
    Area: 1,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "",
    strSpecification7: "",
    strSpecification8: "",
    strSpecification9: "",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "9th Gen",
    strDetail3: "12 MB",
    strDetail4: "Hexa Core",
    strDetail5: "9750H",
    strDetail6: "",
    strDetail7: "",
    strDetail8: "",
    strDetail9: "",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
  {
    idProduct: "10TH GEN CORE I3",
    strProduct: "HP PAVILION X360 14-DH1008TU LAPTOP",
    Category: 2,
    Area: 2,
    strSpecification1: "",
    strSpecification2: "",
    strSpecification3: "",
    strSpecification4: "",
    strSpecification5: "",
    strSpecification6: "",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Cache",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "",
    strDetail2: "",
    strDetail3: "",
    strDetail4: "",
    strDetail5: "",
    strDetail6: "",
    strDetail7: "Core i3",
    strDetail8: "2.1 GHz",
    strDetail9: "4 MB",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
  {
    idProduct: "9TH GEN CORE I5",
    strProduct: "DELL INSPIRON G3 3590 GAMING LAPTOP",
    Category: 3,
    Area: 1,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "",
    strSpecification4: "",
    strSpecification5: "",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel Core i5",
    strDetail2: "9th Gen",
    strDetail3: "",
    strDetail4: "",
    strDetail5: "",
    strDetail6: "NVIDIA",
    strDetail7: "Core i5",
    strDetail8: "2.4 GHz",
    strDetail9: "4.1 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
];

function massageArray(inputArray) {}
//Example Invocation
//let obj2 = massageArray(exampleInputArray);
//console.log(JSON.stringify(obj2));

export {
  createProduct,
  CreateProduct,
  Product,
  massageArray,
  exampleInputArray,
  findTotal,
};
