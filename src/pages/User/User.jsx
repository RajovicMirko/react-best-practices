import { useEffect, useContext } from "react";
import AuthContext from "context/Auth";
import useCountries from "hooks/useCountries";
import usePages from "hooks/usePages";

function User() {
  const { Redirect } = usePages();
  const { user, Can, SUB_ROLES, MODULES } = useContext(AuthContext);
  const { isLoading, countries, fetchCountries } = useCountries();

  const canVisitPage = Can({
    perform: MODULES.user.visit,
    dynamicCheckData: {
      subRoles: user.subRoles,
      validRoles: [SUB_ROLES.userLike],
    },
  });

  const canViewCountries = Can({
    perform: MODULES.user.countries,
    dynamicCheckData: {
      subRoles: user.subRoles,
      validRoles: [SUB_ROLES.userLike],
    },
  });

  useEffect(() => canViewCountries && fetchCountries(), []);

  if (canVisitPage) {
    switch (true) {
      case isLoading:
        return <div>Loading countries...</div>;
      default:
        return (
          <>
            <h2>User page</h2>
            {canViewCountries && JSON.stringify(countries[0])}
          </>
        );
    }
  } else {
    return <Redirect to="/not-auth" />;
  }
}

export default User;
