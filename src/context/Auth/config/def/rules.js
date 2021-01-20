import { getDeepKeys, asOwnerCheck, subRoleCheck } from "./rules-helpers";
import { ROLES } from "./roles";
import { MODULES } from "./modules";

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
      MODULES.home.list.view,
      MODULES.user.visit,
      MODULES.user.countries,
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
