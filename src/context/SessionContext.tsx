import { useEffect, useState } from "react";
import { SessionContext } from "../hooks/useSession";

export const SessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(userData));
  };
  const logout = (data) => {
    if (data) {
      setIsLoggedIn(false);
      setUser(null);
      sessionStorage.removeItem("user");
    }
  };
  return (
    <SessionContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
