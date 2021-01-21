import { useContext } from "react";
import AuthContext from "../../Auth";
import { checkPermission } from "./helper";

const defaultProps = {
  perform: "",
  dynamicCheckData: {},
  yes: () => true,
  no: () => false,
};

const Can = (args) => {
  const { user, RULES } = useContext(AuthContext);
  const { perform, dynamicCheckData, yes, no } = { ...defaultProps, ...args };

  let test = null;
  const initArgsCheck = {
    dynamicCheckData,
    user,
    rules: RULES,
  };

  if (perform instanceof Array) {
    // check array perform any true
    test = perform.some((action) => {
      const args = {
        ...initArgsCheck,
        action,
      };

      return checkPermission(args);
    });
  } else {
    // check single perform true
    const args = {
      ...initArgsCheck,
      action: perform,
    };

    test = checkPermission(args);
  }

  return test ? yes() : no();
};

export default Can;
