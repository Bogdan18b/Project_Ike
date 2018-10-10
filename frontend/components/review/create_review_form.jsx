import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';

class CreateReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody() {
    return (e) => {
      this.setState({ body: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => {
      return this.props.history.push(`/businesses/${this.props.match.params.businessId}`)
    });
  }

  renderErrors() {
    return (
      <ul className="ike-review-errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  ratingMessage() {
    switch (this.state.rating) {
      case 1:
        return <p id="rating-message">Eek! Me thinks not.</p>
      case 2:
        return <p id="rating-message">Meh! I've experienced better.</p>
      case 3:
        return <p id="rating-message">A-Okay!</p>
      case 4:
        return <p id="rating-message">Yay! I'm a fan!</p>
      case 5:
        return <p id="rating-message">Woohoo! As good as it gets!</p>
      default:
        return <p id="rating-message">Select your rating</p>
    }
  }

  render () {
    return (
      <Fragment>
        <div className="ike-review-form-header">
          <Link to="/"><img id="ike-review-logo"
            src="https://s3.amazonaws.com/project-ike-seeding-dev/logo.png"/>
          </Link>
          <h3>{this.props.formType}</h3>
        </div>
        <form className="ike-review-form"
          onSubmit={this.handleSubmit}>

          <div className="ike-review-form-wrapper">

            <div className="ike-review-stars">

              <span className={ (this.state.rating > 0) ? "fa fa-star red-star" : "fa fa-star grey-star"}
                onClick={() => this.setState({ rating: 1 })}
              ></span>

            <span className={ (this.state.rating > 1) ? "fa fa-star red-star" : "fa fa-star grey-star"}
                onClick={() => this.setState({ rating: 2 })}
              ></span>

            <span className={ (this.state.rating > 2) ? "fa fa-star red-star" : "fa fa-star grey-star"}
                onClick={() => this.setState({ rating: 3 })}
              ></span>

            <span className={ (this.state.rating > 3) ? "fa fa-star red-star" : "fa fa-star grey-star"}
                onClick={() => this.setState({ rating: 4 })}
              ></span>

            <span className={ (this.state.rating > 4) ? "fa fa-star red-star" : "fa fa-star grey-star"}
                onClick={() => this.setState({ rating: 5 })}
              ></span>

            {this.ratingMessage()}

            </div>

            <textarea className="ike-review-form-body"
                rows="60" cols="60"
                value={this.state.body}
                onChange={this.updateBody()}
                placeholder="Your review helps others learn about great local businesses.
                Please do not review this business if you received a freebie for writing this review, or if you are connected in any way to the owner or employees."
            />

            {this.renderErrors()}

          </div>

            <input className="ike-review-form-button"
              type="submit" value={this.props.formType} />
        </form>

      </Fragment>
    );
  }


}

export default withRouter(CreateReviewForm);
