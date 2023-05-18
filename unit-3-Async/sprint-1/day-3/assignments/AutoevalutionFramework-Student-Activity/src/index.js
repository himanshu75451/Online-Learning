
// Problem 1. 5 Marks

function studentData(firstName, lastName, age, marksArray, ...rest) {
  // Your solution here.
  let obj = {
    fullName : `${firstName} ${lastName}`,
    age,
    hobbies : [...rest],

    getInfo: function(){
      return `${firstName} ${lastName}'s age is ${age}.`
    },

    getResult : function(){
      
      let marks = marksArray.reduce((acc,item)=>{
        return acc+item;
      },0)
      let avg = marks/marksArray.length;

      if(avg<50){
        return "Result: FAIL"
      }
      else{
        return "Result: PASS"
      }
    }
  };
  return obj;
}

// Example invocation
// let obj1 = studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');
// console.log(JSON.stringify(obj1));
// console.log(obj1.getInfo());




export { studentData}
