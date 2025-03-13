import axios from "axios";
import { useEffect, useState } from "react";


const AdminDashboard = () => {
  const [users, setUsers] = useState<any[]>();

  useEffect(() => {
    let isMounted = true;
    //for cancelation token
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        //cancel the request if we need
        const response = await axios.get("/users", {
          signal: controller.signal,
        });
        console.log(response.data);
        if (isMounted) {
          setUsers(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
    return ()=>{
      isMounted = false;
      controller.abort();
    }
  }, []);
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h2>Users List</h2>
      { users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default AdminDashboard;
