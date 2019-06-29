import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

const BusinessTypeIndexItem = props => (
  <li
    onClick={() => {
      props.receiveTypeFromSearch(props.type);
      props.history.push(`/businesses/search?query=${props.type.name}`);
    }}
  >
    {props.type.name}
  </li>
);

BusinessTypeIndexItem.propTypes = {
  receiveTypeFromSearch: PropTypes.func,
  type: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    businessIds: PropTypes.arrayOf(PropTypes.number)
  })
};

export default withRouter(BusinessTypeIndexItem);
