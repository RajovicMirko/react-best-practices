import { BrowserRouter, Redirect, NavLink } from "react-router-dom";
import useConfig from "./useConfig";
import RouterView from "./components/RouterView";

/* TO-DO
  navLinks - add logic for navigation links by auth
*/

const usePages = () => {
  const { auth, pages, Can, MODULES } = useConfig();

  const navLinks = pages.filter((page) => {
    const module = MODULES[page.name];
    return (
      module &&
      Can({ perform: module.link, data: { subRoles: auth.user.subRoles } })
    );
  });

  return {
    Router: BrowserRouter,
    Redirect,
    RouterView,
    NavLink,
    navLinks,
    MODULES,
    Can,
    auth,
  };
};

export default usePages;
