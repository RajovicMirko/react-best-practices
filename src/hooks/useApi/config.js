import axios from "axios";

const baseUrl = "https://restcountries.eu/rest/v2"; // use or import from .env or some constants file

export default axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "content-type": "application/json",
  },
});
