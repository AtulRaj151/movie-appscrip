export function handleMovieSearch(movie) {
  const url = `https://api.themoviedb.org/${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);

        //dispatch an action
        // dispatch ({ type:'AdD_SEARCH_RESULT,movie})
        dispatch(addMoviesSearchResult(movie));
      });
  };
}
export function addMoviesSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
