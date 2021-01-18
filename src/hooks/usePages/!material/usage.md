# How to use pages hook

- [How to use pages hook](#how-to-use-pages-hook)
    - [Description](#description)
  - [Example](#example)

### Description

```
in progres
```

## Example

```javascript
function App() {
  // data from auth context, class, etc...
  const usePagesProps = {
    auth: {
      isAuthenticated: true,
    },
  };

  const { Router, RouterView, navLinks } = usePages(usePagesProps);

  return (
    <div className="App">
      <Router>
        <RouterView />
      </Router>
    </div>
  );
}
```
