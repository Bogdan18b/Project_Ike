import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, formClass, loginClass, signupClass }) => {
  const sessionLinks = () => (

    <nav className={formClass}>

      <Link className={loginClass}
        to="/login">Log In
      </Link>

      <Link className={signupClass}
        to="/signup">Sign Up
      </Link>

    </nav>
  );
  const personalGreeting = () => {
    debugger
    return (
      <nav className={formClass}>
        <button className={loginClass}
          onClick={logout}>Log Out
        </button>
      </nav>
    );
  }

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
