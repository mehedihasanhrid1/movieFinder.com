let movies = [];

// Fetch data from data.json
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        movies = data;
        displayMovies(movies); // Display all movies initially
    })
    .catch(error => console.error("Error loading data:", error));

const movieContainer = document.getElementById("movieContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");

// Function to display movies
function displayMovies(movieList) {
    movieContainer.innerHTML = "";
    if (movieList.length === 0) {
        movieContainer.innerHTML = `<p class="no-result">No movies found.</p>`;
        return;
    }

    movieList.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");
        card.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title}">
      <h3>${movie.Title}</h3>
      <p class="genre">${movie.Genre}</p>
      <p class="description">${movie.Description}</p>
    `;
        movieContainer.appendChild(card);
    });
}

// Search only by movie title when button is clicked
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();
    const filteredMovies = movies.filter(movie =>
        movie.Title.toLowerCase().includes(query)
    );
    displayMovies(filteredMovies);
});

// Clear search input
clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    displayMovies(movies);
});

// Optional: toggle menu for small screens
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
