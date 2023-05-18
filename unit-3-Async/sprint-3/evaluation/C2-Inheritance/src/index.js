//**********************Problem 1 */

function Weather(location,temperature,conditions) {
  // create Weather Constructor function
  // Define a display() method for the Weather
  this.location = location;
  this.temperature =temperature;
  this.conditions = conditions;

  this.display = function(){
    return `current weather conditions for location ${this.location} having temperature ${this.temperature} degrees and weather condition is ${this.conditions}`;
  }
}

Object.setPrototypeOf(Sunny.prototype, Weather.prototype);


function Sunny(location,temperature) {
  // Define Sunny Constructor function that inherits from Weather
  // Set up prototype inheritance for Sunny
  // Define a display() method for the Sunny
  this.location = location;
  this.temperature =temperature;
  this.conditions = "sunny";

  this.display = function(){
    return `we are at location ${this.location} temperature here is ${this.temperature} degrees weather condition is ${this.conditions}`;
  }
}

Object.setPrototypeOf(Rainy.prototype, Weather.prototype);

function Rainy(location,temperature,precipitation) {
  // create Rainy Constructor function that inherits from Weather
  // Set up prototype inheritance for Rainy
  // Define a display() method for the Rainy
  this.location = location;
  this.temperature = temperature;
  this.precipitation = precipitation;
  this.conditions = "rainy";

  this.display = function(){
    return `we are at location ${this.location} temperature here is ${this.temperature} degrees weather condition is ${this.conditions} and precipitation is ${this.precipitation}`;
  }
}

//**********************Problem 2 */

class Athlete {
  // The "Athlete" class should have a constructor that takes in the athlete's name, age, and sport as parameters
  // Define a train() method for the Athlete object
  // Define a compete() method for the Athlete object
  constructor (name,age,sport){
    this.name = name;
    this.age = age;
    this.sport = sport;
  }
  train(){
    return `athlete ${this.name} is training for ${this.sport}`;
  }
  compete(){
    return `athlete ${this.name} is competing for ${this.sport}`;
  }
}

class Runner extends Athlete {
  // The "Runner" class should inherit from the Athlete class
  //Runner class should override the train and compete that inherited from the "Athlete" class
  constructor(name,age,sport,distance){
    super(name,age,sport);
    this.distance = distance;
  }
  train(){
    return `athlete ${this.name} is training for distance of ${this.distance}m`
  }
  compete(){
    return `athlete ${this.name} is competing for distance of ${this.distance}m`
  }
}

class Swimmer extends Athlete {
  // The "Swimmer" class should inherit from the Athlete class
  //Swimmer class should override the train and compete that inherited from the "Athlete" class
  constructor(name,age,sport,SwimmingStyle){
    super(name,age,sport);
    this.SwimmingStyle = SwimmingStyle;
  }
  train(){
    return `athlete ${this.name} is training for swimming with style of ${this.SwimmingStyle}`
  }
  compete(){
    return `athlete ${this.name} is competing for swimming with style of ${this.SwimmingStyle}`
  }

}

//**********************Problem 3 */

class Person {
  // Create a class called Person name ,age ,gender
  // Define a displayInfo() method for the Person object
  constructor (name,age,gender){
    this.name  = name;
    this.age = age;
    this.gender = gender;
  }
  displayInfo(){
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  }
}

