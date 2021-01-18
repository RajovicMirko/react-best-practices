import { ROLES, SUB_ROLES, MODULES } from "./roles-modules";

export const RULES = {
  [ROLES.guest]: {
    static: [MODULES.home.guest, MODULES.home.list],
    dynamic: {
      [MODULES.user.visit]: ({ guestSubRoles = [] }) => {
        return guestSubRoles.includes(SUB_ROLES.userLike);
      },
    },
  },

  [ROLES.user]: {
    static: [
      MODULES.home.link,
      MODULES.user.link,
      MODULES.user.visit,
      MODULES.home.guest,
      MODULES.home.user,
      MODULES.home.list,
    ],
    dynamic: {
      [MODULES.home.list.edit]: ({ userId, ownerId }) => {
        return !userId || !ownerId ? false : userId === ownerId;
      },
      [MODULES.home.list.delete]: ({ userId, ownerId }) => {
        return !userId || !ownerId ? false : userId === ownerId;
      },
      [MODULES.admin.visit]: ({ userSubRoles = [] }) => {
        return userSubRoles.includes(SUB_ROLES.adminLike);
      },
      [MODULES.admin.link]: ({ subRoles = [] }) => {
        return subRoles.includes(SUB_ROLES.adminLike);
      },
    },
  },

  [ROLES.admin]: {
    static: [
      MODULES.home.link,
      MODULES.user.link,
      MODULES.admin.link,
      MODULES.user.visit,
      MODULES.admin.visit,
      MODULES.home.guest,
      MODULES.home.user,
      MODULES.home.admin,
      MODULES.home.list,
      MODULES.home.list.edit,
      MODULES.home.list.delete,
    ],
  },
};
