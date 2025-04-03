import React, { createContext, useCallback, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  
  const [user, setUser] = useState(null);

  const [authState, setAuthState] = useState(() => {
    const storedAuthState = localStorage.getItem("authState");
    return storedAuthState ? JSON.parse(storedAuthState) : { token: null, expiresAt: null };
  });

  const [registerInfo, setRegitsterInfo] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const updateRegisterInfo = useCallback(
    (info: { email: string; name: string; passwprd: string; role: string }) => {
      setRegitsterInfo((prev) => ({ ...prev, ...info }));
    },
    [setRegitsterInfo]
  );

  const setToken = (data: { token: string; expiresAt: number }) => {
    const newAuthState = {
      token: data.token,
      expiresAt: data.expiresAt,
    };
    setAuthState(newAuthState);
    localStorage.setItem("authState", JSON.stringify(newAuthState));
  };

  const clearToken = () => {
    setAuthState({
      token: null,
      expiresAt: null,
    });
    localStorage.removeItem("authState");
  };

  const isAuthenticated = () => {
    console.log("this is auth state on isAuthenticated", authState);
    return (
      authState.token &&
      (!authState.expiresAt || authState.expiresAt > Date.now())
    );
  };

  useEffect(() => {
    const storedAuthState = localStorage.getItem("authState");
    if (storedAuthState) {
      setAuthState(JSON.parse(storedAuthState));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        authState,
        setUser,
        setToken,
        clearToken,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
