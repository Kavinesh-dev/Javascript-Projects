const inputField = document.getElementById("urlInput");
const addBookmarkBtn = document.getElementById("addBookmark");
const deleteBookmarkBtn = document.getElementById("deleteAll");
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");

//Storing bookmarks in a list container
function storeBookMark(value) {
  if (value.checkValidity()) {
    alert("No enter the valid fidld");
  }
}
addBookmarkBtn.addEventListener("click", function () {
  storeBookMark(inputField);
});
