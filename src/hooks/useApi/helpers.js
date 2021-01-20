const encodeQuery = (data) => {
  if (!data) return null;

  const query = Object.keys(data).reduce((acc, key) => {
    return !data[key]
      ? acc
      : `${acc}${encodeURIComponent(key)}=${encodeURIComponent(data[key])} `;
  }, "?");

  return query.length > 1 ? query.trim().replace(" ", "&") : null;
};

export const prepareRequestConfig = (args) => {
  const { url = "", query = null, data = null } = args;

  const config = {
    url,
  };

  const queryString = encodeQuery(query);
  if (queryString) config["url"] += queryString;
  if (data) config["data"] = data;

  return config;
};
