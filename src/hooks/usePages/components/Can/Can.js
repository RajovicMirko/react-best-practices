import useConfig from "../../useConfig/_index";
import { check } from "./helper";

const defaultProps = {
  perform: "",
  data: {},
  yes: () => true,
  no: () => false,
};

const Can = (args) => {
  const { auth, RULES } = useConfig();
  const { perform, data, yes, no } = { ...defaultProps, ...args };

  const argsCheck = {
    action: perform,
    data,
    role: auth.user.role,
    rules: RULES,
  };

  return check(argsCheck) ? yes() : no();
};

export default Can;
