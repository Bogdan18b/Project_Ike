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
  let classType =
    window.location.href.includes("businesses") ||
    window.location.href.includes("user_details")
      ? "business"
      : "home";
  return (
    <div className={`ike-search-div-${classType}`}>
      <span id="find">Find</span>
      <input
        onChange={displayResults}
        placeholder="avra, pet stores..."
        className="ike-search-input"
        type="text"
        value={searchTerm}
      />

      {props.businesses.length === 0 ? null : (
        <ul className={`ike-search-list-${classType}`}>
          {props.businesses.map(bus => {
            return (
              <li key={`list-${bus.id}`} onClick={() => handleClick(bus)}>
                {bus.name}
              </li>
            );
          })}
        </ul>
      )}
      <button
        className={`ike-search-button-${classType}`}
        onClick={() => searchButton()}
      >
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
