import _baseMetaData from "./baseMetaData";
// pages
import Error404 from "pages/Error404";
import Home from "pages/Home";
import User from "pages/User";
import Admin from "pages/Admin";

const _generateMetaTitle = (title) => `${_baseMetaData.title} - ${title}`;

export const generatePages = (args) => {
  return [
    {
      component: Error404,
      path: "/error404",
      name: "error404",
      label: "Error404",
      meta: {
        ..._baseMetaData,
        title: "Page not found",
      },
    },
    {
      component: Home,
      path: "/",
      name: "home",
      label: "Home",
      isNavLink: true,
      meta: {
        ..._baseMetaData,
        title: _generateMetaTitle("Home"),
      },
    },
    {
      component: User,
      path: "/user",
      name: "user",
      label: "User",
      isNavLink: true,
      meta: {
        ..._baseMetaData,
        title: _generateMetaTitle("User"),
      },
    },
    {
      component: Admin,
      path: "/admin",
      name: "admin",
      label: "Admin",
      isNavLink: true,
      meta: {
        ..._baseMetaData,
        title: _generateMetaTitle("Admin"),
      },
    },
  ];
};
