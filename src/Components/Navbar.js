import React from "react";
import { handleMovieSearch } from "../action/index";
import { connect } from "react-redux";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
    };
  }
  //  a handle change function so the each time when you type we will get result
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
    //  dispact the action

    this.props.dispatch(handleMovieSearch(e.target.value));
  };
  //    if we click on search button then it return the required result
  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };
  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <input placeholder="Search movies...." onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

function mapStatetoProps({ search }) {
  return {
    search,
  };
}
export default connect(mapStatetoProps)(Navbar);
