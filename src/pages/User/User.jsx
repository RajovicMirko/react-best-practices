import usePages from "hooks/usePages";

function User() {
  const {
    Can,
    SUB_ROLES,
    MODULES,
    auth: { user },
    Redirect,
  } = usePages();

  return Can({
    perform: MODULES.user.visit,
    dynamicCheckData: {
      subRoles: user.subRoles,
      validRoles: [SUB_ROLES.userLike],
    },
    yes: () => {
      return <h2>User page</h2>;
    },
    no: () => <Redirect to="/" />,
  });
}

export default User;
