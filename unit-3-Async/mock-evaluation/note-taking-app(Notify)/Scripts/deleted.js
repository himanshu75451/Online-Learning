// add js part for deleted page here


let total_notes = document.getElementById("total_notes");// to add no of deleted notes

//if deleted notes having length !=0 then Append deleted_notes in this div
let notes_container = document.getElementById("notes_container");

// if deleted notes having length= 0 
let h1 = document.createElement("h1");
h1.setAttribute("id", "add_notes_text");
h1.innerText = "Add notes / Result not found !";
notes_container.append(h1);



document.getElementById("total_notes").innerText = notesData.length;

function DisplayData(notesData){
    notes_container.innerHTML = "";

    notesData.forEach((element) => {
        let card = document.createElement("div");
        let title = document.createElement("h3");
        let description = document.createElement("p");

        title.textContent = element.title;
        description.textContent = element.description;

        localStorage.setItem("notes",JSON.stringify(notedata));

        card.append(title,description,edit,dlt);
        notes_container.append(card);
    });
}
DisplayData(notesData)


