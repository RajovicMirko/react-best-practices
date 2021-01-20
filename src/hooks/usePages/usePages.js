/*
  Created; 17.01.2021;
  Router export;
  Redirect export;
  NavLink export;
  RouterView; array of all pages routes component and export
  navLinks - array of available routes by rights and export
  MODULES - const object with all app modules
  Can - functional component for auth client test
  auth - data from authorization module
*/

import { useContext } from "react";
import { BrowserRouter, Redirect, Link, NavLink } from "react-router-dom";
import AuthContext from "context/Auth";
import RouterView from "./components/RouterView";
import { generatePages } from "./def/pages";
import { generateLinks } from "./def/links";

const usePages = () => {
  const auth = useContext(AuthContext);

  const fallbackPath = "/error404";
  const pages = generatePages();
  const navLinks = generateLinks({ ...auth, pages });

  return {
    Router: BrowserRouter,
    Redirect,
    Link,
    NavLink,
    RouterView,
    navLinks,
    pages,
    fallbackPath,
  };
};

export default usePages;
