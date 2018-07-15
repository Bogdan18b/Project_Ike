import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="ike-homepage-header">
        <Link to="/"><img id="logo-pic" src="https://s3.amazonaws.com/project-zebra-dev/ikelogo.png"/></Link>
        <input type="text" placeholder="search under construction..." />
      </div>
      <div className="ike-homepage-login-button">
        <GreetingContainer />
      </div>
    </div>
  );
};

export default Header;