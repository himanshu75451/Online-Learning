// Write code for the Progress page here


let parent = document.querySelector("tbody");

let data = JSON.parse(localStorage.getItem("priority-list")) || [];

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
        let td6 = document.createElement("td");
        td6.textContent = "Add";
        td6.addEventListener("click",function(){
            let element = data.splice(index,1)
            let donelist = JSON.parse(localStorage.getItem("done-list")) || [];
            donelist.push(element[0])
            localStorage.setItem("done-list",JSON.stringify(donelist));
            localStorage.setItem("priority-list",JSON.stringify(data));
            appendata(data);
        });

        tr.append(td1,td2,td3,td4,td5,td6);
        parent.append(tr); 
    });
}