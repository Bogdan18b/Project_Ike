import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.displayResults = this.displayResults.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(id) {
      return () =>
      this.props.history.push(`/businesses/${id}`);
    }

  render() {
    return (
      <div className={this.props.classNameMain}>
        <span id="find">Find</span>
        <input onChange={this.displayResults()}
          placeholder="tacos, burgers"
          className="ike-search-input"
          type="text" value={this.state.name}
        />

      <span id="near">Near</span>
      <input id="search-map" type="text" placeholder="Manhattan, NY" />

        {this.props.businesses.length === 0 ? <h1></h1> : <ul className={this.props.classNameList}>{this.props.businesses.map(bus => {
          return (
            <li key={bus.id} onClick={this.handleClick(bus.id)}>{bus.name}</li>
          )
        })}</ul>
        }

        <button id="search-button">SEARCH</button>

      </div>
    );
  }
}

export default Search;
