import { Navigate } from "react-router-dom";
import { ISessionContextPros, useSession } from "../../hooks/useSession";
import { IRoute } from "../../interfaces/Route";

interface IProtectedRouteProps {
  route: IRoute;
}

function ProtectedRoute({ route }: IProtectedRouteProps) {
  const { isLoggedIn } = useSession() as ISessionContextPros;

  if (!isLoggedIn && route.type === "protected") {
    return <Navigate to="/" />;
  }

  return <route.component />;
}

export default ProtectedRoute;
