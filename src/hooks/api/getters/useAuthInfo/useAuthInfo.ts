import { ISessionContextPros, useSession } from "../../../useSession";


function useAuthInfo() {
  const { isLoggedIn, user, logout } = useSession() as ISessionContextPros;

  return {
    isLoggedIn,
    logout,
    user: {
      name:user?.name,
    },
  };
}

export default useAuthInfo;
