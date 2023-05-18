## Installation
```
npm install --engine-strict
```
- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

## Test 
```
npm t
```

## Test (Watch mode)
```
npm t -- --watchAll
```

## file structure
most of your work would happen in `src/index.js` file.

## Maximum marks - 6
- ✅ Able to submit (1 mark)
- ✅ object returned by studentData to have properties (1 mark)
- ✅ object returned by studentData to have methods (1 mark)
- ✅ getInfo method to return proper value (1 mark)
- ✅ getResult method to return proper value (2 marks)

## Problem statement

The function `studentData() {}` should return an **object**.

Parameters of studentData:
```
firstName: takes in a string value
lastName: takes in a string value
age: takes in a number value
marksArray: takes in an array of marks
After `marksArray` all the arguments passed to the students data will be considered as the students hobbies.
```

Example function invocation: 
```
studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');
```

In the above invocation, [50,60,70] is the students marks and 
the students hobbies are Singing, Coding & Meditating.

The **object** that the function returns must have the following three properties: 

```
- `fullName` : in the example invocation above, the fullName's value should be 'Vivek Agarwal'
- `age` : age is equal to the third argument of age
- `hobbies` : it is a array of hobbies. in the above invocation it would be ['Singing', 'Coding', 'Meditating']
```

The **object** that the function returns must have the following two *methods*:

`getInfo`: In the invocation example above, it method would return the string value "Vivek Agarwal's age is 38."

`getResult`: 
If the total marks of the student is less than 150, it is expected to return 'Result: FAIL'
If the total marks of the student is more than or equal to 150, it is expected to return 'Result: PASS'
in the invocation example above, it would return 'Result: PASS'



### General guidelines
- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
