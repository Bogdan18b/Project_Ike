import React, { Fragment, useState } from 'react';
import StarRating from '../../star_rating';
import PropTypes from 'prop-types';

const Reviews = props => {
  const [reviews, setReviews] = useState(props.reviews);
  const [hideClass, setHideClass] = useState('hide');

  const handleRemove = id => {
    props.deleteReview(id);
    const remainingReviews = props.reviews.filter(review => review.id !== id);
    setReviews(remainingReviews);
  }
  const handleHover = () => setHideClass('');
  const handleHoverOut = () => setHideClass('hide');
  return (
    <Fragment>
      {reviews.map(review => {
        const showRemoveButton = props.currentUserId === review.userId;
        return (
          <ul key={review.id}>
            <li>{props.users[review.userId].firstName}</li>
            <li><StarRating rating={review.rating} />
              {review.createdAt.slice(0, 10).split("-").join("/")}</li>
            <li>{review.body}</li>
            {showRemoveButton && <li id="ike-remove-review" onClick={() => handleRemove(review.id)}><i className="fas fa-trash-alt"
              onMouseOver={handleHover}
              onMouseOut={handleHoverOut}
            ></i>
              <p className={`ike-business-remove-review ${hideClass}`}>Remove Review</p></li>}
          </ul>
        )
      })}
    </Fragment>
  )
}

Reviews.propTypes = {
  businessId: PropTypes.number,
  currentUserId: PropTypes.number,
  deleteReview: PropTypes.func,
  reviews: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.object
};

export default Reviews;
