function Product(name, brand, price, description, sold){
  // Complete the constructor function
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.description = description;
  this.sold = false;

}
Product.prototype.changePrice = function(amount){
  if(this.price = amount){
    return amount;
  };
}
Product.prototype.toggleStatus = function(){
  return this.sold = !this.sold;
}

let ans = new Product("himanshu","boat",2000,"headphone");
console.log(ans);
ans.changePrice();
ans.toggleStatus();


// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
