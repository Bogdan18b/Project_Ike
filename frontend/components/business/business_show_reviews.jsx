import React from 'react';
import StarRating from '../star_rating';
import { withRouter } from "react-router";


  class Reviews extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props;
    }

    handleRemove(id) {
      this.props.deleteReview(id);
      let copy = this.props.reviews.filter(review => review.id !== id);
      this.setState({reviews: copy});
    }
    
    render() {
      const rev = this.state.reviews.map(review => (
        <ul key={review.id}>
          <li>{review.userName}</li>
          <li><StarRating rating={review.rating}/></li>
          <li>{review.body}</li>
          {this.props.currentUserId === review.userId ? <li id="ike-remove-review"onClick={() => this.handleRemove(review.id)}><i className="fas fa-trash-alt"></i></li> : ""}
        </ul>
      ));
      return (
        rev
      );
    }
  }

  export default withRouter(Reviews);
