import React, { useEffect } from "react";
import { connect } from "react-redux";
import BusinessIndex from "./business_index";
import { requestAllBusinesses } from "../../../actions/business_actions";
import PropTypes from "prop-types";

const mapStateToProps = ({ entities }) => ({
  businesses: entities.businesses
});

const mapDispatchToProps = dispatch => ({
  requestAllBusinesses: () => dispatch(requestAllBusinesses())
});

const BusinessAllIndex = props => {
  useEffect(() => {
    props.requestAllBusinesses();
  }, [props.match.params.businesses]);
  let businesses;
  if (props.location.search === "") {
    businesses = Object.values(props.businesses);
  } else {
    businesses = Object.values(props.businesses).filter(business =>
      business.tags.includes(props.location.search.slice(6))
    );
  }

  return <BusinessIndex businesses={businesses} />;
};

BusinessAllIndex.propTypes = {
  businesses: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessAllIndex);
