import { useSession } from "../../../useSession";
/**
 * responsity: collect all authentication requirement need.
 */


function useAuthInfo() {
  const { isLoggedIn, user, logout } = useSession();

  return {
    isLoggedIn,
    logout,
    user: {
      name:user?.data?.user?.name,
    },
  };
}

export default useAuthInfo;
