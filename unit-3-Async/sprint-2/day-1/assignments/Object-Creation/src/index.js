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
// let p1 = new productFactory("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

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
// let p1 = new ProductConstructor("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

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

// let p1 = new Product("Notebook", 400);
// console.log(p1);
// p1.decreasePrice(100);
// p1.displayInfo();
// p1.increasePrice(200);
// p1.displayInfo();

export {productFactory, ProductConstructor, ProductClass}