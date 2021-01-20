export const generateLinks = (props) => {
  const { pages, user, Can, SUB_ROLES, MODULES } = props;

  return pages.filter((page) => {
    const module = MODULES.app.links[page.name];

    return (
      module &&
      Can({
        perform: module,
        dynamicCheckData: {
          subRoles: user.subRoles,
          validRoles: [...Object.values(SUB_ROLES)],
        },
      })
    );
  });
};
