import React, { useState, useEffect, Fragment, Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Reviews from "./business_show_reviews";
import StarRating from "../../star_rating";
import BusinessMap from "../../map/business_show_map";
import BusinessHeader from "../../header/business_header";
import PropTypes from "prop-types";

const BusinessShow = props => {
  const [hovered, setHovered] = useState({ 1: "", 2: "hovered", 3: "" });

  useEffect(() => {
    if (props.match.params.businessId !== "search") {
      props.requestBusiness(props.match.params.businessId);
    }
  }, [props.match.params.businessId, hovered]);
  const { business } = props;
  if (business === undefined || !business.photos) {
    return null;
  }
  const myReview = props.reviews.filter(
    rev => rev.userId === props.currentUserId && rev.businessId === business.id
  );
  const myReviewId = myReview.length > 0 ? myReview[0].id : "not reviewed";
  const reviews = props.reviews.filter(review => {
    if (review.businessId === parseInt(props.match.params.businessId)) {
      return review;
    }
  });

  const count = business.reviewIds.length;
  return (
    <div className="ike-business-show-main">
      <BusinessHeader />
      <div className="ike-business-show-title">
        <h1>{business.name}</h1>
        <div>
          <StarRating rating={business.rating} />
          <p>{count === 1 ? "1 review" : `${count} reviews`}</p>
        </div>
        <div className="ike-business-show-tags">
          <Link to={`/businesses?tags=${business.tags[0]}`}>
            {business.tags[0]}
          </Link>
          ,
          <Link to={`/businesses?tags=${business.tags[1]}`}>
            {business.tags[1]}
          </Link>
          ,
          <Link to={`/businesses?tags=${business.tags[2]}`}>
            {business.tags[2]}
          </Link>
        </div>

        {myReviewId === "not reviewed" ? (
          <Link
            id="div-write-review"
            to={`/businesses/${business.id}/reviews/new`}
          >
            Write a review
          </Link>
        ) : (
          <Link
            id="div-write-review"
            to={`/businesses/${business.id}/reviews/${myReviewId}/edit`}
          >
            Edit my review
          </Link>
        )}
      </div>

      <div className="ike-business-show-pics">
        <div className="ike-business-show-map">
          <BusinessMap business={business} />
          <p>{business.address}</p>
          <p>{business.phone}</p>
          <p>
            {business.website !== "not available" ? (
              <a href={business.website}>{business.website}</a>
            ) : (
              "no website"
            )}
          </p>
        </div>

        <img
          onMouseOver={() => setHovered({ 1: "hovered", 2: "", 3: "" })}
          onMouseOut={() => setHovered({ 1: "", 2: "hovered", 3: "" })}
          className={hovered[1]}
          src={business.photos[0]}
          alt="coming soon"
        />

        <img
          src={business.photos[1]}
          className={hovered[2]}
          alt="coming soon"
        />

        <img
          onMouseOver={() => setHovered({ 1: "", 2: "", 3: "hovered" })}
          onMouseOut={() => setHovered({ 1: "", 2: "hovered", 3: "" })}
          className={hovered[3]}
          src={business.photos[2]}
          alt="coming soon"
        />
      </div>

      <div className="ike-business-show-rev">
        <div className="ike-business-show-reviews">
          <Reviews
            reviews={reviews}
            currentUserId={props.currentUserId}
            deleteReview={props.deleteReview}
            businessId={business.id}
            users={props.users}
          />
        </div>
        <div className="ike-business-show-details">
          <ul className="ike-business-show-hours">
            <h1>Hours</h1>
            <li>Mon: {business.hours[0]}</li>
            <li>Tue: {business.hours[1]}</li>
            <li>Wed: {business.hours[2]}</li>
            <li>Thu: {business.hours[3]}</li>
            <li>Fri: {business.hours[4]}</li>
            <li>Sat: {business.hours[5]}</li>
            <li>Sun: {business.hours[6]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

BusinessShow.propTypes = {
  currentUserId: PropTypes.number,
  deleteReview: PropTypes.func,
  requestBusiness: PropTypes.func,
  reviews: PropTypes.array,
  users: PropTypes.object,
  business: PropTypes.object
};

export default withRouter(BusinessShow);
