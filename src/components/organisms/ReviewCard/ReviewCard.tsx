import { Box, Typography } from "@mui/material";
import UserInfo from "../../molecules/UserInfo/UserInfo";

interface IReviewCard {
  mentorId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

function ReviewCard(p: IReviewCard) {
  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: '8px',
          marginBlock: '2px'
        }}
      >
        <Typography variant="caption">{ new Date(p.createdAt).toLocaleDateString()}</Typography>
        <Typography>{p.comment}</Typography>
        <UserInfo />
      </Box>
  );
}

export default ReviewCard;
