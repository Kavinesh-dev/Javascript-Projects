const dobInput = document.getElementById("inputDob");
const currentInput = document.getElementById("cdate");
const calculateBtn = document.querySelector("button");
const ageContainer = document.getElementById("currentAge");

function getDOB(dob, current) {
  const dobDate = new Date(dob);
  const d1 = dobDate.getDate();
  const m1 = dobDate.getMonth() + 1;
  const y1 = dobDate.getFullYear();

  const currentDate = new Date(current);

  const d2 = currentDate.getDate();
  const m2 = currentDate.getMonth() + 1;
  const y2 = currentDate.getFullYear();

  //Place to store values
  let d3, m3, y3;

  //Logic to find year
  y3 = y2 - y1;

  //Logic to find month
  if (m2 >= m1) m3 = m2 - m1;
  else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDate(y1, m1) + d2 - d1;
  }
  ageContainer.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;
  currentInput.setAttribute(
    "value",
    `${y2.toString()}-${m2.toString().padStart(2, "0")}-${d2.toString()}`
  );
}

// function showCurDate(y2, m2, d2) {

// }

function getDate(year, month) {
  return new Date(year, month, 0).getDate();
}

function calculateAge() {
  const dobValue = dobInput.value;
  const curValue = currentInput.value;
  getDOB(dobValue, curValue);
}

// calculateBtn.addEventListener("click", calculateAge);
calculateAge();
