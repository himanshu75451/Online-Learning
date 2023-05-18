// you can write your js code here

let parent = document.querySelector("tbody");

let data = JSON.parse(localStorage.getItem("book-list")) || [];
document.getElementById("book-count").innerText = data.length;

appendata(data)
function appendata(data)
{
    parent.innerHTML = "";
    data.forEach(function(element,index){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = element.name;
        let td2 = document.createElement("td");
        td2.textContent = element.authorName;
        let td3 = document.createElement("td");
        td3.textContent = element.desc;
        let td4 = document.createElement("td");
        td4.textContent = element.date;
        let td5 = document.createElement("td");
        td5.textContent = element.category;
        let td6 = document.createElement("td");
        td6.textContent = element.price;
        let td7 = document.createElement("td");
        td7.textContent = "Buy";
        let td8 = document.createElement("td");
        td8.textContent = "Bookmark";

        td7.addEventListener("click",function(){
            let element = data.splice(index,1)
            let prioritylist = JSON.parse(localStorage.getItem("book-list")) || [];
            prioritylist.push(element[0])
            localStorage.setItem("book-list",JSON.stringify(prioritylist));
            localStorage.setItem("buy-list",JSON.stringify(data));
            appendata(data);
        });

        td8.addEventListener("click",function(){
            let element = data.splice(index,1)
            let prioritylist = JSON.parse(localStorage.getItem("book-list")) || [];
            prioritylist.push(element[0])
            localStorage.setItem("book-list",JSON.stringify(prioritylist));
            localStorage.setItem("bookmark-list",JSON.stringify(data));
            appendata(data);
        });
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        parent.append(tr);
        document.getElementById("book-count").innerText = data.length; 
    });
}

let select = document.querySelector("select");

select.addEventListener("change",selectfunction);

function selectfunction()
{
    let filterValue = select.value;
    data = JSON.parse(localStorage.getItem("book-list")) || [];
    let data1 = data.filter(function(element, index){
        if(filterValue === "")
        {
            return true;
        }
        return element.category === filterValue;
    });
    appendata(data1);
    document.getElementById("book-count").innerText = data1.length;
}