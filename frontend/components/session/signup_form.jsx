import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      zip_code: "",
      day: "",
      month: "",
      year: ""
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
      <ul className="ike-login-errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <header className="ike-div-login-header">
          <Link className="ike-header-logo-wrapper" to="/"><img className="ike-header-pic" src="https://s3.amazonaws.com/project-ike-seeding-dev/logo.png"/></Link>
        </header>
        <div className="ike-div-login-main">
          {this.renderErrors()}
          <div className="ike-div-login-form">

            <h1>Sign Up with IKE!</h1>
            <form className="ike-login-form" onSubmit={this.handleSubmit}>
              <input type="text" id="first_name"
                value={this.state.first_name}
                onChange={this.update("first_name")}
                placeholder="First Name"
                />

              <input type="text" id="last_name"
                value={this.state.last_name}
                onChange={this.update("last_name")}
                placeholder="Last Name"
                />

              <input type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />

              <input type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />

              <input type="text" value={this.state.zip_code}
                  onChange={this.update("zip_code")}
                  placeholder="ZIP Code"
                />

              <select onChange={this.update("month")}>
                  <option default>Month</option>
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(el => <option key={el}>{el}</option>)}
              </select>

              <select onChange={this.update("day")}>
                  <option default>Day</option>
                  {Array.from(new Array(31),(val,index)=>index + 1).map(el => <option key={el}>{el}</option>)}
              </select>

              <select onChange={this.update("year")}>
                  <option default>Year</option>
                  {Array.from(new Array(100),(val,index)=> 2018 - index).map(el => <option key={el}>{el}</option>)}
              </select>

              <input type="submit" value="Sign Up" />
            </form>
            <Link to="/login">Already on Ike!? Log in</Link>
          </div>

        </div>

      </div>
    );
  }
}

export default withRouter(SignupForm);
