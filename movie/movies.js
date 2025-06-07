

const favourite = document.querySelector("#favourite-movies");
const movieContainer = document.querySelector("#movie-list");



(async function fetchAllMovies() {
  try {
    let url =
      "https://api.themoviedb.org/3/movie/popular?include_adult=false&language=en-US&page=1&api_key=1ef33d0988889fd4f6c374211d20e38c";

  const allMovies = await fetch(url);
  const movies = await allMovies.json();
  const movieResults = movies.results;
    
  // DISPLAY SINGLE MOVIE

    favourite.innerHTML = `
    <div>
    <img src="https://image.tmdb.org/t/p/w185${movieResults[3].poster_path}?api_key=1ef33d0988889fd4f6c374211d20e38c" alt="${movieResults[3].title}">
    <h3>${movieResults[3].title}</h3>
    </div>
    <div>
    <img src="https://image.tmdb.org/t/p/w185${movieResults[7].poster_path}?api_key=1ef33d0988889fd4f6c374211d20e38c" alt="${movieResults[7].title}">
    <h3>${movieResults[7].title}</h3>
    </div>
    `


    // DISPLAY ALL MOVIES
    movieContainer.innerHTML = movieResults.map(movie => {
      return `<div class="movie">
      <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}?api_key=1ef33d0988889fd4f6c374211d20e38c" alt ="${movie.title}">
      <h3>${movie.title}</h3>;
      </div>
      `
    })

  //   for (let i = 0; i < movieResults.length; i++) {
  //     let newDiv = document.createElement("div");
  //     let newImg = document.createElement("img");
  //     newImg.src = `https://image.tmdb.org/t/p/w185${movieResults[i].poster_path}?api_key=1ef33d0988889fd4f6c374211d20e38c`;
  //     newImg.alt = movieResults[i].title;

  //     let newText = document.createElement("h3");

  //     newText.textContent = movieResults[i].title;

  //     newDiv.appendChild(newImg);
  //     newDiv.appendChild(newText);

  //     movieContainer.appendChild(newDiv);
  //   }


  } catch (err) {
    console.log(err);
  }
})();

// immediately invoked functions IIFE
