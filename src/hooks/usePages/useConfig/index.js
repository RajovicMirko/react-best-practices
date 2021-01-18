import { auth } from "./auth";
import { ROLES, MODULES, RULES, generatePages } from "./constants/_index";
import Can from "../components/Can";

const useConfig = () => {
  const fallbackPath = "/error404";
  const pages = generatePages();

  return {
    auth,
    pages,
    fallbackPath,
    ROLES,
    MODULES,
    RULES,
    Can,
  };
};

export default useConfig;
