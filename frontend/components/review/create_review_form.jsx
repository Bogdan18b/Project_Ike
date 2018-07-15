import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Rating from 'react-rating';

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.review;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state).then(() => this.props.history.push('/'));
  }

  render () {
    debugger
    return (
      <div>
        <div className="ike-review-form-header">
          <Link to="/"><img id="ike-review-logo"
            src="https://s3.amazonaws.com/project-zebra-dev/ikelogo.png"/>
          </Link>
          <h3>Write a Review</h3>
        </div>

        <form className="ike-review-form"
          onSubmit={this.handleSubmit}>

          <div className="ike-review-form-wrapper">

            <Rating className="ike-review-rating"
              emptySymbol="fa fa-star-o grey-star"
              fullSymbol="fa fa-star red-star"
              />

            <textarea className="ike-review-form-body"
                rows="60" cols="60"
                value={this.state.body}
                onChange={this.update('body')}
                placeholder="Your review helps others learn about great local businesses.
                Please do not review this business if you received a freebie for writing this review, or if you are connected in any way to the owner or employees."
            />

          </div>

            <input className="ike-review-form-button"
              type="submit" value="Post Review" />
        </form>

      </div>
    );
  }


}

export default withRouter(CreateReviewForm);
