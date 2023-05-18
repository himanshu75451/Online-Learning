// Write code related to dashboard page here

let parent = document.querySelector("tbody");

let data = JSON.parse(localStorage.getItem("menu")) || [];

appendata(data)
function appendata(data)
{
    parent.innerHTML = "";
    data.forEach(function (element, index){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = element.name;
        let td2 = document.createElement("td");
        td2.textContent = element.desc;
        let td3 = document.createElement("td");
        td3.textContent = element.type;
        let td4 = document.createElement("td");
        td4.textContent = element.category;
        let td5 = document.createElement("td");
        td5.textContent = element.price;
        let td6 = document.createElement("td");
        td6.textContent = "Add";
        td6.addEventListener("click", function(){
            let element = data.splice(index, 1)
            let favmenu = JSON.parse(localStorage.getItem("fav-menu")) || [];
            favmenu.push(element[0])
            localStorage.setItem("fav-menu",JSON.stringify(favmenu));
            localStorage.setItem("menu",JSON.stringify(data));
            appendata(data);
        });
        tr.append(td1,td2,td3,td4,td5,td6);
        parent.append(tr);
    }); 
}

let select = document.querySelector("select");

filter.addEventListener("change", filterfunction);

function filterfunction()
{
    let filterValue = select.value;
    data = JSON.parse(localStorage.getItem("menu")) || [];
    let newdata = data.filter(function(element,index){
        if(filterValue === "")
        {
            return true;
        }
        return element.type === filterValue;
    });
    appendata(newdata); 
}