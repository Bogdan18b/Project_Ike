import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="ike-login-signup">
      <button className="ike-signup-button">
        <Link to="/signup">Sign Up</Link>
      </button>

      <button className="ike-login-button">
        <Link to="/login">Log In</Link>
      </button>
    </nav>
  );
  const personalGreeting = () => (
      <button className="ike-login-button" onClick={logout}>Log Out</button>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
