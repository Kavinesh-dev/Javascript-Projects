const expenseBtn = document.querySelector("button");
const expenseList = document.getElementById("expense-list");
const total = document.getElementById("total-amount");
let expenses = [];

const renderExpense = function () {
  expenseList.innerHTML = "";
  let totalAmount = 0;

  expenses.forEach(function (expense, index) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = ` 
        <td>${expense.name}</td> 
        <td>$${expense.amount}</td> 
        <td class="delete-btn" data-id="${index}">Delete</td> 
      `;
    expenseList.appendChild(newRow);
    totalAmount += Number(expense.amount);
  });

  total.textContent = totalAmount.toFixed(2);
};

renderExpense();

const addExpense = function (e) {
  e.preventDefault();
  const expenseName = document.getElementById("expense-name");
  const expenseAmt = document.getElementById("expense-amount");
  const expense = { name: expenseName.value, amount: expenseAmt.value };

  if (expenseName === "" || isNaN(expenseAmt)) {
    alert("Please enter some items!");
    return;
  }
  expenses.push(expense);

  renderExpense();

  setStorage();

  expenseName.value = "";
  expenseAmt.value = "";
};
const setStorage = function () {
  localStorage.setItem("expenses", JSON.stringify(expenses));
};
const getItem = function () {
  expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  renderExpense();
};
getItem();

expenseBtn.addEventListener("click", addExpense);
expenseList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const expenseIndex = parseInt(e.target.getAttribute("data-id"));
    expenses.splice(expenseIndex, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpense();
  }
});
