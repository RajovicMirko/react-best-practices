import axios from "axios";
import { encodeCountriesQuery } from "./funtions";

function useApi() {
  const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_ENDPOINT,
    timeout: 5000,
    headers: {
      "content-type": "application/json",
    },
  });

  const getCountriesQueryUrl = (apiUrl, query = null) => {
    if (!query) {
      return apiUrl;
    } else {
      return `${apiUrl}${encodeCountriesQuery(query)}`;
    }
  };

  return {
    http,
    getCountriesQueryUrl,
  };
}

export default useApi;
