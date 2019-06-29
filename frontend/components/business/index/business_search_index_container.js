import React, { useEffect } from "react";
import { connect } from "react-redux";
import BusinessIndex from "./business_index";
import { requestAllBusinesses } from "../../../actions/business_actions";
import PropTypes from "prop-types";

const mapStateToProps = ({ entities, type = {}, searchResults }) => ({
  businesses: entities.businesses,
  types: Object.values(entities.businessTypes),
  businessType: type,
  searchResults
});

const mapDispatchToProps = dispatch => ({
  requestAllBusinesses: () => dispatch(requestAllBusinesses())
});

const BusinessSearchIndex = props => {
  useEffect(() => {
    props.requestAllBusinesses();
  }, [props.match.params.businesses]);
  if (Object.values(props.businesses).length === 0) {
    return null;
  }
  let businesses;

  if (Object.values(props.businessType).length === 0) {
    businesses = props.searchResults.businessIds.map(
      id => (id = props.businesses[id])
    );
  } else {
    let businessesOfType = props.businessType.businessIds.map(
      id => props.businesses[id]
    );
    businesses = businessesOfType;
  }
  return <BusinessIndex businesses={businesses} />;
};

class BxusinessSearchIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllBusinesses();
  }

  componentWillReceiveProps(newProps) {
    if (
      this.props.match.params.businesses !== newProps.match.params.businesses
    ) {
      this.props.requestAllBusinesses();
    }
  }

  render() {
    if (Object.values(this.props.businesses).length === 0) {
      return null;
    }
    let businesses;

    if (Object.values(this.props.businessType).length === 0) {
      businesses = this.props.searchResults.businessIds.map(
        id => (id = this.props.businesses[id])
      );
    } else {
      let businessesOfType = this.props.businessType.businessIds.map(
        id => this.props.businesses[id]
      );
      businesses = businessesOfType;
    }
    return <BusinessIndex businesses={businesses} />;
  }
}

BusinessSearchIndex.propTypes = {
  requestAllBusinesses: PropTypes.func,
  businesses: PropTypes.object,
  businessType: PropTypes.object,
  searchResults: PropTypes.shape({
    businessIds: PropTypes.arrayOf(PropTypes.number),
    ReviewBusinessIds: PropTypes.arrayOf(PropTypes.number),
    typeIds: PropTypes.arrayOf(PropTypes.number)
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessSearchIndex);
