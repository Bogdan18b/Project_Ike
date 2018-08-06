import React from 'react';
import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestAllBusinesses, requestAllBusinessTypes } from '../../actions/business_actions';

// // !!!!!!! dispatch all businesses here maybe
// // !!!!!! take care of map start with markers -order by number not id
//
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
// class Businesses extends React.Component {
//   componentDidMount() {
//     this.props.requestAllBusinesses();
//   }
//
//   componentWillReceiveProps(newProps) {
//     if (this.props.match.params.businesses !== newProps.match.params.businesses) {
//       this.props.requestAllBusinesses();
//     }
//   }
//
//   render() {
//     debugger
//       let businesses = Object.values(this.props.businesses);
//       return <BusinessIndex businesses={businesses}/>;
//   }
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(Businesses);
const mapStateToProps = ({ entities, type = {} }) => {
  return {
    businesses: entities.businesses,
    types: Object.values(entities.businessTypes),
    businessType: type
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllBusinesses: () => {
      return dispatch(requestAllBusinesses());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
