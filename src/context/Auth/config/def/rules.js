import {
  getDeepKeys,
  asOwnerCheck,
  subRoleCheck,
  linkCheck,
} from "./rules-helpers";
import { ROLES, SUB_ROLES } from "./roles";
import { MODULES } from "./modules";

export const RULES = {
  [ROLES.admin]: { static: getDeepKeys(MODULES) },

  [ROLES.guest]: {
    static: [MODULES.app.guest, MODULES.home.list.view],
    dynamic: {
      [MODULES.app.links.home]: ({ subRoles }) => {
        const validRoles = [SUB_ROLES.userLike];
        return linkCheck({ subRoles, validRoles });
      },
      [MODULES.app.links.user]: ({ subRoles }) => {
        const validRoles = [SUB_ROLES.userLike];
        return linkCheck({ subRoles, validRoles });
      },
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
      MODULES.home.list.view,
      MODULES.user.visit,
      MODULES.user.countries,
    ],
    dynamic: {
      [MODULES.app.links.admin]: ({ subRoles }) => {
        const validRoles = [SUB_ROLES.adminLike];
        return linkCheck({ subRoles, validRoles });
      },
      [MODULES.admin.visit]: subRoleCheck,
      [MODULES.app.admin]: subRoleCheck,
      [MODULES.home.list.edit]: asOwnerCheck,
      [MODULES.home.list.delete]: asOwnerCheck,
    },
  },
};
