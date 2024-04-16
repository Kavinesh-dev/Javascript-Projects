const ulEl = document.querySelector("ul");
const inputBox = document.querySelector("input");
const btnAdd = document.querySelector("button");
const containerList = document.getElementById("list-container");

btnAdd.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("You have to write something");
  } else {
    const elList = document.createElement("li");
    const span = document.createElement("span");

    elList.innerHTML += inputBox.value;
    elList.classList.add("list");
    elList.appendChild(span);
    ulEl.appendChild(elList);
    span.innerHTML = "❌";

    elList.addEventListener("click", function () {
      elList.classList.toggle("checked");
      setStorage();
    });
    span.addEventListener("click", function () {
      elList.remove();
      setStorage();
    });
  }
  setStorage();
  inputBox.value = "";
});
const setStorage = function () {
  localStorage.setItem("data", containerList.innerHTML);
};
const getItem = function () {
  containerList.innerHTML = localStorage.getItem("data");
};
getItem();
