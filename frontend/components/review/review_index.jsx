import React, { Fragment } from 'react';
import ReviewIndexItem from './review_index_item';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  if(reviews.length === 0) {
    return null;
  }
  const rev = reviews.map(review => <ReviewIndexItem key={review.id} review={review} />)
  return (
    <Fragment>
      <h1 id="ike-recent-reviews">Recent activity</h1>
      <div className="ike-div-review-main-list">
        {rev}
      </div>
    </Fragment>
  )
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object)
}

export default withRouter(Reviews);
