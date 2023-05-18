# WEB - Masai Fetch Employees

## Submission Instructions [Please note]

## Maximum Marks - 15

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the api call made - 2 marks.
 ✅ Student is able to loop through the data and append in the dom - 2 marks.
 ✅ Check the css of the cards - 1 marks
 ✅ Check the basic structure of the Employee Cards - 2 marks.
 ✅ Check if the Filter Part is working or not  - 2 marks.
 ✅ Add To Employee of the month - 1 marks.
 ✅ Check the Employee of the month Page - 2 marks.
 ✅ Check the Delete part - 2 marks.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html(Home Page)
- employeeOfMonth.html(Employee of month Page)
- Please Ignore all the other files except for the above-mentioned files.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

### Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

### Problem Statement:-

- In this application, we have 2 different pages:-
  - index.html(Home Page)
- employeeOfMonth.html(Employee of month Page)

#### index.html(Home Page):-

- On loading this page make an API request with fetch in this API end-point:-
  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`.

- On Successful API request, you will get a response of employee data which is in form of Array of Objects.

- Loop over the response data and create small cards and append them to div with an id:- `employees` (given in Template).

- Show 4 cards per row with a display grid.

- Refer to this image for better understanding:-
  ![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-02-15/Screenshot%202023-02-15%20at%202.18.41%20PM_762408.png)

- The images have some issues so they might not work, So you can skip appending images in the divs. Even without images your testcases will pass, but make sure you append all the other text.

- You should also implement Filter functionality.
  There is a select with an id:- `filter`. If I select male from that select tag please make sure you show only those employees that have gender as male. Same for female.

![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-02-15/Screenshot%202023-02-15%20at%202.23.11%20PM_440152.png)

- Also when you select `Gender` from the select tag, please show all the employees.

- Each card should have a button with the text:- `Employee of Month`.

- When clicked on this button that voucher data should be added to local storage with a key `employees-ls`.

#### employeeOfMonth.html(Employee of month Page):-

- In this page get the data from the localStorage with key `employees-ls`.

- Loop over the localStorage data and show them in smaller cards inside and div with id:- `employees`(Given in the template).

- Each card should also have a button with text `Delete`. Clicking on that this particular card should be deleted both from DOM and from LocalStorage.

![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-02-15/Screenshot%202023-02-15%20at%202.37.00%20PM_865408.png)

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
