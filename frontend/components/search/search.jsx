import React from 'react';
import { Redirect, withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.displayResults = this.displayResults.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchButton = this.searchButton.bind(this);
  }

  displayResults() {
    return (e) => {
      this.setState({ name: e.target.value}, () => {
        if (this.state.name.length > 0) {
          return this.props.receiveSearchResults(this.state.name);
        } else {
            return this.props.clearSearchResults();
        }
      });
    };
  }

  handleClick(item) {
    // debugger
    return () => {
      if (item.address === undefined) {
        this.props.receiveTypeFromSearch(item);
        this.props.history.push(`/businesses/search?query=${item.name}`);
      } else {
        this.props.history.push(`/businesses/${item.id}`);
      }
      this.props.clearSearchResults();
    };
  }

  searchButton() {
    this.props.history.push(`/businesses/search?query=${this.state.name}`);
    this.props.clearSearchResults();
  }

  render() {
    return (
      <div className={this.props.classNameMain}>
        <span id="find">Find</span>
        <input onChange={this.displayResults()}
          placeholder="avra, pet stores..."
          className="ike-search-input"
          type="text" value={this.state.name}
        />


      {this.props.businesses.length === 0 ? <h1></h1> : <ul className={this.props.classNameList}>{this.props.businesses.map(bus => {
          return (
            <li key={`list-${bus.id}`} onClick={this.handleClick(bus)}>{bus.name}</li>
          )
        })}</ul>
        }

        <button className={this.props.classNameButton}
            onClick={() => this.searchButton()}><i className="fas fa-search"></i>
        </button>

      </div>
    );
  }
}

export default withRouter(Search);

// <span id="near">Near</span>
// <input id="search-map" type="text" placeholder="Manhattan, NY" />
