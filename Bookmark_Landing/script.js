const inputField = document.getElementById("urlInput");
const addBookmarkBtn = document.getElementById("addBookmark");
const deleteBookmarkBtn = document.getElementById("deleteAll");
const ulList = document.querySelector("#bookmarkList");

// //Storing bookmarks in a list container
function storeBookMark() {
  const value = inputField.value;
  var res = value.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  if (!res) {
    alert("Please enter a valid URL!");
    inputField.value = "";
    return;
  }
  const list = document.createElement("li");
  list.insertAdjacentHTML(
    "beforeend",
    `
    <a href="${value}">${value}</a>
    <div>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
    `
  );
  list.classList.add("bookmark-item");
  ulList.appendChild(list);
  inputField.value = "";

  //Deleting the list
  const deleteBtn = document.querySelector(".delete");
  deleteBtn.addEventListener("click", function () {
    deleteList.parentNode.parentNode.remove();
  });

  //Editing the list
  const editBtn = document.querySelector(".edit");
  editBtn.addEventListener("click", function () {
    const editedValue = window.prompt("How you want to edit?");
    list.innerHTML = `<a href="${editedValue}">${editedValue}</a>`;
  });
}

//Function for deleting the whole list container;
deleteBookmarkBtn.addEventListener("click", function () {
  document.querySelectorAll("li").forEach((element) => {
    element.remove();
  });
});

addBookmarkBtn.addEventListener("click", function () {
  storeBookMark();
});
