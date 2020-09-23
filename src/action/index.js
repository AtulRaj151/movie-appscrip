import { AdD_SEARCH_RESULT } from "./actionTypes";
// fetch the movie from api using any search query
export function handleMovieSearch(movie) {
  //   const url = `https://api.themoviedb.org/3/movie/550?api_key=c23b9b937869901715c463911583ed92&query=${movie}`;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=c23b9b937869901715c463911583ed92&query=${movie}`;
  //   here it returns dispact the movie into reducer
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        // console.log("movies = ", movie);

        //dispatch an action
        // dispatch ({ type:'AdD_SEARCH_RESULT,movie})
        dispatch(addMoviesSearchResult(movie.results));
      });
  };
}
export function addMoviesSearchResult(movie) {
  return {
    type: AdD_SEARCH_RESULT,
    movie,
  };
}
