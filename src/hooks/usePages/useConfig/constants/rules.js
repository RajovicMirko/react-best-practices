import { ROLES, MODULES } from "./roles-modules";

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

const asOwnerCheck = ({ id, ownerId }) => {
  return !id || !ownerId ? false : id === ownerId;
};

const subRoleCheck = ({ subRoles = [], validRoles = [] }) => {
  return validRoles.some((role) => subRoles.includes(role));
};

export const RULES = {
  [ROLES.admin]: { static: getDeepKeys(MODULES) },

  [ROLES.guest]: {
    static: [MODULES.app.guest, MODULES.home.list.view],
    dynamic: {
      [MODULES.app.links.home]: subRoleCheck,
      [MODULES.app.links.user]: subRoleCheck,
      [MODULES.user.visit]: subRoleCheck,
      [MODULES.app.user]: subRoleCheck,
    },
  },

  [ROLES.user]: {
    static: [
      MODULES.app.links.home,
      MODULES.app.links.user,
      MODULES.app.guest,
      MODULES.app.user,
      MODULES.user.visit,
      MODULES.home.list.view,
    ],
    dynamic: {
      [MODULES.app.links.admin]: subRoleCheck,
      [MODULES.app.admin]: subRoleCheck,
      [MODULES.admin.visit]: subRoleCheck,
      [MODULES.home.list.edit]: asOwnerCheck,
      [MODULES.home.list.delete]: asOwnerCheck,
    },
  },
};
