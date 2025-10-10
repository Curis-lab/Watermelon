import { Box, Button, Paper, styled, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ContentHeader from "../../molecules/ContentHeader/ContentHeader";
import MentorProfileHeader from "../../organisms/MentorProfileHeader/MentorProfileHeader";
import ContentSection from "../../organisms/ContentSection/ContentSection";
import { useGetMentorProfile } from "../../../hooks/useGetMentorProfile";
import ReviewCard from "../../organisms/ReviewCard/ReviewCard";
import { useReviews } from "../../../hooks/api/getters/useReviews/useReviews";

const StyledMentorProfileLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  paddingBlock: "40px",
  [theme.breakpoints.down("sm")]: {
    paddingInline: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    paddingInline: "30px",
  },
  [theme.breakpoints.up("md")]: {
    paddingInline: "60px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingInline: "100px",
  },
}));

const StyledDescriptionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

/**
 * props requirement for this page
 * 1. mentor = {name, role, company, bio}
 * 2. available session
 */

const MentorProfile = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const { data: mentorProfile, isError: mentorProfileError } =
    useGetMentorProfile(id ? id : "");
  const { reviews, error, loading } = useReviews();

  if (mentorProfileError) {
    return null;
  }

  return (
    <StyledMentorProfileLayout>
      <MentorProfileHeader
        {...mentorProfile}
        navigator={() => navigator("/inbox")}
      />
      <StyledDescriptionContainer>
        <Box
          sx={{
            minWidth: "40%",
            flex: 1,
          }}
        >
          <ContentSection title="About me" description={mentorProfile.bio} />
          <Typography variant="h2">Reviews</Typography>
          {reviews.length > 0 &&
            reviews.map((review) => (
              <ReviewCard {...review} key={review._id} />
            ))}
        </Box>
        <Paper
          sx={{
            minWidth: "400px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <ContentHeader
            title="Available sessions"
            subtitle="Book 1:1 sessions from the options based on your needs"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "10px 15px",
              border: "1px solid #000",
              borderRadius: "10px",
            }}
          >
            <ContentHeader title="Mentorship Session" subtitle="30 minutes" />
            <Button variant="contained" size="small">
              Book
            </Button>
          </div>
        </Paper>
      </StyledDescriptionContainer>
    </StyledMentorProfileLayout>
  );
};

export default MentorProfile;
