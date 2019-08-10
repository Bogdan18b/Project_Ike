import React from "react";
import { withRouter } from "react-router";
import Icons from "../../icons/icons";
import PropTypes from "prop-types";

const CategoryItem = ({
  type,
  receiveTypeFromSearch,
  history,
  classType,
  index
}) => (
  <li
    className={`Header-navbar-item Header-navbar--${classType}-item`}
    onClick={() => {
      receiveTypeFromSearch(type);
      history.push(`/businesses/search?query=${type.name}`);
    }}
  >
    {Icons[index]}
    <p>{type.name}</p>
  </li>
);

CategoryItem.propTypes = {
  receiveTypeFromSearch: PropTypes.func,
  classType: PropTypes.string,
  history: PropTypes.func,
  type: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    businessIds: PropTypes.arrayOf(PropTypes.number)
  }),
  index: PropTypes.number
};

export default withRouter(CategoryItem);
