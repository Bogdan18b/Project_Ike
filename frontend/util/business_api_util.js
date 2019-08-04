export const fetchAllBusinesses = () =>
  $.ajax({
    method: "GET",
    url: "/api/businesses"
  });

export const fetchBusiness = id =>
  $.ajax({
    method: "GET",
    url: `/api/businesses/${id}`
  });

export const fetchAllBusinessTypes = () =>
  $.ajax({
    method: "GET",
    url: "api/categories"
  });
