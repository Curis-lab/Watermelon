import { createContext, useCallback, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";

export const AuthContext = createContext();

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(null);

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

  const registerUser = useCallback(async () => {
    const response = await postRequest(
      `${baseUrl}/auth/register`,
      JSON.stringify(registerInfo)
    );
    if (response.error) {
      setRegisterError(response.message);
      return;
    }
    localStorage.setItem("User", JSON.stringify(response))
    setUser(response);
  }, [registerInfo]);

  return (
    <AuthContext.Provider value={{ user, registerInfo, updateRegisterInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
