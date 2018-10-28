import { connect } from 'react-redux';
import { requestBusiness } from '../../../actions/business_actions';
import PopularBusinesses from './popular_businesses';

const mapStateToProps = ({ entities }) => {
  let businesses = Object.values(entities.businesses);
  businesses = businesses.filter(bus => [1, 2, 22].includes(bus.id));
  return {
    businesses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestBusiness: (id) => dispatch(requestBusiness(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularBusinesses);
