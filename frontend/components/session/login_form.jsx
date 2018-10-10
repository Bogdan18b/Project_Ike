import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return (
      <ul className="ike-login-errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  guestLogin() {
    return (e) => {
      e.preventDefault();
      this.props.login({email:'guest@yahoo.com', password:'123456'});
    };
  }


  render() {
    return (
      <Fragment>
        <header className="ike-div-login-header">
          <Link className="ike-header-logo-wrapper" to="/"><img className="ike-header-pic" src="https://s3.amazonaws.com/project-ike-seeding-dev/logo.png"/></Link>
        </header>
        <div className="ike-div-login-main">
          {this.renderErrors()}
          <div className="ike-div-login-form">

            <h1>Log In with IKE!</h1>
            <p className="ike-privacy">By logging in, you agree to YKE’s Terms of Service and Privacy Policy.</p>
            <form className="ike-login-form" onSubmit={this.handleSubmit}>

                <input type="text" value={this.state.email}
                  onChange={this.update("email")}
                  autoComplete="email"
                  placeholder="Email"
                />

                <input type="password" value={this.state.password}
                  onChange={this.update("password")}
                  autoComplete="current-password"
                  placeholder="Password"
                />

              <input type="submit" value="Log In" />
            </form>

            <Link to="/signup">New to Ike!? Sign up</Link>

            <button className="ike-guest-login"
              onClick={this.guestLogin()}>Guest Login
            </button>

          </div>

        </div>

      </Fragment>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string)
};

export default withRouter(LoginForm);
