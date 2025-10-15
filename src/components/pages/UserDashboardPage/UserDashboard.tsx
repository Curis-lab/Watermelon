import { useEffect, useState } from "react";
import { useApi } from "../../../hooks/api";

const UserDashboardPage = () => {
  const { request } = useApi();
  const isAuthenticated = false;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request("http://localhost:3000/api/auth/me");
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, request]);

  return (
    <>
      <div>Dashboard</div>
      <div>{JSON.stringify(data)}</div>
      <div>Mentor Edit</div>
      <div>Mentor Availability</div>
    </>
  );
};

export default UserDashboardPage;
