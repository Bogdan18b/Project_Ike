import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div className="ike-div-login-main">
        Please Login
        {this.renderErrors()}
        <div className="ike-div-login-form">
          <form className="ike-login-form" onSubmit={this.handleSubmit}>

              <input type="text" value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />

              <input type="password" value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />

            <input type="submit" value="Log In" />
          </form>

          <Link to="/signup">New to Ike!? Sign up</Link>

        </div>

      </div>
    );
  }
}

export default withRouter(LoginForm);
