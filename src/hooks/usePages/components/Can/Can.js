import useConfig from "../../useConfig/_index";
import { check } from "./helper";

const defaultProps = {
  perform: "",
  dynamicCheckData: {},
  yes: () => true,
  no: () => false,
};

const Can = (args) => {
  const { auth, RULES } = useConfig();
  const { perform, dynamicCheckData, yes, no } = { ...defaultProps, ...args };

  let test = null;
  const initArgsCheck = {
    dynamicCheckData,
    role: auth.user.role,
    rules: RULES,
  };

  if (perform instanceof Array) {
    // check array perform any true
    test = perform.some((action) => {
      const args = {
        ...initArgsCheck,
        action,
      };

      return check(args);
    });
  } else {
    // check single perform true
    const args = {
      ...initArgsCheck,
      action: perform,
    };

    test = check(args);
  }

  return test ? yes() : no();
};

export default Can;
