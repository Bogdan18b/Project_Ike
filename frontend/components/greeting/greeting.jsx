import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const toggleClass = () =>
  document
    .querySelector(".Header-top-userGreeting-options")
    .classList.toggle("Header-top-userGreeting-options-is-hidden");

const Greeting = ({ currentUser, logout }) => {
  const name = currentUser ? currentUser.firstName : "";
  const classType = window.location.hash !== "#/" ? "business" : "";
  const sessionLinks = () => {
    return (
      <nav
        className={`Header-top-actionButtons Header-top-actionButtons-${classType}`}
      >
        <Link className="Header-top-actionButtons-login" to="/login">
          Log In
        </Link>

        <Link className="Header-top-actionButtons-signup" to="/signup">
          Sign Up
        </Link>
      </nav>
    );
  };

  const personalGreeting = name => {
    return (
      <div
        className={`Header-top-userGreeting Header-top-userGreeting-${classType}`}
        onMouseOver={toggleClass}
        onMouseOut={toggleClass}
      >
        <h1>Hello, {name.toUpperCase()}!</h1>
        <ul className="Header-top-userGreeting-options Header-top-userGreeting-options-is-hidden">
          <li>
            <Link to="/user_details">My Profile</Link>
          </li>
          <li onClick={logout}>Log Out</li>
        </ul>
      </div>
    );
  };

  return currentUser ? personalGreeting(name) : sessionLinks();
};

Greeting.propTypes = {
  logout: PropTypes.func,
  currentUser: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    reviewIds: PropTypes.arrayOf(PropTypes.number)
  })
};

export default Greeting;
