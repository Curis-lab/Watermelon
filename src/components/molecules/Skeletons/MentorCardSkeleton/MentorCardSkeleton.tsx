import { Skeleton, Box } from "@mui/material";
import { StyledMentorCardContainerBox } from "../../../organisms/MentorCard/MentorCard.style";

export function MentorCardSkeletion() {
  return (
    <StyledMentorCardContainerBox>
      <Skeleton
        variant="rectangular"
        width="100%"
        height="55%"
        animation="wave"
        sx={{
          borderRadius: "5px",
        }}
      />
      <Box
        sx={{
          height: "20%",
        }}
      >
        <Skeleton variant="text" height="30%" width="50%" animation="wave" />
        <Skeleton variant="rectangular" height="65%" animation="wave" />
      </Box>
      <Skeleton
        variant="rectangular"
        width="100%"
        height="20%"
        animation="wave"
        sx={{
          borderRadius: "5px",
        }}
      />
    </StyledMentorCardContainerBox>
  );
}
