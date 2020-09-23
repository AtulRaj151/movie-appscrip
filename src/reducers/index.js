import { combineReducers } from "redux";
import { movies } from "./movies";
import { search } from "./search";
// combine reducer
//  here movies is use to store the for future result
//  I have implemented here only search result
export default combineReducers({
  movies, //movies stores the list of movies when the pages loads or from database : TODO Later
  search,
});
