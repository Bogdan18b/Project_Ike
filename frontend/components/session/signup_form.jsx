import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const INITIAL_STATE = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  zip_code: "",
  day: "",
  month: "",
  year: ""
};
const GUEST_USER = { email: "guest@yahoo.com", password: "123456" };

const SignupForm = ({ signup, login, errors }) => {
  const [user, setUser] = useState(INITIAL_STATE);

  const handleSubmit = e => {
    e.preventDefault();
    signup(user);
  };
  const update = field => e =>
    setUser({ ...user, [field]: e.currentTarget.value });
  const loginUser = (e, user) => {
    e.preventDefault();
    login(user);
  };
  return (
    <Fragment>
      <header className="JoinIke-header">
        <Link to="/">
          <img
            className="JoinIke-header-logo"
            src="https://s3.amazonaws.com/project-ike-seeding-dev/logo.png"
            alt="ike logo"
          />
        </Link>
      </header>
      <div className="JoinIke-main">
        <ul className="JoinIke-main-errors">
          {errors.map((error, idx) => (
            <li key={`error-${idx}`}>{error}</li>
          ))}
        </ul>
        <div className="JoinIke-main-form">
          <h1>Sign Up with IKE!</h1>
          <p className="JoinIke-main-form-privacy">
            By signing up, you agree to YKE’s Terms of Service and Privacy
            Policy.
          </p>
          <form className="JoinIke-main-form-wrapper" onSubmit={handleSubmit}>
            <input
              type="text"
              value={user.first_name}
              onChange={update("first_name")}
              autoComplete="given-name"
              placeholder="First Name"
            />

            <input
              type="text"
              value={user.last_name}
              onChange={update("last_name")}
              autoComplete="family-name"
              placeholder="Last Name"
            />

            <input
              type="email"
              value={user.email}
              onChange={update("email")}
              autoComplete="email"
              placeholder="Email"
            />

            <input
              type="password"
              value={user.password}
              onChange={update("password")}
              autoComplete="current-password"
              placeholder="Password"
            />

            <input
              type="text"
              value={user.zip_code}
              onChange={update("zip_code")}
              autoComplete="postal-code"
              placeholder="ZIP Code"
            />

            <select onChange={update("month")}>
              <option default>Month</option>
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
              ].map(month => (
                <option key={month}>{month}</option>
              ))}
            </select>

            <select onChange={update("day")}>
              <option default>Day</option>
              {Array.from(new Array(31), (_, index) => index + 1).map(day => (
                <option key={day}>{day}</option>
              ))}
            </select>

            <select onChange={update("year")}>
              <option default>Year</option>
              {Array.from(
                new Array(100),
                (_, index) => new Date().getFullYear() - index
              ).map(year => (
                <option key={year}>{year}</option>
              ))}
            </select>

            <input type="submit" value="Sign Up" />
            <input
              type="button"
              onClick={e => loginUser(e, GUEST_USER)}
              value="Guest Login"
            />
          </form>
          <Link to="/login">Already on Ike!? Log in</Link>
        </div>
      </div>
    </Fragment>
  );
};

SignupForm.propTypes = {
  signup: PropTypes.func,
  login: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string)
};

export default withRouter(SignupForm);
