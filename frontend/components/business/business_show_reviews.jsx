import React from 'react';
import StarRating from '../star_rating';
import { withRouter } from "react-router";


  class Reviews extends React.Component {
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

  export default withRouter(Reviews);
