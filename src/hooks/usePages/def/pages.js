import { baseMetaData, generateMetaTitle } from "./_baseData";
// pages
import Error404 from "pages/Error404";
import NotAuth from "pages/NotAuth";
import Home from "pages/Home";
import User from "pages/User";
import Admin from "pages/Admin";

export const generatePages = () => {
  return [
    {
      component: Error404,
      fallback: true,
      path: "/error404",
      name: "error404",
      label: "Error404",
      meta: {
        ...baseMetaData,
        title: "Page not found",
      },
    },
    {
      component: NotAuth,
      path: "/not-auth",
      name: "notauth",
      label: "No authorization",
      meta: {
        ...baseMetaData,
        title: "No authorization",
      },
    },
    {
      component: Home,
      setup: {
        isProtected: true,
        isNavLink: true,
      },
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
      setup: {
        isProtected: true,
        isNavLink: true,
      },
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
      setup: {
        isProtected: true,
        isNavLink: true,
      },
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
