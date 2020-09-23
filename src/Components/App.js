import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";

class App extends React.Component {
  // console.log("Store", search);

  render() {
    const { search } = this.props.search;
    // console.log("search is here ", search);
    return (
      <div className="App">
        <Navbar />

        {search.map((movie, index) => (
          <MovieCard
            movie={movie}
            key={`movies-${index}`}
            dispatch={this.props.dispatch}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movie,
    search: state.search,
  };
}

export default connect(mapStateToProps)(App);
