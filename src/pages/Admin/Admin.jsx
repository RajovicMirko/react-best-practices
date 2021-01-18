import usePages from "hooks/usePages";

export default function AdminPage() {
  const {
    Can,
    MODULES,
    auth: { user },
    Redirect,
  } = usePages();

  return Can({
    perform: MODULES.admin.visit,
    data: {
      userSubRoles: user.subRoles,
    },
    yes: () => {
      return <h2>Admin page</h2>;
    },
    no: () => <Redirect to="/" />,
  });
}
