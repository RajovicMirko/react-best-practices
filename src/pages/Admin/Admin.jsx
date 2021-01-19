import usePages from "hooks/usePages";

export default function AdminPage() {
  const {
    Can,
    MODULES,
    SUB_ROLES,
    auth: { user },
    Redirect,
  } = usePages();

  return Can({
    perform: MODULES.admin.visit,
    data: {
      subRoles: user.subRoles,
      validRoles: [SUB_ROLES.adminLike],
    },
    yes: () => {
      return <h2>Admin page</h2>;
    },
    no: () => <Redirect to="/" />,
  });
}
