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

import { BrowserRouter, Redirect, NavLink } from "react-router-dom";
import useConfig from "./useConfig/_index";
import RouterView from "./components/RouterView";

const usePages = () => {
  const { auth, pages, Can, ROLES, SUB_ROLES, MODULES } = useConfig();

  const navLinks = pages.filter((page) => {
    const module = MODULES.app.links[page.name];
    return (
      module &&
      Can({
        perform: module,
        data: {
          subRoles: auth.user.subRoles,
          validRoles: [...Object.values(SUB_ROLES)],
        },
      })
    );
  });

  return {
    Router: BrowserRouter,
    Redirect,
    NavLink,
    RouterView,
    navLinks,
    ROLES,
    SUB_ROLES,
    MODULES,
    Can,
    auth,
  };
};

export default usePages;
