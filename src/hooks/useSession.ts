import { useContext, createContext } from "react";
import { IMentor } from "../interfaces/Mentor";
import { IUserLogin } from "../context/SessionContext";

export interface ISessionContextPros{
    isLoggedIn:boolean;
    user: IMentor | null,
    logout:()=>void,
    loading:boolean,
    login:(userData:IUserLogin)=>void
    
}

export const SessionContext = createContext<ISessionContextPros|undefined>(undefined);

export const useSession = () => useContext(SessionContext);
