/*
## Problem 1.
*/

function productFactory(name, price) {

    let obj = {};

    obj.name = name;
    obj.price = price;

    obj.increasePrice = function(amount){
        return obj.price += amount;
    }

    obj.decreasePrice = function(amount){
        return obj.price -= amount;
    }

    obj.displayInfo = function() {
        console.log(`${name} costs Rs.${price}`);
        return `${obj.name} costs Rs.${obj.price}`;
    }
    return obj;
}

// example invocation
let p1 = productFactory("Notebook", 400);
console.log(p1);
p1.decreasePrice(100);
p1.displayInfo();
p1.increasePrice(200);
p1.displayInfo();

/*
## Problem 2.
*/
function ProductConstructor(name, price) {

    this.name = name;
    this.price = price;

    this.increasePrice = function(amount){
        return this.price += amount;
    }

    this.decreasePrice = function(amount){
        return this.price -= amount;
    }

    this.displayInfo = function() {
        console.log(`${name} costs Rs.${price}`);
        return `${this.name} costs Rs.${this.price}`;
    }

}

// example invocation
let p = new ProductConstructor("Notebook", 400);
console.log(p);
p.decreasePrice(100);
p.displayInfo();
p.increasePrice(200);
p.displayInfo();

/*
## Problem 3.
*/
class ProductClass {
    constructor(name, price){
        this.name = name;
        this.price = price;

        this.increasePrice = function(amount){
            return this.price += amount;
        }

        this.decreasePrice = function(amount){
            return this.price -= amount;
        }

        this.displayInfo = function() {
            console.log(`${name} costs Rs.${price}`);
            return `${this.name} costs Rs.${this.price}`;
        }
    }

}

let p2 = new ProductClass("Notebook", 400);
console.log(p2);
p2.decreasePrice(100);
p2.displayInfo();
p2.increasePrice(200);
p2.displayInfo();

export {productFactory, ProductConstructor, ProductClass}