import { Box, Tabs, Tab, Typography, IconButton, Chip } from "@mui/material";
import React from "react";
import ProfileBanner from "../../molecules/ProfileBanner/ProfileBanner";
import { LinkedIn, Settings } from "@mui/icons-material";
import ReviewCard from "../../organisms/ReviewCard/ReviewCard";
import { useNavigate } from "react-router-dom";

interface TabPanelProps<T> {
  children?: React.ReactNode;
  index: T;
  value: number;
}

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

function CustomTabPanel<T>(props: TabPanelProps<T>) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProfileTemplate() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
            name: "Min Min",
            title: "Seniro UX Designer at Tech Coorporate, France",
            role: "mentee",
            expertise: [
              "web development",
              "UX design",
              "UI design",
              "user research",
              "accessibility",
            ],
            company: "Google",
            location: "Bangkok.TH",
          }}
        >
          <ProfileBanner.JobTitle />
          <ProfileBanner.ExpertiseTags />
          <ProfileBanner.Location />
        </ProfileBanner>
        <Box sx={{
          padding: '15px'
        }}>
          <IconButton onClick={()=>{navigate('/settings')}}>
            <Settings />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Reviews" {...a11yProps(1)} />
            <Tab label="Achievements" {...a11yProps(2)} />
            <Tab label="Group sessions" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel<number> value={value} index={0}>
          <Typography variant="body1">
            I am a passionate mentee interested in web development. Currently
            working at Google, I enjoy learning new technologies and building
            innovative solutions. I'm excited to connect with mentors who can
            guide me on my software development journey.
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
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Typography variant="h3">Reviews</Typography>
          {reviews.map((review, idx) => (
            <ReviewCard {...review} key={idx} />
          ))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item Three
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

export default ProfileTemplate;
