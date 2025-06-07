import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ProfilePageLayout from "../../templates/ProfilePageLayout";
import { useApi } from "../../../hooks/api";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { request } = useApi();

  useEffect(() => {
    const fetchUser = async () => {
      const result = await request("http://localhost:3000/api/auth/me", {
        method: "GET",
        credentials: 'include'
      });
      if (result.ok) {
        const userData = await result.json();
        setUser(userData.user);
      }
    };
    fetchUser();
  }, []);
  return (
    <Box>
      {user && (
        <ProfilePageLayout
          header={{
            name: user.name,
            imageUrl: user.profileImage,
            expertise: user.expertise,
          }}
        />
      )}

    </Box>
  );
};

export default ProfilePage;
