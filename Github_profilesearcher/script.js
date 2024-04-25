const userInput = document.getElementById("inputBox");
const mainBox = document.getElementById("main");
const h3 = document.querySelector("h3");
/**
 * SubProblems
 1. Fetch User Data
 2. Display user data
 3. Handle Errors
 4. User Input Handling (capturing the user input)
 */

//Fetching the data

function apiFetch(name) {
  fetch(`https://api.github.com/users/${name}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("User not found");
      }
      return res.json();
    })
    .then((data) => {
      mainBox.innerHTML = "";
      userData(data);
      console.log(data);
    })
    .catch((err) => {
      userError(err.message);
      console.error(err.message);
    });
}

//Function for for getting data and inserting the required html
function userData(user) {
  if (!user) return;
  const userContainer = document.createElement("div");
  userContainer.classList.add("card");
  userContainer.innerHTML = `
  <div>
        <img src="${user.avatar_url}" alt="null" class="avatar">
    </div>
    <div class="user-info">
        <h2>${user.login}</h2>
        <ul>
        <li>${user.followers} <strong>Followers</strong></li> 
        <li>${user.following} <strong>Following</strong></li> 
        <li>${user.public_repos} <strong>Repos</strong></li> 
        </ul>
        <div id="repos"></div>
    </div>
  `;
  h3.innerHTML = "User Found!";
  mainBox.appendChild(userContainer);
  createRepo(user.repos_url);
}

//Function for handling errors!
function userError(err) {
  if (err) {
    mainBox.innerHTML = "";
    h3.innerHTML = err;
  }
}

//Function for getting user input value
function getUser() {
  const inputValue = userInput.value;
  userInput.value = "";
  apiFetch(inputValue);
}

//Function for creating repositories;
function createRepo(reposUrl) {
  const repoElement = document.querySelector("#repos");
  fetch(reposUrl)
    .then((res) => res.json())
    .then((reposData) => {
      reposData.forEach((repo) => {
        const repoChild = document.createElement("a");
        repoChild.classList.add("repo");
        repoChild.href = repo.html_url;
        repoChild.target = "_blank";
        repoChild.innerHTML = repo.name;
        repoElement.appendChild(repoChild);
      });
    })
    .catch((err) => {
      console.error("Error fetching repositories data:", err.message);
    });
}

document.getElementById("user-button").addEventListener("click", function (e) {
  e.preventDefault();
  getUser();
});
