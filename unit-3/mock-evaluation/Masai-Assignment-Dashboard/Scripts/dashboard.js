// Write code related to Dashboard page here


let data = JSON.parse(localStorage.getItem("assignments")) || [];
let assignmentData = document.getElementById("sprint-1");

appendDATA(data);
function appendDATA(data){

    assignmentData.innerHTML ="";
    data.forEach(function(element){
        if(element.course === "JS101"){

        }
        let card = document.createElement("div");
        let name = document.createElement("h2");
        let desc = document.createElement("p");
        let type = document.createElement("p");
        let course = document.createElement("p");
        let sprint = document.createElement("p");
        let schedule = document.createElement("p");
        let Delete = document.createElement("button");

            Delete.addEventListener("click",() => {
              data = data.filter((ele) =>{
                return ele.id !== element.id;
              })
              localStorage.setItem("assignments",JSON.stringify(data));
              appendDATA();
            })

            Delete.textContent = "Delete"
            name.textContent = element.name;
            desc.textContent = element.desc;
            type.textContent = `Course-Type : ${element.type}`;
            course.textContent = `Course : ${element.course}`;
            sprint.textContent = `Sprint : ${element.sprint}`;
            schedule.textContent = element.schedule;

            card.append(name,desc,type,course,schedule,sprint,Delete);
            assignmentData.append(card);

    });
}


let select = document.getElementById("course");

filter.addEventListener("change", filterfunction);

function filterfunction(){
    let filterData = select.value;
    data = JSON.parse(localStorage.getItem("assignments")) || [];
    let newData = data.filter(function(ele){
        if(filterData === ""){
            return true;
        }
        return ele.type === filterData;
    });
    appendDATA(newData);
}

