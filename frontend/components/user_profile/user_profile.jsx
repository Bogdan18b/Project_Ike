import React, { useEffect, Fragment } from "react";
import BusinessHeader from "../header/business_header";
import StarRating from "../star_rating";
import PropTypes from "prop-types";

const UserProfile = props => {
  useEffect(() => {
    props.requestAllReviews();
  }, []);
  const reviews = Object.values(props.reviews).filter(
    review => review.userId === props.user.id
  );
  return (
    <Fragment>
      <BusinessHeader />
      <h1 className="UserProfile-name">
        {props.user.firstName + " " + props.user.lastName}
      </h1>
      <h2 className="UserProfile-recentActivity">Recent activity</h2>
      <div className="UserProfile-reviews">
        {reviews.map(review => {
          let date =
            review.createdAt
              .slice(0, 10)
              .split("-")
              .join("/") || "";
          return (
            <ul key={review.id} className="UserProfile-reviews-item">
              <li>You wrote this review on {date}</li>
              <li>
                <StarRating rating={review.rating} />
              </li>
              <li>{review.body}</li>
            </ul>
          );
        })}
        {reviews.length === 0 && (
          <p className="UserProfile-reviews-noActivity">
            We don't have any recent activity for you right now.
          </p>
        )}
      </div>
    </Fragment>
  );
};

UserProfile.propTypes = {
  requestAllReviews: PropTypes.func,
  reviews: PropTypes.array,
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    id: PropTypes.number,
    lastName: PropTypes.string,
    reviewIds: PropTypes.arrayOf(PropTypes.number)
  })
};

export default UserProfile;
