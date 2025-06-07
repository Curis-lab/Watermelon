import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userInfo, setUserInfo] = useState(null);

  const [authState, setAuthState] = useState(false);

  const isAuthenticated = () => {
    if (userInfo) {
      return userInfo.isLoggedIn;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/auth/me", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.log("this is error", error);
      }
    };

    fetchUserInfo().then((data) => {
      if (data.isLoggedIn) {
        setUserInfo(data);
        setAuthState(data.isLoggedIn);
      } else {
        setAuthState(data.isLoggedIn);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authState,
        isAuthenticated,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
