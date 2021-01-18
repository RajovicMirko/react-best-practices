export const ROLES = {
  guest: "guest",
  user: "user",
  admin: "admin",
};

export const SUB_ROLES = {
  adminLike: "admin-like",
  userLike: "user-like",
};

export const MODULES = {
  home: {
    link: "home:link",
    guest: `home:${ROLES.guest}`,
    user: `home:${ROLES.user}`,
    admin: `home:${ROLES.admin}`,
    list: "home:list",
    edit: "home:list:edit",
    delete: "home:list:delete",
  },
  user: {
    link: "user:link",
    visit: "user:visit",
  },
  admin: {
    link: "admin:link",
    visit: "admin:visit",
  },
};
