import React from 'react';
import BusinessTypeContainer from './business_type_container';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_business_container';
import Reviews from './business_show_reviews';
import StarRating from '../star_rating';
import BusinessMap from '../map/business_show_map';
import BusinessHeader from '../header/business_header';
import SearchContainer from '../search/search_business_page_container';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {1: '', 2: 'hovered', 3: ''};
  }
  componentDidMount() {
    if (this.props.match.params.businessId !== "search") {
      this.props.requestBusiness(this.props.match.params.businessId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.businessId !== newProps.match.params.businessId &&
      newProps.match.params.businessId !== "search") {
      this.props.requestBusiness(newProps.match.params.businessId);

    }
  }

  render() {
    const business = this.props.business;
    if (business === undefined || !business.photos) {
      return <p></p>
    }
    let myReview = this.props.reviews.filter(rev => rev.userId === this.props.currentUserId && rev.businessId === business.id);
    let myReviewId = myReview.length > 0 ? myReview[0].id : "not reviewed";
    let reviews = this.props.reviews.filter(review => {
      if (review.businessId === parseInt(this.props.match.params.businessId)) {
        return review;
      }
    });

    let count = business.reviewIds.length;
    let type = this.props.types[business.businessTypeId] || "";
    return (
      <div className="ike-business-show-main">

        <BusinessHeader />
        <div className="ike-business-show-title">

            <h1>{business.name}</h1>
            <div>
              <StarRating rating={business.rating} />
              <p>{ count === 1 ? "1 review" : `${count} reviews`}</p>
            </div>
            <div className="ike-business-show-tags">
              <Link to="#">{business.tags[0]}</Link>,
              <Link to="#">{business.tags[1]}</Link>,
              <Link to="#">{business.tags[2]}</Link>
            </div>

            { myReviewId === "not reviewed" ? (<Link id="div-write-review"
              to={`/businesses/${business.id}/reviews/new`}
              >Write a review
            </Link>) : (<Link id="div-write-review"
              to={`/businesses/${business.id}/reviews/${myReviewId}/edit`}
              >Edit my review
            </Link>)
          }
        </div>

          <div className="ike-business-show-pics">

            <div className="ike-business-show-map">
              <BusinessMap business={business} />
              <p>{business.address}</p>
              <p>{business.phone}</p>
              <p>{business.website !== "not available" ?
                <a href={business.website}>{business.website}</a> : "no website"}</p>
            </div>

            <img onMouseOver={() => this.setState({1: 'hovered', 2: '', 3: ''})}
              onMouseOut={() => this.setState({1: '', 2: 'hovered', 3: ''})}
              className={this.state[1]}
              src={business.photos[0]}
              alt="coming soon"/>

            <img src={business.photos[1]}
              className={this.state[2]}
              alt="coming soon"/>

            <img onMouseOver={() => this.setState({1: '', 2: '', 3: 'hovered'})}
              onMouseOut={() => this.setState({1: '', 2: 'hovered', 3: ''})}
              className={this.state[3]}
              src={business.photos[2]} alt="coming soon"/>
          </div>

          <div className="ike-business-show-rev">

            <div className="ike-business-show-reviews">
              <Reviews reviews={reviews} currentUserId={this.props.currentUserId}
                deleteReview={this.props.deleteReview}
                businessId={business.id}
                users={this.props.users}/>
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
  }

}

export default withRouter(BusinessShow);
