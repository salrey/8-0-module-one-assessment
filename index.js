/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  //Default Value and Output 
  const movieTitles = []
  
  if (Array.isArray(movies) && movies.length !== 0) {
    for (let movie of movies) {
      movieTitles.push(movie.title)
    }
  }

  return movieTitles
}


//Check
// console.log(getAllMovieTitles())

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */

function getHighestMetascore(movies) {
  //Default value and output 
  let highestMetascore = 0
  
  if (Array.isArray(movies) && movies.length !== 0) {
    let current = movies[0]
    for (let movie of movies) {
      movie.metascore > current.metascore ? current = movie : current;
      highestMetascore = current.metascore
    }
  }

  return Number(highestMetascore)
}


//Check
// console.log(getHighestMetascore())

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */

//------------HELPER FUNCTIONS-------------
function roundNum(num) {
  return Number(Number(num).toFixed(2))
}

function getAverageIMDBRating(movies) {
  //Default Value and Output 
  let averageIMDBRating = 0
  let sumTotal = 0

  if (Array.isArray(movies) && movies.length !== 0) {
    const total = movies.length 
    for (let movie of movies) {
      sumTotal += Number(movie.imdbRating)
    }
    averageIMDBRating = sumTotal/total 
  } 

  return roundNum(averageIMDBRating)

}


// Check 
// console.log(getAverageIMDBRating())

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  //Default value and output 
  const ratedCategories = {}
  
  if (Array.isArray(movies) && movies.length !== 0) {
    for (let movie of movies) {
      ratedCategories[movie.rated] = ratedCategories[movie.rated] || 0
      ratedCategories[movie.rated] += 1
    }
  }

  return ratedCategories
}


//Check 
// console.log(countByRating())

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  //Default value and output
  let movieById = null
  
  if (Array.isArray(movies) && movies.length !== 0) {
    for (let movie of movies) {
      if (movie.imdbID === id) { 
        movieById = movie
        break;
      }
    }
  }

  return movieById 
}

//Check
// console.log(findById())

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
//------------HELPER FUNCTIONS-------------

function titleCase (genre) {
  return genre[0].toUpperCase() + genre.slice(1).toLowerCase()
}

function filterByGenre(movies, genre) {
  // Default Value and output 
  let movieByGenre = []
  
  if (Array.isArray(movies) && movies.length !== 0) {
    movieByGenre = movies.filter(movie => movie.genre.includes(titleCase(genre)))  
  }
  return movieByGenre
}

// Check 
// console.log(filterByGenre())

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  //Default Value and output 
  const moviesAtOrBeforeYear = []


  if (Array.isArray(movies) && movies.length !== 0) {
    for (let movie of movies) {
      movie.released.slice(-5) <= year ? moviesAtOrBeforeYear.push(movie) : moviesAtOrBeforeYear
    }
  }
  return moviesAtOrBeforeYear
}


//Check
// console.log(getAllMoviesReleasedAtOrBeforeYear())

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
//------------HELPER FUNCTIONS-------------
function toNumber(string) {
  const num = string.slice(1).split(",")
  return Number(num.join(""))
}

function getBiggestBoxOfficeMovie(movies) {
  //Default value and output 
  let biggestBoxOfficeMovie = null
  
  if (Array.isArray(movies) && movies.length !== 0) {
    let current = movies[0]
    for (let movie of movies) {
      toNumber(movie.boxOffice) > toNumber(current.boxOffice) ? current = movie : current
      biggestBoxOfficeMovie = current.title
    }  
  }
  return biggestBoxOfficeMovie
}

//check 
// console.log(getBiggestBoxOfficeMovie() )

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
