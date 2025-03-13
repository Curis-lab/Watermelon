import { useEffect , useState} from "react";
import { getSingleUser } from "../../../lib/api";
import { Box} from "@mui/material";
import ProfilePageLayout from "../../templates/ProfilePageLayout";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    useEffect(()=>{
    const fetchUser = async () => {
        try {
            const userData = await getSingleUser();
            setUser(userData);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    fetchUser();
    },[])
    return ( <Box>
        <ProfilePageLayout/>
        {JSON.stringify(user)}
    </Box>  );
}
 
export default ProfilePage;