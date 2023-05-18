function studentData(firstName,lastName,age,marksArray,...hobbies) {

  let obj = {
    fullName : `${firstName} ${lastName}`,
    age : `${age}`,
    hobbies : [...hobbies],

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

export {
  studentData
}