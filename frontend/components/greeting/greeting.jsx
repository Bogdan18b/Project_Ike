import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
      <h1 className="ike-welcome-user" style = { window.location.hash === "#/" ? { position: "absolute" } : {}}
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

Greeting.propTypes = {
  logout: PropTypes.func,
  currentUser: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    reviewIds: PropTypes.arrayOf(PropTypes.number),
  })
};

export default Greeting;
