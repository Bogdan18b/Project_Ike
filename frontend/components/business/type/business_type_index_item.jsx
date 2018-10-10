import React from 'react';
import { withRouter } from 'react-router';

class BusinessTypeIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let y = (this.props.y);
    let x = -28 + (-28 * y);
    return (
      <li onClick={() => {
          this.props.receiveTypeFromSearch(this.props.type);
          this.props.history.push(`/businesses/search?query=${this.props.type.name}`);
        }}
        style={{backgroundPositionY: `${x}px`}}
        key={`type-${this.props.type.id}`}>{this.props.type.name}</li>
    );
  }
}

export default withRouter(BusinessTypeIndexItem);
