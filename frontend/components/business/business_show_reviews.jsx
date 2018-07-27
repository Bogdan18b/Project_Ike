import React from 'react';
import StarRating from '../star_rating';

export const Reviews = ({ reviews, deleteReview, currentUserId }) => {
  debugger
  const rev = reviews.map(review => (
    <ul key={review.id}>
      <li>{review.userName}</li>
      <li><StarRating rating={review.rating}/></li>
      <li>{review.body}</li>
      {currentUserId === review.userId ? <li id="ike-remove-review"onClick={() => deleteReview(review.id)}><i class="fas fa-trash-alt"></i></li> : ""}
    </ul>
  ));
  debugger
  return (
    rev
  );
};
