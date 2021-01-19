import { ROLES, SUB_ROLES, MODULES } from "./roles-modules";

function getDeepKeys(obj) {
  var values = [];
  for (var value of Object.values(obj)) {
    if (typeof value === "object") {
      values.push(...getDeepKeys(value));
    } else {
      values.push(value);
    }
  }
  return values;
}

export const RULES = {
  [ROLES.admin]: { static: getDeepKeys(MODULES) },

  [ROLES.guest]: {
    static: [MODULES.app.guest, MODULES.home.list.view],
    dynamic: {
      [MODULES.user.visit]: ({ subRoles = [] }) => {
        return subRoles.includes(SUB_ROLES.userLike);
      },
      [MODULES.user.link]: ({ subRoles = [] }) => {
        return subRoles.includes(SUB_ROLES.userLike);
      },
    },
  },

  [ROLES.user]: {
    static: [
      MODULES.app.links.home,
      MODULES.app.links.user,
      MODULES.user.link,
      MODULES.user.visit,
      MODULES.app.guest,
      MODULES.app.user,
      MODULES.home.list.view,
    ],
    dynamic: {
      [MODULES.home.list.edit]: ({ userId, ownerId }) => {
        return !userId || !ownerId ? false : userId === ownerId;
      },
      [MODULES.home.list.delete]: ({ userId, ownerId }) => {
        return !userId || !ownerId ? false : userId === ownerId;
      },
      [MODULES.admin.visit]: ({ subRoles = [] }) => {
        return subRoles.includes(SUB_ROLES.adminLike);
      },
      [MODULES.app.links.admin]: ({ subRoles = [] }) => {
        return subRoles.includes(SUB_ROLES.adminLike);
      },
    },
  },
};
