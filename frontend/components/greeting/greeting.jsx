import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  let name;
  name = currentUser ? currentUser.firstName : "";
  const sessionLinks = () => {
    let classType = window.location.href.includes("businesses") ? "business" : "home";
    return (
      <nav className={`ike-login-form-${classType}`}>

        <Link className={`ike-login-${classType}-button`}
          to="/login">Log In
        </Link>

        <Link className={`ike-signup-${classType}-button`}
          to="/signup">Sign Up
        </Link>

      </nav>
    );
  };

  const personalGreeting = name => {
    return (
      <h1 className="ike-welcome-user"
        onClick={() =>{document.getElementsByClassName('ike-logout-list')[0].classList.toggle('hide')}}>
        Hello, {name.toUpperCase()}!
        <ul className="ike-logout-list hide">
          <li><Link to="/user_details">My Profile</Link></li>
          <li onClick={logout}>Log Out
          </li>
        </ul>
      </h1>
    );
  }

  return currentUser ? personalGreeting(name) : sessionLinks();
};


export default Greeting;
