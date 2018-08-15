import React from 'react';
import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestAllBusinesses, requestAllBusinessTypes } from '../../actions/business_actions';

const mapStateToProps = ({ entities }) => {
  debugger
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
    let businesses = Object.values(this.props.businesses);
    if (businesses.length === 0) {
      return <p></p>;
    }
    return (
      <BusinessIndex businesses={businesses}/>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessAllIndex);
// import React from 'react';
// import { connect } from 'react-redux';
// import BusinessIndex from './business_index';
// import { requestAllBusinesses, requestAllBusinessTypes } from '../../actions/business_actions';
// const mapStateToProps = ({ entities, type = {} }) => {
//   debugger
//   return {
//     businesses: entities.businesses,
//     types: Object.values(entities.businessTypes),
//     businessType: type
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     requestAllBusinesses: () => {
//       return dispatch(requestAllBusinesses());
//     }
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
