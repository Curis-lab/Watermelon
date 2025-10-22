import { Navigate } from "react-router-dom";
import { useSession } from "../../hooks/useSession";
import { IRoute } from "../../interfaces/Route";

interface IProtectedRouteProps {
  route: IRoute;
}

function ProtectedRoute({ route }: IProtectedRouteProps) {
  const { isLoggedIn } = useSession();

  if (!isLoggedIn && route.type === "protected") {
    return <Navigate to="/" />;
  }

  return <route.component />;
}

export default ProtectedRoute;
