const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const btn = document.querySelector("button");

//Common function for fetching data
function fetchApi(value) {
  fetch(value)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const result = data.results;
      let html = "";
      result.forEach((movie) => {
        const { title, vote_average, overview } = movie;
        const imgPath = `${IMGPATH}${movie.poster_path}`;
        html += `
          <div class="movie">
            <img src=${imgPath} alt=${title} />
            <div class="movie-info">
              <h3>${title}</h3>
              <span class="${calculateVote(
                vote_average
              )}">${vote_average}</span>
            </div>
            <div class="overview">
              <h3>${overview}</h3>
            </div>
          </div>
        `;
      });
      main.innerHTML = html;
    });
}

//Function for loading main page
function loadMainPage() {
  fetchApi(APIURL);
}

//Function for loading searched data
function searchMovie(e) {
  e.preventDefault();
  const userValue = search.value;
  fetchApi(`${SEARCHAPI}${userValue}`);
}

//Function for calculating vote
function calculateVote(vote) {
  return vote < 5 ? "red" : vote <= 7 && vote > 5 ? "orange" : "green";
}

//Function for implementing the search functionality
btn.addEventListener("click", function (e) {
  searchMovie(e);
  search.value = "";
});

//Loading the main page
document.addEventListener("DOMContentLoaded", function () {
  loadMainPage();
});
