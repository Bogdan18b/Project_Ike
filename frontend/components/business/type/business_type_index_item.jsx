import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

const BusinessTypeIndexItem = ({
  type,
  receiveTypeFromSearch,
  history,
  classType
}) => (
  <li
    className={`Header-navbar-item Header-navbar--${classType}-item`}
    onClick={() => {
      receiveTypeFromSearch(type);
      history.push(`/businesses/search?query=${type.name}`);
    }}
  >
    {type.name}
  </li>
);

BusinessTypeIndexItem.propTypes = {
  receiveTypeFromSearch: PropTypes.func,
  classType: PropTypes.string,
  history: PropTypes.obj,
  type: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    businessIds: PropTypes.arrayOf(PropTypes.number)
  })
};

export default withRouter(BusinessTypeIndexItem);
