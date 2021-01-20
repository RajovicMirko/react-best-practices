import { useEffect, useContext } from "react";
import AuthContext from "context/Auth";
import useCountries from "hooks/useCountries";
import usePages from "hooks/usePages";

function User() {
  const { Redirect } = usePages();
  const { user, Can, SUB_ROLES, MODULES } = useContext(AuthContext);
  const { isLoading, countries, fetchCountries } = useCountries();

  useEffect(() => fetchCountries(), []);

  return Can({
    perform: MODULES.user.visit,
    dynamicCheckData: {
      subRoles: user.subRoles,
      validRoles: [SUB_ROLES.userLike],
    },
    yes: () => {
      switch (true) {
        case isLoading:
          return <div>Loading countries...</div>;
        default:
          return (
            <>
              <h2>User page</h2>
              {Can({
                perform: MODULES.user.countries,
                yes: () => {
                  return JSON.stringify(countries[0]);
                },
              })}
            </>
          );
      }
    },
    no: () => <Redirect to="/" />,
  });
}

export default User;
