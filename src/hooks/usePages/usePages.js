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

  const pages = generatePages();

  const navLinks = generateLinks({ ...auth, pages });

  const fallbackPage = pages.find((page) => page.fallback);
  const fallbackPath = fallbackPage ? fallbackPage.path : "/";

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
