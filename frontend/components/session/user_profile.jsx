import React, { Component, Fragment } from 'react';
import BusinessHeader from '../header/business_header';
import StarRating from '../star_rating';
import PropTypes from 'prop-types';

class UserProfile extends Component {

  componentDidMount() {
    this.props.requestAllReviews();
  }

  render() {
    debugger
    let reviews = Object.values(this.props.reviews).filter(review => review.userId === this.props.user.id)
    return (
      <Fragment>
        <BusinessHeader />
        <h1 id="ike-username">{this.props.user.firstName + " " + this.props.user.lastName}</h1>
        <h2 id="ike-recent-activity">Recent activity</h2>
        {reviews.map(review =>{
          let date = review.createdAt.slice(0, 10).split("-").join("/") || "";
          return (
            <ul key={review.id} className="ike-user-page-review">
              <li>You wrote a review</li>
                <li><StarRating rating={review.rating} /> {date}</li>
              <li>{review.body}</li>
            </ul>
            )
        })}
        <p id="ike-no-activity">We don't have any recent activity for you right now.</p>
      </Fragment>
      );
  }
}

UserProfile.propTypes = {
  requestAllReviews: PropTypes.func,
  reviews: PropTypes.object,
  user: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    id: PropTypes.number,
    lastName: PropTypes.string,
    reviewIds: PropTypes.arrayOf(PropTypes.number)
  })
};

export default UserProfile;
