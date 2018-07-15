import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="ike-login-business-signup">
      <button  className="ike-login-business-button">
        <Link id="signup-business-button" to="/signup">Sign Up</Link>
      </button>
      
      <button className="ike-login-business-button">
        <Link id="login-business-button" to="/login">Log In</Link>
      </button>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="ike-login-business-signup">
      <button className="ike-login-business-button"
        id="logout-business-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
