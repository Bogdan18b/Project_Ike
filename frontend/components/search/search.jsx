import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.displayResults = this.displayResults.bind(this);
  }

  displayResults() {
    return (e) => {
      this.setState({ name: e.target.value});
    };
  }

  componentDidUpdate() {
    debugger
    if (this.state.name.length > 0) {
      return this.props.receiveSearchResults(this.state.name);
    }
  }

  render() {
    return (
      <div>
        <input onChange={this.displayResults()}
          type="text" value={this.state.name}
        />

        <button>SEARCH</button>

        {this.props.businesses.length === 0 ? <h1>nothing</h1> : <h1>{this.props.businesses.map(bus => {
          return (
            <p key={bus.id} onClick={() => this.props.history.push(`/businesses/${bus.id}`)}>{bus.name}</p>
          )
        })}</h1>
        }

      </div>
    );
  }
}

export default Search;
