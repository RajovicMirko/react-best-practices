export const getDeepKeys = (obj) => {
  var values = [];
  for (var value of Object.values(obj)) {
    if (typeof value === "object") {
      values.push(...getDeepKeys(value));
    } else {
      values.push(value);
    }
  }
  return values;
};

export const asOwnerCheck = ({ id, ownerId }) => {
  return !id || !ownerId ? false : id === ownerId;
};

export const subRoleCheck = ({ subRoles = [], validRoles = [] }) => {
  return validRoles.some((role) => subRoles.includes(role));
};

export const linkCheck = ({ subRoles = [], validRoles = [] }) => {
  return subRoleCheck({ subRoles, validRoles });
};
