import { Avatar, styled } from "@mui/material";

const StyledAvatar = styled(Avatar)({
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid #000'
});

const ProfileAvatar = ({imageurl}: {imageurl:string}) => {
    return ( <StyledAvatar src={imageurl} alt="avatar"/>  );
}
 
export default ProfileAvatar;