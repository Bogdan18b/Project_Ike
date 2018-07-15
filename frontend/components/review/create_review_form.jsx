import React from 'react';
import { withRouter } from 'react-router-dom';
import Rating from 'react-rating';
class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.review;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
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
        <h3>Write a Review</h3>
        <form onSubmit={this.handleSubmit}>
          <label>rating
            <input
              type="text"
              value={this.state.rating}
              onChange={this.update('rating')} />
          </label>

            <textarea
              value={this.state.body}
              onChange={this.update('body')} />
          
          <Rating
            emptySymbol="fa fa-star-o grey-star"
            fullSymbol="fa fa-star red-star"
          />

          <input type="submit" value="Post Review" />
        </form>
      </div>
    );
  }


}

export default withRouter(CreateReviewForm);
