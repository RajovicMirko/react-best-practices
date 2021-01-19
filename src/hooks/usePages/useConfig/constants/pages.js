import baseMetaData from "./baseMetaData";
// pages
import Error404 from "pages/Error404";
import Home from "pages/Home";
import User from "pages/User";
import Admin from "pages/Admin";

const _generateMetaTitle = (title) => `${baseMetaData.title} - ${title}`;

export const generatePages = (args) => {
  return [
    {
      component: Error404,
      path: "/error404",
      name: "error404",
      label: "Error404",
      meta: {
        ...baseMetaData,
        title: "Page not found",
      },
    },
    {
      component: Home,
      path: "/",
      name: "home",
      label: "Home",
      meta: {
        ...baseMetaData,
        title: _generateMetaTitle("Home"),
      },
    },
    {
      component: User,
      path: "/user",
      name: "user",
      label: "User",
      meta: {
        ...baseMetaData,
        title: _generateMetaTitle("User"),
      },
    },
    {
      component: Admin,
      path: "/admin",
      name: "admin",
      label: "Admin",
      meta: {
        ...baseMetaData,
        title: _generateMetaTitle("Admin"),
      },
    },
  ];
};
