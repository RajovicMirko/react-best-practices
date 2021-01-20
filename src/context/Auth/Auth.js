import { createContext, useState } from "react";
import config from "./config";
import Can from "./components/Can";

const AuthContext = createContext();

const authStateInit = {
  isAuthenticated: false,
  accessToken: "",
  user: {
    id: "1",
    role: "guest",
    subRoles: ["user:like"],
  },
};

export function AuthProvider(props) {
  const { children } = props;
  const [authState, setAuthState] = useState(authStateInit);

  const login = () => {};
  const handleAuthentication = () => {};
  const logout = () => {};

  const provide = {
    ...authState,
    ...config,
    login,
    handleAuthentication,
    logout,
    Can,
  };

  return (
    <AuthContext.Provider value={provide}>{children}</AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;
export default AuthContext;
