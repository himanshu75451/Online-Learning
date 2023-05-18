// Write code related to Done page here

let parent = document.querySelector("tbody");

let data = JSON.parse(localStorage.getItem("done-list")) || [];

appendata(data)
function appendata(data)
{
    parent.innerHTML = "";
    data.forEach(function(element,index){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = element.name;
        let td2 = document.createElement("td");
        td2.textContent = element.desc;
        let td3 = document.createElement("td");
        td3.textContent = element.start;
        let td4 = document.createElement("td");
        td4.textContent = element.end;
        let td5 = document.createElement("td");
        td5.textContent = element.priority;

        tr.append(td1,td2,td3,td4,td5);
        parent.append(tr); 
    });
}