import { baseMetaData, generateMetaTitle } from "./_baseData";
// pages
import Error404 from "pages/Error404";
import Home from "pages/Home";
import User from "pages/User";
import Admin from "pages/Admin";

export const generatePages = () => {
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
        title: generateMetaTitle("Home"),
      },
    },
    {
      component: User,
      path: "/user",
      name: "user",
      label: "User",
      meta: {
        ...baseMetaData,
        title: generateMetaTitle("User"),
      },
    },
    {
      component: Admin,
      path: "/admin",
      name: "admin",
      label: "Admin",
      meta: {
        ...baseMetaData,
        title: generateMetaTitle("Admin"),
      },
    },
  ];
};
