// add js part for index page here


let total_notes = document.getElementById("total_notes");// to add no of notes


//if notes having length!=0 then Append notes in this div
let notes_container = document.getElementById("notes_container");

// if notes having length= 0 
let h1 = document.createElement("h1");
h1.setAttribute("id", "add_notes_text");
h1.innerText = "Add notes / Result not found !";
notes_container.append(h1);

let notesData = JSON.parse(localStorage.getItem("notes")) || [];
document.getElementById("total_notes").innerText = notesData.length;


function DisplayData(notesData){
    notes_container.innerHTML = "";

    notesData.forEach((element) => {
        let card = document.createElement("div");
        let title = document.createElement("h3");
        title.setAttribute("id","title");

        let description = document.createElement("p");
        description.setAttribute("id","description");

        let edit = document.createElement("button");
        edit.setAttribute("id","edit_btn");

        let dlt = document.createElement("button");
        dlt.setAttribute("id","delete_btn");
        

        title.textContent = element.title;
        description.textContent = element.description;
        edit.textContent = "Edit";
        dlt.textContent = "Delete";

        dlt.addEventListener("click",()=>{
            notesData = notesData.filter((ele)=>{
               return ele.title !== element.title;
             })
             JSON.parse(localStorage.getItem("notes")) || [];
             DisplayData(notesData)
           });


           edit.addEventListener("click",()=>{
            notesData = notesData.filter((ele)=>{
               return obj = {};
             })
             JSON.parse(localStorage.getItem("notes")) || [];
             DisplayData(notesData)
           });


        card.append(title,description,edit,dlt);
        notes_container.append(card);
    });
}
DisplayData(notesData)



let Search = document.getElementById("Search");

    notesData = notesData.filter((ele) =>{
        if(ele.title.toUpperCase().includes(Search.value.toUpperCase()) === true){
            return true;
        }else{
            return false;
        }
    })
    DisplayData(notesData);
    console.log(notesData)








