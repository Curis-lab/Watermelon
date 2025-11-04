import ProfileTemplate from "../../templates/ProfileTemplate/ProfileTemplate";
// import { useEffect, useState } from "react";
// import { useApi } from "../../../hooks/api";

// interface User {
//   name: string;
//   profileImage: string;
//   expertise: string;
// }

const ProfilePage = () => {
  // const [user, setUser] = useState<User | null>(null);
  // const { request } = useApi();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const result = await request("http://localhost:3000/api/auth/me", {
  //       method: "GET",
  //       credentials: 'include'
  //     });
  //     if (result.ok) {
  //       const userData = await result.json();
  //       setUser(userData.user);
  //     }
  //   };
  //   fetchUser();
  // }, [request]);

  // console.log(user);
  return (
      <ProfileTemplate/>
  );
};

export default ProfilePage;
