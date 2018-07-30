import React from 'react';
import { connect } from 'react-redux';
import { requestAllReviews } from '../../actions/review_actions';
import { requestBusiness } from '../../actions/business_actions';
import Reviews from './review_index';

const mapStateToProps = ({ entities, searchResults }) => {
  let reviews = Object.values(entities.reviews);
  reviews.forEach(review => {
    review.userName = (entities.users[review.userId] && entities.users[review.userId].first_name) || "";
    review.businessName = (entities.businesses[review.businessId] && entities.businesses[review.businessId].name) || "";
  });
  return {
    reviews,
    businesses: searchResults.businessIds
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllReviews: () => dispatch(requestAllReviews()),
    requestBusiness: (id) => dispatch(requestBusiness(id))
  };
};

class ReviewsHomeIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  this.props.requestAllReviews().then(this.props.businesses.forEach(id => {
    this.props.requestBusiness(id);
  }));

  }
  render() {
    return <Reviews reviews={this.props.reviews}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsHomeIndex);
