export const encodeCountriesQuery = (data) => {
  const query = Object.keys(data).reduce((acc, key) => {
    if (!data[key]) {
      return acc;
    } else {
      return (
        acc + `${encodeURIComponent(key)}=${encodeURIComponent(data[key])} `
      );
    }
  }, "?");

  return query.length <= 1 ? "" : query.trim().replace(" ", "&");
};
