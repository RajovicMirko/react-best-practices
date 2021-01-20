import http from "./config";
import { prepareRequestConfig } from "./helpers";

/*
props = {
  url: string,
  query: object,
  data: any
}

requestConfig = {
  method: string,
  url: string,
  data: any,
}
*/

function useApi() {
  const Get = (props) => {
    const requestConfig = {
      method: "get",
      ...prepareRequestConfig(props),
    };

    return http(requestConfig);
  };

  const Post = (props) => {
    const requestConfig = {
      method: "post",
      ...prepareRequestConfig(props),
    };

    return http(requestConfig);
  };

  const Put = (props) => {
    const requestConfig = {
      method: "put",
      ...prepareRequestConfig(props),
    };

    return http(requestConfig);
  };

  const Delete = (props) => {
    const requestConfig = {
      method: "delete",
      ...prepareRequestConfig(props),
    };

    return http(requestConfig);
  };

  return { Get, Post, Put, Delete };
}

export default useApi;
