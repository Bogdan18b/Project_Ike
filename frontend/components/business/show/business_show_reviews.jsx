import React, { Component } from 'react';
import StarRating from '../../star_rating';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';

  class Reviews extends Component {
    constructor(props) {
      super(props);
      this.state = {
        reviews: this.props.reviews,
        className: "hide"
      };
      this.handleHover = this.handleHover.bind(this);
      this.handleHoverOut = this.handleHoverOut.bind(this);
    }

    handleRemove(id) {
      this.props.deleteReview(id);
      let copy = this.props.reviews.filter(review => review.id !== id);
      this.setState({reviews: copy});
      document.location.reload();
    }

    handleHover() {
      this.setState({className: ""});
    }

    handleHoverOut() {
      this.setState({className: "hide"});
    }

    render() {
      const rev = this.state.reviews.map(review => {
        return (
          <ul key={review.id}>
            <li>{this.props.users[review.userId].firstName}</li>
            <li><StarRating rating={review.rating}/>
              {review.createdAt.slice(0, 10).split("-").join("/") || ""}</li>
            <li>{review.body}</li>
            {this.props.currentUserId === review.userId ? <li id="ike-remove-review"onClick={() => this.handleRemove(review.id)}><i className="fas fa-trash-alt"
            onMouseOver={this.handleHover.bind()}
            onMouseOut={this.handleHoverOut.bind()}></i>
            <p className={`ike-business-remove-review ${this.state.className}`}>Remove Review</p></li> : ""}
          </ul>
        )}
      );
      return (
        rev
      );
    }
  }

  Reviews.propTypes = {
    businessId: PropTypes.number,
    currentUserId: PropTypes.number,
    deleteReview: PropTypes.func,
    reviews: PropTypes.arrayOf(PropTypes.object),
    users: PropTypes.object
  };

  export default withRouter(Reviews);
