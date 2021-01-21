export const generateLinks = (props) => {
  const { pages, Can, MODULES, user } = props;

  return pages.filter((page) => {
    const { name, setup = {} } = page;
    const { isProtected = false, isNavLink = false } = setup;

    if (isProtected) {
      const module = MODULES.app.links[name];
      return (
        module &&
        Can({ perform: module, dynamicCheckData: { subRoles: user.subRoles } })
      );
    } else {
      if (isNavLink) return true;
    }

    return false;
  });
};
