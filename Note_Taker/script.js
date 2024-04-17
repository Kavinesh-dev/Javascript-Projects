/**
 * What am i trying to achieve?
     To create a div that accepts title and notes.

  Dividing the problem into sub-problem:
     1. select the required elements and store it in the variable
     2. create a function to add div that has the main content like title, notes, delete button, save button.
     3. create a function for delete button that deletes existing div.
     4. create a function for save button that accepts the saveNote function 
     5. create a function for saving the created div and its contents in the localstorage.
        select the content div and select the title div and its value also.
     6. create a function for getting the saved item from the localstorage.
     create a addEventListener for Addnote, DeleteBtn, and SaveBtn.

*/
const addBtn = document.getElementById("addBtn");
const mainDiv = document.getElementById("main");

function saveNote() {
  const title = document.querySelectorAll(".note .title");
  const content = document.querySelectorAll(".note .content");
  const data = [];
  content.forEach((element, index) => {
    const elItem = element.value.trim();
    const titleItem = title[index].value.trim();
    if (elItem.trim() !== "") {
      data.push({ titleItem, elItem });
    }
  });

  const saveData = JSON.stringify(data);
  localStorage.setItem("notes", saveData);
}

function getData() {
  const parsedData = JSON.parse(localStorage.getItem("notes"));
  if (parsedData && parsedData[0]) {
    parsedData.forEach((_, index) => {
      const loadedContent = parsedData[index]?.elItem;
      const loadedTitle = parsedData[index]?.titleItem;
      addNote(loadedContent, loadedTitle);
    });
  }
}

function addNote(text = "", title = "") {
  // console.log(title);
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");
  noteDiv.insertAdjacentHTML(
    "afterbegin",
    `
	<div class="icons">
		<i class="save fas fa-save" style="color:red"></i>
		<i class="trash fas fa-trash" style="color:yellow"></i>
	</div>
	<div class="title-div">
		<textarea class="title" placeholder="Write the title ...">${title}</textarea>
	</div>
	<textarea class="content" placeholder="Note down your thoughts ...">${text}</textarea>
	`
  );
  mainDiv.appendChild(noteDiv);

  function deleteItem() {
    noteDiv.remove();
    saveNote();
  }

  const saveBtn = noteDiv.querySelector(".save");
  const deleteBtn = noteDiv.querySelector(".trash");

  function saveItem() {
    saveNote();
  }

  saveBtn.addEventListener("click", saveItem);
  deleteBtn.addEventListener("click", deleteItem);
}

addBtn.addEventListener("click", function () {
  addNote();
});

getData();
