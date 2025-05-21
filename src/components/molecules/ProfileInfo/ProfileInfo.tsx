import { Typography ,Box, styled, IconButton} from "@mui/material";
import ProfileAvatar from "../../atoms/avatars/Avatar";
import { Edit } from "@mui/icons-material";

const StyledBox = styled(Box)(({theme})=>({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2)
}))
interface IProfileInfo{
    name:string;
    expertise: string;
    imageUrl:string;
}
const ProfileInfo = ({info}:{info: IProfileInfo}) => {
    return ( <StyledBox>
        
        <ProfileAvatar imageurl={info.imageUrl}/>
        <Box>
            <Typography variant="h6">{info.name}</Typography>
            <Typography >{info.expertise}</Typography>
        </Box>
        <IconButton>
            <Edit/>
        </IconButton>
    </StyledBox> );
}
 
export default ProfileInfo;