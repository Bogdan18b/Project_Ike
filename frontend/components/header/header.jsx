import React, { Fragment } from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import BusinessTypeContainer from '../business/type/business_type_container';

const randomImage = () => {
  let numbers = Array.from(new Array(21),(val,index)=>index + 1);
  numbers = numbers[Math.floor(Math.random()*numbers.length)];
  let picture = `https://s3.amazonaws.com/project-ike-seeding-dev/food${numbers}.jpg`;
  return picture;
};

const Header = () => {
  return (
    <Fragment>
      <div className="ike-homepage-header" style ={ { backgroundImage: `url(${randomImage()}` }}>
        <Link id="ike-home-write-review" to="/businesses">Write a Review</Link>
        <GreetingContainer />
        <Link to="/"><img id="logo-pic" src="https://s3.amazonaws.com/project-ike-seeding-dev/logo.png"/></Link>
        <SearchContainer />
        <BusinessTypeContainer/>
      </div>
      <div className="ike-homepage-login-button">
      </div>
    </Fragment>
  );
};

export default Header;
