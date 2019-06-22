export const searchBusinesses = inputValue =>
  $.ajax({
    method: "GET",
    url: `/api/searches?query=${inputValue}`
  });
