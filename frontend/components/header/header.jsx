import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <GreetingContainer />
      <div className="ike-homepage-header">
        <Link to="/"><img id="logo-pic" src="https://s3.amazonaws.com/project-ike-seeding-dev/logo.png"/></Link>
        <input type="text" placeholder="search under construction..." />
      </div>
      <div className="ike-homepage-login-button">
      </div>
    </div>
  );
};

export default Header;
