import { useContext, createContext } from "react";

export const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);
