import React from 'react';
import { ReviewIndexItem } from './review_index_item';
import { withRouter } from 'react-router-dom';

class Reviews extends React.Component {
  componentDidMount() {
    // this.props.requestAllReviews();
    debugger
  }
  componentWillReceiveProps(newProps) {
    debugger
    // if (this.props.match.params.reviews !== newProps.match.params.reviews) {
    //   this.props.requestAllReviews();
    // }
  }

  render() {
    if(this.props.reviews.length === 0) {
      return <p></p>
    }
    const reviews = this.props.reviews.map(review => <ReviewIndexItem key={review.id} review={review} />)
    return (
      <div className="ike-div-review-main-list">
        {reviews}
      </div>
    )
  }
}

export default withRouter(Reviews);
