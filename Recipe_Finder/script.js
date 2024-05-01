const mainRecipe = document.getElementById("recipesList");
const searchInput = document.getElementById("searchInput");
const btnSubmit = document.querySelector("button");

const apiKey = "0c51b94df22441508e748875e3dbc636";
const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

//Functionality for fetching foods data
async function fetchFood(searchQuery) {
  try {
    const url = searchQuery ? `${apiUrl}&query=${searchQuery}` : apiUrl;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Something went wrong, Can't able to fetch data");
    }
    const data = await response.json();
    initialFoods(data.results);
    return data.results;
  } catch (err) {
    console.error(err.message);
    return [];
  }
}

//Function for displaying initial foods in the home page!
function initialFoods(foods) {
  mainRecipe.innerHTML = "";
  foods.forEach((curFood) => {
    const html = `
    <div class="recipe">
         <img src="${curFood.image}" alt="${curFood.title}" />
         <div class="recipe-content">
            <h2>${curFood.title}</h2>
            <a href="${curFood.image}">View Recipe</a>
          </div>
      </div>
    `;
    mainRecipe.insertAdjacentHTML("afterbegin", html);
  });
}

//Function for searching foods
async function getFoods() {
  const userValue = searchInput.value.trim();
  if (userValue) {
    const data = await fetchFood(userValue);
    initialFoods(data);
  }
}

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  getFoods();
  searchInput.value = "";
});

fetchFood(null);
