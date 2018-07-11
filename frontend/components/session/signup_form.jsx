import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
      zip_code: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
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
      <div>
        Please Sign Up
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>

          <label>Username:
            <input type="text" value={this.state.username}
              onChange={this.update("username")}
            />
          </label>

          <label>Password:
            <input type="password" value={this.state.password}
              onChange={this.update("password")}
            />
          </label>

          <label>First name
            <input type="text" value={this.state.first_name}
              onChange={this.update("first_name")}
            />

          </label>
          <label>Last name
            <input type="text" value={this.state.last_name}
              onChange={this.update("last_name")}
            />

          </label>
          <label>Email
            <input type="text" value={this.state.email}
              onChange={this.update("email")}
            />

          </label>
          <label>Zipcode
            <input type="number" value={this.state.zip_code}
              onChange={this.update("zip_code")}
            />
          </label>
          <input type="submit" value="Sign Up" />
        </form>

        <Link to="/login">Already on Ike!? Log in</Link>
      </div>
    );
  }
}

export default withRouter(SignupForm);
