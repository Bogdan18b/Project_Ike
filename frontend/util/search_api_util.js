export const searchBusinesses = (inputValue) => {
  return $.ajax({
    method: "GET",
    url: `/api/searches?query=${inputValue}`
  });
};
