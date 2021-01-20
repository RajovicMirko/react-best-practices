import { useContext } from "react";
import AuthContext from "context/Auth";
import usePages from "hooks/usePages";

function App() {
  const { Router, RouterView, NavLink, navLinks } = usePages();
  const { user, Can, SUB_ROLES, MODULES } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <nav>
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="sub-title">
          <h4>Guest can see</h4>

          {Can({
            perform: MODULES.app.user,
            dynamicCheckData: {
              subRoles: user.subRoles,
              validRoles: [SUB_ROLES.userLike],
            },
            yes: () => <h4>User {user.name || "name-empty"} can see</h4>,
          })}

          {Can({
            perform: MODULES.app.admin,
            yes: () => <h4>Admin can see</h4>,
          })}
        </div>
        <RouterView />
      </Router>
    </div>
  );
}

export default App;
