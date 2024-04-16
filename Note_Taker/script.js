const addBtn = document.querySelector("#addBtn");
const mainDiv = document.querySelector("#main");

function saveNote() {
  const title = document.querySelectorAll(".note .title");
  const content = document.querySelectorAll(".note .content");

  const data = [];

  content.forEach((element, index) => {
    const contentVal = element.value;
    const titleVal = title[index].value;
    if (contentVal.trim() !== "") {
      data.push({ titleVal, contentVal });
    }
  });

  const titleData = data.map((val) => val.titleVal);
  localStorage.setItem("title", JSON.stringify(titleData));

  const contentData = data.map((val) => val.contentVal);
  localStorage.setItem("content", JSON.stringify(contentData));
}

function addNote(e, text = "", title = "") {
  //   e.preventDefault();

  const noteDiv = document.createElement("div");

  noteDiv.classList.add("note");
  noteDiv.innerHTML = `
	<div class="icons">
		<i class="save fas fa-save"
			style="color:red">
		</i>
		<i class="trash fas fa-trash"
			style="color:yellow">
		</i>
	</div>
	<div class="title-div">
		<textarea class="title"
			placeholder="Write the title ...">${title}
		</textarea>
	</div>
	<textarea class="content"
		placeholder="Note down your thoughts ...">${text}
	</textarea>
	`;
  //   console.log(document.querySelector(".note .content"));

  function deleteItem() {
    noteDiv.remove();
    saveNote();
  }

  function saveItem() {
    saveNote();
  }
  const deleteBtn = noteDiv.querySelector(".trash");
  const saveBtn = noteDiv.querySelector(".save");

  saveBtn.addEventListener("click", saveItem);
  deleteBtn.addEventListener("click", deleteItem);
  mainDiv.appendChild(noteDiv);
  saveNote();
}
// function getNote() {
//   const  = localStorage.getItem("Item");

// }
addBtn.addEventListener("click", addNote.bind());
// getNote();
