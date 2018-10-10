import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const BusinessTypeIndexItem = props => {
    let y = (props.y);
    let x = -28 + (-28 * y);
    return (
      <li onClick={() => {
          props.receiveTypeFromSearch(props.type);
          props.history.push(`/businesses/search?query=${props.type.name}`);
        }}
        style={{backgroundPositionY: `${x}px`}}
        key={`type-${props.type.id}`}>{props.type.name}</li>
    );
}

BusinessTypeIndexItem.propTypes = {
  y: PropTypes.number,
  receiveTypeFromSearch: PropTypes.func,
  type: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    businessIds: PropTypes.arrayOf(PropTypes.number)
  })
};

export default withRouter(BusinessTypeIndexItem);
