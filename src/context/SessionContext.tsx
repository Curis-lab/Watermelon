import React, { useEffect, useState } from "react";
import { SessionContext } from "../hooks/useSession";
import { IMentor } from "../interfaces/Mentor";

export interface IUserLogin {
  name: string;
  email: string;
  password: string;
}
export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<IMentor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data } = JSON.parse(
      (sessionStorage.getItem("user") as string) || "{}"
    );

    if (data) {
      setUser(data.user);
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const login = (userData: IUserLogin) => {
    setIsLoggedIn(true);
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(userData));
  };
  const logout = (): void => {
    if (user) {
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
