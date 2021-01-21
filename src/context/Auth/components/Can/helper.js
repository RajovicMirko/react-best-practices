export const checkPermission = ({ rules, user, action, dynamicCheckData }) => {
  const permissions = rules[user.role];
  if (!permissions) return false; // role is not present in the rules

  // STATIC CHECK LOGIC
  const staticPermissions = permissions.static;
  if (staticPermissions && staticPermissions.includes(action)) {
    return true; // static rule not provided for action
  }

  // DYNAMIC CHECK LOGIC
  const dynamicPermissions = permissions.dynamic;
  if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions[action];
    if (!permissionCondition) return false; // dynamic rule not provided for action
    return permissionCondition(dynamicCheckData);
  }

  return false;
};
