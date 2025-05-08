import { Typography ,Box, styled, IconButton} from "@mui/material";
import ProfileAvatar from "../../atoms/avatars/Avatar";
import { Edit } from "@mui/icons-material";

const StyledBox = styled(Box)(({theme})=>({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2)
}))

const ProfileInfo = () => {
    return ( <StyledBox>
        <ProfileAvatar imageurl="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"/>
        <Box>
            <Typography variant="h6">Min Nyan Lin</Typography>
            <Typography >Software Engineer</Typography>
        </Box>
        <IconButton>
            <Edit/>
        </IconButton>
    </StyledBox> );
}
 
export default ProfileInfo;