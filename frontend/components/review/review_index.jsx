import React, { Fragment} from 'react';
import { ReviewIndexItem } from './review_index_item';
import { withRouter } from 'react-router-dom';

class Reviews extends React.Component {
  // componentDidMount() {
  //   this.props.requestAllReviews();
  // }
  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.reviews !== newProps.match.params.reviews) {
  //     this.props.requestAllReviews();
  //   }
  // }

  render() {
    if(this.props.reviews.length === 0) {
      return <p></p>
    }
    const reviews = this.props.reviews.map(review => <ReviewIndexItem key={review.id} review={review} />)
    return (
      <Fragment>
        <h1 id="ike-recent-reviews">Recent reviews</h1>
        <div className="ike-div-review-main-list">
          {reviews}
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Reviews);
