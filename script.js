document.getElementById("note-title").value = sessionStorage.getItem("title");
document.getElementById("note-content").value = sessionStorage.getItem("content");


function saveNote() {
    sessionStorage.setItem("title", document.getElementById("note-title").value);
    sessionStorage.setItem("content", document.getElementById("note-content").value);
    console.log(document.getElementById("note-title").value);
    savedMessage();
}


function savedMessage() {
    let note_saved = document.getElementById("note-saved");
    note_saved.style.display = "block";
    note_saved.style.display = "flex";
    note_saved.style.justifyContent = "space-between";
}
