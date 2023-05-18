function studentData(firstName,lastName,age,marksArray,...hobbies){

  let obj = {
    fullName : `${firstName} ${lastName}`,
    age,
    hobbies,

    getInfo: function(){
      return `${firstName} ${lastName}'s age is ${age}.`
    },

    getResult : function(){
      let sum = 0;

      for(let x=0; x<marksArray.length; x++){
        sum+=marksArray[x];
      }
      let avg = sum/marksArray.length;
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