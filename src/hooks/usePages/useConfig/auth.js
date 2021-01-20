// connect with app auth from auth context, class, etc...
const defaultAuth = {
  isAuthenticated: false,
  user: {
    id: "1",
    name: "Mirko",
    role: "user",
    subRoles: [],
  },
};

export const auth = null || defaultAuth;
