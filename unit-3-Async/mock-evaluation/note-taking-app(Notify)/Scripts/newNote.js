// add js part for newNote page here


let total_notes = document.getElementById("total_notes");// to add no of notes


let notedata = JSON.parse(localStorage.getItem("notes")) || [];

let addNotes = document.getElementById("add_note");
let title = document.getElementById("new_title");
let description = document.getElementById("new_description");


addNotes.addEventListener("click",(e) =>{
    e.preventDefault();


    let obj = {
        title : title.value,
        description : description.value,
    };

    notedata.push(obj);
    localStorage.setItem("notes",JSON.stringify(notedata));
})


