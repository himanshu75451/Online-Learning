// Write code related to Donators Page

let parent = document.querySelector("tbody");

let data = JSON.parse(localStorage.getItem("Helpers")) || [];

function filtertype(){
    let filtervalue = select.value;
    data = JSON.parse(localStorage.getItem("Helpers")) || [];
    let  type = data.filter(function(element,index){
        if(filtervalue === ""){
            return true;
        }
        return element.Donator === filtervalue;
    });
    DisplayData(type);
}
DisplayData(data);
function DisplayData(data){

    parent.innerHTML = null;
    data.forEach(function (ele, index){
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = ele.name;
        let td2 = document.createElement("td");
        td2.textContent = ele.phone;
        let td3 = document.createElement("td");
        td3.textContent = ele.email;
        let td4 = document.createElement("td");
        td4.textContent = ele.category;
        let td5 = document.createElement("td");
        td5.textContent = "Delete";

        td5.addEventListener("click",function(){
            data.splice(index, 1)
            localStorage.setItem("Helpers",JSON.stringify(data));
            DisplayData(data);

        });

        tr.append(td1,td2,td3,td4,td5);
        parent.append(tr);
    });
}
    let filterby = document.getElementById("filter");

    filterby.addEventListener("change", filterfunction);

    function filterfunction(){
        let filtervalue = filterby.value;
        data = JSON.parse(localStorage.getItem("Helpers")) || [];
        let  newdata = data.filter(function(element,index){
            if(filtervalue === ""){
                return true;
            }
            return element.category === filtervalue;
        });
        DisplayData(newdata);
    }
