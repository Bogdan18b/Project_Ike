import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

const GUEST_USER = { email: "guest@yahoo.com", password: "123456" };
const LoginForm = ({ login, errors }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const loginUser = (e, user) => {
    e.preventDefault();
    login(user);
  };

  const update = field => e =>
    setUser({ ...user, [field]: e.currentTarget.value });
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
          <h1>Log In with IKE!</h1>
          <p className="JoinIke-main-form-privacy">
            By logging in, you agree to YKE’s Terms of Service and Privacy
            Policy.
          </p>
          <form
            className="JoinIke-main-form-wrapper"
            onSubmit={e => loginUser(e, user)}
          >
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

            <input type="submit" value="Log In" />
            <input
              type="button"
              onClick={e => loginUser(e, GUEST_USER)}
              value="Guest Login"
            />
          </form>

          <Link to="/signup">New to Ike!? Sign up</Link>
        </div>
      </div>
    </Fragment>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string)
};

export default withRouter(LoginForm);
