import React from 'react';
import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestAllBusinesses, requestAllBusinessTypes } from '../../../actions/business_actions';

const mapStateToProps = ({ entities }) => {
  return {
    businesses: entities.businesses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllBusinesses: () => {
      return dispatch(requestAllBusinesses());
    }
  };
};

class BusinessAllIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllBusinesses();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.businesses !== newProps.match.params.businesses) {
      this.props.requestAllBusinesses();
    }
  }

  render() {
    let businesses;
    if (this.props.location.search === "") {
      businesses = Object.values(this.props.businesses);
    } else {
      businesses = Object.values(this.props.businesses).filter(business => business.tags.includes(this.props.location.search.slice(6)));
    }

    if (businesses.length === 0) {
      return <p></p>;
    }
    return (
      <BusinessIndex businesses={businesses}/>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessAllIndex);
