import React from 'react';
import { withRouter } from 'react-router';

class BusinessTypeIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li onClick={() => {
          this.props.receiveTypeFromSearch(this.props.type);
          this.props.history.push(`/businesses/search?query=${this.props.type.name}`);
        }}
        key={`type-${this.props.type.id}`}>{this.props.type.name}</li>
    );
  }
}

export default withRouter(BusinessTypeIndexItem);
