const dobInput = document.getElementById("inputDob");
const currentInput = document.getElementById("cdate");
const calculateBtn = document.querySelector("button");

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
}

function getDate(year, month) {
  return new Date(year, month, 0).getDate();
}

getDOB("06/08/2004", "04/23/2024");
