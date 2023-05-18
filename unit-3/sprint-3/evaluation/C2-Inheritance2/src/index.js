
// Problem 1. 
class Account {
  constructor(id, balance){

    this.id = id;
    this.balance = balance;

    this.deposit = function(amount){
      return balance += amount;
    }
    this.withdraw = function(amount){
      return balance -= amount;
    }
    this.getBalance = function(){
      return balance;
    }
  }
}

let ans = new Account(2,2000);
console.log(ans);
console.log(ans.deposit());
console.log(ans.withdraw());
console.log(ans.getBalance());


class SavingsAccount extends Account {
  constructor(id, balance,interestRate){

    super(id,balance);
    this.interestRate = interestRate;
  }
  setInterestRate(interestRate){
    this.interestRate =  interestRate;
  }
  addInterest(){
    const interest = this.balance *(this.interestRate/100)
    this.balance += interest;
  }
  withdraw(amount){
    if(amount <= this.balance){
      this.balance -= amount;
    }
  }

 }

let ans2 = new SavingsAccount(5,2000,10);
console.log(ans2);
console.log(ans2.addInterest());
console.log(ans2.setInterestRate());

class CheckingAccount extends Account {
  constructor(id, balance,overdraftLimit){
    super(id,balance);
    this.overdraftLimit = overdraftLimit;
  }
  setOverdraftLimit(overdraftLimit){
    this.overdraftLimit = overdraftLimit
  }
  withdraw(amount){
    let funds = this.balance + this.overdraftLimit; 
    if(amount <= this.balance){
      this.balance -= amount;
    }
  }
 }
let ans3 = new CheckingAccount(5,2000,10);
console.log(ans3);
console.log(ans3.withdraw());
console.log(ans3.setOverdraftLimit());

// Problem 2.

function Animal(name, type) {

  this.name = name;
  this.type = type;

  Animal.prototype.makeSound = function(){
    return "Animal is making a sound";
  }
}

function Mammal(name, type, hasFur) {

  this.name = name;
  this.type = type;
  this.hasFur = hasFur;

  Object.setPrototypeOf(Mammal.prototype, Animal.prototype)

  Mammal.prototype.makeSound = function(){
    return "Mammal is making a sound";
  }

}


function Dog(name, type, hasFur, breed) {

  this.name = name;
  this.type = type;
  this.hasFur = hasFur;
  this.breed = breed;
  
  Object.setPrototypeOf(Dog.prototype, Mammal.prototype);

  Dog.prototype.makeSound = function(){
    return "Woof Woof!";
  }
}

let d = new Dog("Fido", "dog", true, "Labrador");
console.log(d.makeSound()); // "Woof Woof!"

let m = new Mammal("Fluffy", "mammal", true);
console.log(m.makeSound()); // "Mammal is making a sound"

let a = new Animal("Charlie", "animal");
console.log(a.makeSound()); // "Animal is making a sound"

// Problem 3.
class Character {
  constructor(name,health,attackPower){

    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }
  attack(character){
    this.attackPower -= character;
  }
  isAlive(){
    return this.health > 0;
  }
}

class Warrior extends Character {
  constructor(name, health, attackPower, weapon, armor) {

    super(name, health, attackPower);
    this.weapon = weapon;
    this.armor = armor;
  }
  attack(character){
    if (this.weapon === "sword") {
      this.attackPower + 10;
    }
    super.attack(character);
  }
  defend() {
    this.health += 10;
  }
}

let character = new Character("John", 100, 20);
console.log(character);
console.log(character.attack()); // 100
console.log(character.isAlive());

// let char = new Warrior("Alice", 100, 10, "sword", 20);
// console.log(char.attack())
// console.log(char.defend());
// let enemy = new Character("Enemy", 100, 20);
// let warrior = new Warrior("John", 100, 20, "sword", 30);

// character.attack(enemy);
// character.attack(enemy);
// console.log(enemy.health); // 60
// warrior.attack(enemy);
// console.log(enemy.health); // 30

// console.log(warrior.health); // 100
// warrior.defend();
// console.log(warrior.health); // 110

// console.log(enemy.isAlive()); // true
// enemy.health = 0;
// console.log(enemy.isAlive()); // false

// Problem 4.

class Person {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  introduce(){
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`)
  }
}

class Student extends Person {
  constructor(name,age, grade){
    super(name,age);
    this.grade = grade;
  }
  study(){
    //console.log(`${this.name} is teaching ${this.subject}`)
    console.log(`${this.name} is studying.`)
  }
  introduce(){
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old, and I'm in grade ${this.grade}.`)
  }

}

class Teacher extends Person {
  constructor(name,age,subject){
    super(name,age);
    this.subject = subject;
    this.students = [];
  }
  addStudent(student){
    this.students.push(student);
    console.log(`Added ${student.name} to ${this.subject} class.`);
  }
  teach(){
    console.log(` ${this.name}is teaching ${this.subject}.`)
  }

}

class MathTeacher extends Teacher {
  constructor(name,age,){
    super(name,age, 'Math');
  }
  assignHomework(){
    console.log(`${this.name} assigned homework to their ${this.subject} class.`)
  }
}
class HighSchoolMathTeacher extends MathTeacher {
  constructor(name,age,department){
    super(name,age);
    this.department = department;
  }
  introduce(){
    console.log(`Hi, my name is ${this.name}, I'm a ${this.department} ${this.subject} teacher and I'm ${this.age} years old.`)
  }
  averageStudentAge(){
    let totalAge = 0;
    for(let student of this.students){
      totalAge += student.age
    }
    const averageAge = Math.round(totalAge / this.students.length);
    console.log(`The average age of my ${this.subject} students is ${this.averageAge}.`)
  } 
}
export { 
  Dog, Mammal, Animal, 
  Character, Warrior,
  Account, SavingsAccount, CheckingAccount,
  Person, Student, Teacher, MathTeacher, HighSchoolMathTeacher
}
