import { Box, Typography, IconButton, Chip, Tooltip } from "@mui/material";
import { Add, LinkedIn, Settings } from "@mui/icons-material";
import ReviewCard from "../../organisms/ReviewCard/ReviewCard";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../../atoms/Bottom/RoundedBottom";
import MUITabs from "../../atoms/Tap/Tap";
import ProfileBanner from "../../molecules/ProfileBanner/ProfileBanner";

const reviews = [
  {
    mentorId: "m_8392",
    userId: "1",
    rating: 2,
    comment:
      "Good mentor who helped me understand the basics of React and guided me through building my first application. Their teaching style was clear and patient.",
    createdAt: Date.now(),
  },
  {
    mentorId: "m_4571",
    userId: "2",
    rating: 4,
    comment:
      "Very knowledgeable mentor with extensive industry experience. They provided valuable insights into best practices and helped me improve my code architecture significantly.",
    createdAt: Date.now(),
  },
  {
    mentorId: "m_9023",
    userId: "3",
    rating: 5,
    comment:
      "Excellent mentor who went above and beyond in our sessions. They not only helped with technical skills but also provided career guidance and introduced me to important networking opportunities.",
    createdAt: Date.now(),
  },
  {
    mentorId: "m_1647",
    userId: "4",
    rating: 3,
    comment:
      "Helpful sessions that improved my understanding of TypeScript and testing practices. The mentor was always well-prepared and provided good resources for further learning.",
    createdAt: Date.now(),
  },
  {
    mentorId: "m_7834",
    userId: "5",
    rating: 4,
    comment:
      "Great experience working with this mentor. They helped me prepare for technical interviews and provided detailed feedback on my projects. Their practical approach to problem-solving was particularly valuable.",
    createdAt: Date.now(),
  },
];

const authenticatedUserProfile = {
  overview: (
    <>
      <Typography variant="body1">
        I am a passionate mentee interested in web development. Currently
        working at Google, I enjoy learning new technologies and building
        innovative solutions. I'm excited to connect with mentors who can guide
        me on my software development journey.
      </Typography>
      <IconButton color="primary">
        <LinkedIn />
      </IconButton>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h3">Profile insights</Typography>
        <Typography color="primary">How do I get these?</Typography>
      </Box>
      <Box
        sx={{
          height: "200px",
          width: "100%",
          background: "blue",
          borderRadius: "20px",
        }}
      ></Box>
      <Typography variant="h3">Background</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          border: "1px solid blue",
          padding: "20px",
          marginBlock: "10px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Expertise</Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {[
              "web development",
              "react",
              "typescript",
              "javascript",
              "html",
              "css",
            ].map((skill, idx) => (
              <Chip label={skill} key={idx} />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Fluent</Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            {["English"].map((skill, idx) => (
              <Chip label={skill} key={idx} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  ),
  Reviews: (
    <>
      <Typography variant="h3">Reviews</Typography>
      {reviews.map((review, idx) => (
        <ReviewCard
          mentorId={review.mentorId}
          userId={review.userId}
          rating={review.rating}
          comment={review.comment}
          createdAt={review.createdAt}
          key={idx}
        />
      ))}
    </>
  ),
  Achivemets: <div>Acheivement</div>,
  GroupSession: <div>Group Session</div>,
};

function ProfileTemplate() {
  const role = "organizer";

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minWidth: "100%",
      }}
    >
      <img
        src="https://t4.ftcdn.net/jpg/04/89/68/23/360_F_489682374_ckc0OVyT6Av0NGcuYbwBSCxy62blF4CQ.jpg"
        alt="background Image"
        style={{
          minWidth: "100%",
          maxHeight: "200px",
        }}
      />
      <Box
        sx={{
          marginLeft: { sx: "10px", md: "70px" },
          marginTop: "-20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ProfileBanner
          {...{
            profilePic: "",
            name: "Joohn",
            hostBadge: "name",
            tagline: "12",
            verified: true,
            memberSatisfication: "very satified",
          }}
        >
          <ProfileBanner.HostBadge />
          <ProfileBanner.Verified/>
          <ProfileBanner.MemberSatisfaction/>
          <ProfileBanner.Tagline/>
        </ProfileBanner>

        <Box
          sx={{
            padding: "15px",
            display: "flex",
            alignItems: "start",
            gap: "10px",
          }}
        >
          {role == "organizer" && (
            <RoundedButton
              label="Create an event"
              fn={() => navigate("/start")}
              icon={<Add />}
            />
          )}
          <Tooltip title="Settings" arrow>
            <IconButton
              onClick={() => {
                navigate("/settings");
              }}
            >
              <Settings />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <MUITabs props={authenticatedUserProfile} />
      </Box>
    </Box>
  );
}

export default ProfileTemplate;
