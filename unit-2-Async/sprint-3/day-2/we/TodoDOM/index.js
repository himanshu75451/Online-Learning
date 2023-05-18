

let formInp = document.querySelector("form");
let tbodyInp = document.querySelector("tbody");

let MyData = [];
let taskInput = document.getElementById("task");
let prioritySelect = document.getElementById("priority");   
formInp.addEventListener("submit", function(event) {
    event.preventDefault(); // This line to stop forms from refreshing.

    // console.log("Task:-" , taskInput.value);
    // console.log("Priority:-", prioritySelect.value);

    let formData = {
        task: taskInput.value,
        priority: prioritySelect.value,
    };
    MyData.push(formData);
    // console.log(MyData);

    tbodyInp.innerHTML = "";

    for(let x=0; x<MyData.length; x++){
         let tr = document.createElement("tr")
         let taskEl= document.createElement("td");
         taskEl.innerText = MyData[x].task;

         let priorityEl = document.createElement("td");
         priorityEl.innerText = MyData[x].priority;

         tr.append(taskEl, priorityEl);
         tbodyInp.append(tr);
    }

});