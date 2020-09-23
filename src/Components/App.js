import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";

class App extends React.Component {
  // console.log("Store", search);

  render() {
    //  destructure the search value
    const { search } = this.props.search;
    // console.log("search is here ", search);
    return (
      <div className="App">
        {/* add component navbar */}
        <Navbar />
        {/*  add component Moviecard from search result */}
        {search.length !== 0 ? (
          search.map((movie, index) => (
            <MovieCard
              movie={movie}
              key={`movies-${index}`}
              dispatch={this.props.dispatch}
            />
          ))
        ) : (
          <h1>Movies not Found</h1>
        )}
      </div>
    );
  }
}
//  map state to props so that we can connect this component to store
function mapStateToProps(state) {
  return {
    movie: state.movie,
    search: state.search,
  };
}

//  wrapper function that takes states and return the wrapper components
export default connect(mapStateToProps)(App);
