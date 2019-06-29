import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestAllReviews } from "../../actions/review_actions";
import { requestBusiness } from "../../actions/business_actions";
import Reviews from "./review_index";
import PropTypes from "prop-types";

const mapStateToProps = ({ entities, searchResults }) => {
  let reviews = Object.values(entities.reviews).sort((revA, revB) =>
    revA.id < revB.id ? 1 : revB.id < revA.id ? -1 : 0
  );
  reviews.forEach(review => {
    review.userName =
      (entities.users[review.userId] &&
        entities.users[review.userId].firstName) ||
      "";
    review.businessName =
      (entities.businesses[review.businessId] &&
        entities.businesses[review.businessId].name) ||
      "";
  });

  return {
    reviews,
    businesses: searchResults.businessIds
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllReviews: () => dispatch(requestAllReviews()),
  requestBusiness: id => dispatch(requestBusiness(id))
});

const ReviewsHomeIndex = props => {
  useEffect(() => {
    props
      .requestAllReviews()
      .then(data => data.businesses.forEach(id => props.requestBusiness(id)));
  }, []);
  return <Reviews reviews={props.reviews} />;
};

ReviewsHomeIndex.propTypes = {
  requestBusiness: PropTypes.func,
  requestAllReviews: PropTypes.func,
  reviews: PropTypes.arrayOf(PropTypes.object),
  businesses: PropTypes.arrayOf(PropTypes.number)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsHomeIndex);
