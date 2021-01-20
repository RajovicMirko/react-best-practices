export const MODULES = {
  app: {
    links: {
      home: "home:link",
      user: "user:link",
      admin: "admin:link",
    },
    guest: "app:guest",
    user: "app:user",
    admin: "app:admin",
  },
  home: {
    list: {
      view: "home:list",
      edit: "home:list:edit",
      delete: "home:list:delete",
    },
  },
  user: {
    visit: "user:visit",
    countries: "user:countries",
  },
  admin: {
    visit: "admin:visit",
  },
};
