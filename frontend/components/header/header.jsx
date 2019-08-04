import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import { Link } from "react-router-dom";
import SearchContainer from "../search/search_container";
import CategoryContainer from "../business/category/category_container";

const randomImage = () => {
  let numbers = Array.from(new Array(21), (_, index) => index + 1);
  numbers = numbers[Math.floor(Math.random() * numbers.length)];
  return `https://s3.amazonaws.com/project-ike-seeding-dev/food${numbers}.jpg`;
};

const Header = () => (
  <div className="Header" style={{ backgroundImage: `url(${randomImage()})` }}>
    <div className="Header-top">
      <Link className="Header-top-writeReviewButton" to="/businesses">
        Write a Review
      </Link>
      <GreetingContainer />
    </div>
    <Link to="/">
      <img
        className="Header-logo"
        src="https://s3.amazonaws.com/project-ike-seeding-dev/logo.png"
      />
    </Link>
    <SearchContainer />
    <CategoryContainer />
  </div>
);

export default Header;
