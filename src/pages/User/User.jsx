import usePages from "hooks/usePages";

function User() {
  const {
    Can,
    MODULES,
    auth: { user },
    Redirect,
  } = usePages();

  return Can({
    perform: MODULES.user.visit,
    data: {
      guestSubRoles: user.subRoles,
    },
    yes: () => {
      return <h2>User page</h2>;
    },
    no: () => <Redirect to="/" />,
  });
}

export default User;
