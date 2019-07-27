import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

const Search = props => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchTerm.length > 0
      ? props.receiveSearchResults(searchTerm)
      : props.clearSearchResults();
  }, [searchTerm]);

  const displayResults = e => setSearchTerm(e.target.value);
  const handleClick = item => {
    if (item.address === undefined) {
      props.receiveTypeFromSearch(item);
      props.history.push(`/businesses/search?query=${item.name}`);
    } else {
      props.history.push(`/businesses/${item.id}`);
    }
    props.clearSearchResults();
  };
  const searchButton = () => {
    props.history.push(`/businesses/search?query=${searchTerm}`);
    props.clearSearchResults();
  };
  return (
    <div className="Header-search">
      <span className="Header-search-findSpan">Find</span>
      <input
        onChange={displayResults}
        placeholder="avra, pet stores..."
        className="Header-search-input"
        type="text"
        value={searchTerm}
      />

      {props.businesses.length === 0 ? null : (
        <ul className="Header-search-list">
          {props.businesses.map(bus => {
            return (
              <li key={`list-${bus.id}`} onClick={() => handleClick(bus)}>
                {bus.name}
              </li>
            );
          })}
        </ul>
      )}
      <button className={`Header-search-button`} onClick={() => searchButton()}>
        <i className="fas fa-search" />
      </button>
    </div>
  );
};

Search.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object),
  clearSearchResults: PropTypes.func,
  receiveSearchResults: PropTypes.func,
  receiveTypeFromSearch: PropTypes.func
};

export default withRouter(Search);
