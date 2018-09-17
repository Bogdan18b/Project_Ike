import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, formClass, loginClass, signupClass }) => {
  let name;
  name = currentUser ? currentUser.firstName : "";
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
  const personalGreeting = (name) => {
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
