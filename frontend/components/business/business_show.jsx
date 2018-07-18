import React from 'react';
import BusinessTypeContainer from './business_type_container';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_business_container';
import { Reviews } from './business_show_reviews';
import StarRating from '../star_rating';
import BusinessMap from '../map/business_show_map';
import SearchContainer from '../search/search_business_page_container'

class BusinessShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {1: '', 2: 'hovered', 3: ''};
  }
  componentDidMount() {
    this.props.requestBusiness(this.props.match.params.businessId);
  }

  render() {
    const business = this.props.business;
    if (business === undefined || !business.photos) {
      return <p>...coming soon</p>
    }
    return (
      <div className="ike-business-show-main">

        <div className="ike-business-show-header">
          <Link to="/">
            <img id="logo-pic-business"
              src="https://s3.amazonaws.com/project-ike-seeding-dev/logo.png"/>
          </Link>

          <SearchContainer />
          <GreetingContainer />
        </div>

        <div className="ike-business-show-header-nav">
          <BusinessTypeContainer />
          <button id="div-write-review">
            <Link to={`/businesses/${business.id}/reviews/new`}>Write a review
            </Link>
        </button>

        </div>

        <div className="ike-business-show-title">
            <h1>{business.name}</h1>
            <div>
              <StarRating rating={business.rating} />
              <p>{business.reviewIds.length} reviews</p>
            </div>
            <h3>{business.businessType}</h3>

        </div>

          <div className="ike-business-show-pics">

            <div className="ike-business-show-map">
              <BusinessMap business={business} />
              <p>{business.address}</p>
              <p>{business.phone}</p>
              <p><a href={business.website}>{business.website}</a></p>
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
              <Reviews reviews={this.props.reviews} />
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

export default BusinessShow;
