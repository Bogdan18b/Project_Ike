import React from 'react';
import { connect } from 'react-redux';
import { requestAllReviews } from '../../actions/review_actions';
import { requestBusiness } from '../../actions/business_actions';
import Reviews from './review_index';

const mapStateToProps = ({ entities, searchResults }) => {
  let reviews = Object.values(entities.reviews).sort((revA, revB) =>
    (revA.id < revB.id) ? 1 : ((revB.id < revA.id) ? -1 : 0));
  reviews.forEach(review => {
    review.userName = (entities.users[review.userId] && entities.users[review.userId].firstName) || "";
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
  componentDidMount() {
    this.props.requestAllReviews().then(data => {
      data.businesses.forEach(id => this.props.requestBusiness(id));
    });
  }

  render() {
    return <Reviews reviews={this.props.reviews}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsHomeIndex);
