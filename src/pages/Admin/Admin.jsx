import usePages from "hooks/usePages";
import { useContext } from "react";
import AuthContext from "context/Auth";

export default function AdminPage() {
  const { Redirect } = usePages();
  const { user, Can, SUB_ROLES, MODULES } = useContext(AuthContext);

  return Can({
    perform: MODULES.admin.visit,
    dynamicCheckData: {
      subRoles: user.subRoles,
      validRoles: [SUB_ROLES.adminLike],
    },
    yes: () => {
      return <h2>Admin page</h2>;
    },
    no: () => <Redirect to="/not-auth" />,
  });
}
