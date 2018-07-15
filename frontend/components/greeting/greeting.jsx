import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="ike-login-signup">
      <button className="ike-login-button">
        <Link id="login-button" to="/login">Log In</Link>
      </button>

      <button  className="ike-login-button">
        <Link id="signup-button" to="/signup">Sign Up</Link>
      </button>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="ike-login-signup">
      <button className="ike-login-button"
        id="logout-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
