function Product(name, brand, price, description) {
  // Complete the constructor function
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.description = description;
  this.sold = false;
}

Product.prototype.changePrice = function(amt){
  if(this.price = amt){
    return amt;
  }
}

Product.prototype.toggleStatus = function(){
  return this.sold = !this.sold;
}

let ans = new Product('Hims','iphone',50000,'Mobile phone');
ans.changePrice();
ans.toggleStatus();
// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
