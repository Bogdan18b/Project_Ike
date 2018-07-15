export const fetchAllReviews = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/reviews'
  });
};

export const createReview = (review, businessId) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `/api/businesses/${businessId}/reviews`,
    data: { review }
  });
};