class Student extends Person{
  // The Student class should inherit from the Person class with properties name ,age ,gender , StudentID,Major,Courses
  // Define a displayInfo() method for the Student object
  // Define a enroll() method for the Student object
  // Define a drop() method for the Student object
  constructor (name,age,gender,StudentID,Major){
    super(name,age,gender);
    this.StudentID = StudentID;
    this.Major = Major;
    this.Courses = [];
  }
  displayInfo(){
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Student ID: ${this.StudentID}, Major: ${this.Major}, Courses: ${this.Courses}`;
  }
  enroll(course){
    return this.Courses.push(course);
  }
  drop(course){
    return this.Courses.pop(course);
  }
}

class Professor extends Person{
  // The Professor class should inherit from the Person class with properties name ,age ,gender , professorID  and department
  // Define a displayInfo() method for the Professor object
  // Define a teach() method for the Professor object
  // Define a grade() method for the Professor object
  constructor(name,age,gender,professorID,department){
    super(name,age,gender);
    this.professorID = professorID;
    this.department = department;
  }
  displayInfo(){
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Professor ID: ${this.professorID}, Department: ${this.department}`;
  }
  teach(course){
    this.course = course;
    return `${this.name} is teaching ${this.course}`;
  }
  grade(student, course, grade){
    this.student = student;
    this.course = course;
    this.grade = grade;
    return `${this.name} is grading ${this.student}'s performance in ${this.course} with the grade ${this.grade}`
  }
}

const student = new Student("ram", 20, "male", "972166", "ETC");
console.log(student.displayInfo())
//return: "Name: ram, Age: 20, Gender: male, Student ID: 972166, Major: ETC, Courses: "

student.enroll("Java");
student.enroll("JavaScript");
console.log(student.displayInfo());
//return: "Name: ram, Age: 20, Gender: male, Student ID: 972166, Major: ETC, Courses: Java,JavaScript"

student.drop("Java");
console.log(student.displayInfo());
//return: "Name: ram, Age: 20, Gender: male, Student ID: 972166, Major: ETC, Courses: JavaScript"


//**********************Problem 4 */

// Generic Media class
class Media {
   // use constructor to take input
  // Getter for mediaType
  get mediaType() {}

  // Setter for mediaType
  set mediaType(value) {}
}

// Book class inheriting from Media
class Book {
  // use constructor to take input

  // Getters and setters for Book properties
  get title() {}
  set title(value) {}

  // ... Repeat for other properties (author, publicationYear, availableCopies)

  // Static method to compare publication years of two books
  static comparePublicationYears() {}
}

// User class
class User {
  // use constructor to take input
  // Getters and setters for User properties
  get firstName() {}
  set firstName(value) {}
  // ... Repeat for other properties (lastName)
  // Method to borrow a book
  borrowBook() {}
  // Method to return a book
  returnBook() {}

  // Static method to get the full name of a user
}




// Example usage media

// const media = new Media("Broadcasting");
// console.log(media.mediaType) // Broadcasting 
// console.log(media.mediaType = "") // throw Error: Media type must be a non-empty string.

//example for Book 
// const book = new Book("spiderman") 
// console.log(book.title) //spiderman
// console.log(book.title="") // throw Error :title must be a non-empty string.

//Example usage for static method : comparePublicationYears
// const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 5);
// const book2 = new Book("1984", "George Orwell", 1949, 10);
// console.log(
//   "Comparing publication years:",
//   Book.comparePublicationYears(book1, book2)
// ); // 1



// Example usage User
// Example usage for User firstName property
// const user = new User("Alice", "Smith");
// console.log(user.firstName); // Alice
// console.log(user.firstName="") // throw Error :firstName must be a non-empty string.


// Example usage for : borrowBook and returnBook methods
// const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 5);
// const book2 = new Book("1984", "George Orwell", 1949, 10);

// const user1 = new User("Alice", "Smith");
// user1.borrowBook(book1);
// console.log("Book1 availableCopies:", book1.availableCopies); // 4

// user1.borrowBook(book2);
// console.log("Book 2 availableCopies:", book2.availableCopies); // 9

// user1.returnBook(book1);
// console.log("Book 1 availableCopies after return:", book1.availableCopies); // 5


// Example usage for static method : fullName
// const user = new User("Alice", "Smith");
// console.log(User.fullName(user)); // Alice Smith

// !Note : Do not remove the following export statement
module.exports = {
  Weather,
  Sunny,
  Rainy,
  Person,
  Student,
  Professor,
  Athlete,
  Runner,
  Swimmer,
  Media,
  Book,
  User,
};
