# WEB - Masai Fetch Vouchers

## Submission Instructions [Please note]

## Maximum Marks - 15

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the api call made - 1 marks.
 ✅ Student is able to loop through the data and append in the dom - 1 marks.
 ✅ Check the basic structure of the Voucher Cards - 2 marks.
 ✅ Check if the Filter Part is working or not  - 2 marks.
 ✅ Check the alert after wrong filter values - 1 marks.
 ✅ Buy Vouchers - 2 marks.
 ✅ Check the Vouchers Page - 1 marks.
 ✅ Check the total of Voucher Page - 1 marks.
 ✅ Apply Cupon Code  - 1 marks.
 ✅ Check the Delete part - 2 mark.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html(Home Page)
- my-voucher.html(My Voucher Page)
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
  1. index.html(Home Page)
  2. my-voucher.html(My Voucher Page)

#### index.html(Home Page):-

- On loading this page make an API request with fetch in this API end-point:-
  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-vouchers`.

- On Successful API request, you will get a response of voucher data which is in form of Array of Objects.

- Loop over the response data and create small cards and append them to div with an id:- `voucher-container`(given in Template).

- Show 4 cards per row with a display grid.

- Refer to this image for better understanding:-
  ![image](https://i.imgur.com/8336LFG.png)

- You should also implement Filter functionality.
  There is a div with an id:- `filter`. Inside that div there are 2 input tags and a button.

- You should be able to filter the vouchers by their price range using these two input tags.
- Example:-
  `let's say that the first input has value 100 and the second input has a value of 200 then only show the items that has price between 100-200 both values included.`

- Apply the filter onClick of the button.
  ![image](https://i.imgur.com/wDJW5vU.png)

- Each card should have a button with the text:- `Buy`.

- When clicked on this button that voucher data should be added to local storage with a key `vouchers`.

- If the user puts wrong filter values, like if the first input input tag's value is greater than the second input tags value then show an alert with this text:- `Please Enter a valid Range`.

#### my-voucher.html(My Voucher Page):-

- In this page get the data from the localStorage with key `vouchers`.

- Loop over the localStorage data and show them in smaller cards inside and div with id:- `voucher-container`(Given in the template).

- Each card should also have a button with text `Delete`. Clicking on that this particular card should be deleted both from DOM and from LocalStorage.

![img](https://i.imgur.com/cqBjMem.png)

- In the template we also have a span tag with id:- `order-total`.

- Here you have to show the total price of the order which is sum of price of all the Vouchers.

- You will also have a div with an id:- `cupon`. Inside that you will have an input tag and a button.

- If the input tag's value is `Masai30` then decrease the total price by 30%(Use the floor value).

```
Hint:-  Math.floor(total*0.7)
```

- Please take a look at the below image for better understanding:- ![image](https://i.imgur.com/h6PsdNc.png)

- If the input value is something other than `Masai30` it should not work.

- Also make sure this cupon code appying only works once.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
