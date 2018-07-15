export const fetchAllReviews = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/reviews'
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: `/api/businesses/${review.businessId}/reviews`,
    data: { review }
  });
};
