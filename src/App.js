import usePages from "hooks/usePages";

function App() {
  const { Router, RouterView, NavLink, navLinks } = usePages();

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
        <RouterView />
      </Router>
    </div>
  );
}

export default App;
