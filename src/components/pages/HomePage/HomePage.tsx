import { Box, Typography } from "@mui/material";
import { OutboundOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { StyledNavigatorContainer } from "./HomePage.styled";

const navigatorCard = [
  {
    title: "Event",
    number: "01",
    description: "Live Events &",
    label: "Live Events",
    bgColor: "#iefie2",
    links: "/events",
  },
  {
    title: "Mentor",
    number: "02",
    description: "Live Events &",
    label: "Live Events",
    bgColor: "#929fff",
    links: "/mentors",
  },
  {
    title: "Share Experties",
    number: "03",
    description: "Live Events &",
    label: "Live Events",
    bgColor: "#94994",
    links: "",
  },
];

const NavigatorComponent = ({
  title,
  number,
  bgColor,
  links,
  fn,
}: {
  title: string;
  number: string;
  bgColor: string;
  links: string;
  fn: () => void;
}) => {
  const navigate = useNavigate();
  console.log(bgColor);
  return (
    <div>
      <h1
        style={{
          WebkitTextStroke: "1px white",
          color: "transparent",
          fontSize: "60px",
        }}
        onClick={fn}
      >
        {number}
      </h1>
      <div
        style={{
          background: "red",
          height: "300px",
          width: "300px",
          borderTopLeftRadius: "150px",
          borderTopRightRadius: "150px",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>{title}</h2>
        <p>Live Events & Workshops – Learn with the Community</p>
        <Box
          sx={{
            padding: '10px ',
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              background: 'white',
              borderRadius: '10px'
            },
          }}
          onClick={() => navigate(links)}
        >
          <p>Live Workshops & Events</p>
          <div>
            <OutboundOutlined sx={{ fontSize: 60 }} />
          </div>
        </Box>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#03032B",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          marginTop: "50px",
        }}
      >
        <h1>
          Get 1:1 mentorship or join live events -{" "}
          <span
            style={{
              display: "inline-block",
              background: "#F4B508",
              paddingInline: "20px",
              paddingBlock: "10px",
              borderRadius: "40px 0",
              color: "black",
            }}
          >
            All in one place
          </span>
        </h1>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Link
          to="/onboarding"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography
            sx={{
              background: "linear-gradient(135deg, #FF5733, #FFC300)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              fontSize: "25px",
              padding: "10px 20px",
              border: "1px solid white",
              borderRadius: "30px",
              marginBlock: "20px",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            Let's get start
          </Typography>
        </Link>
      </div>

      <StyledNavigatorContainer>
        {navigatorCard.map((item, idx) => (
          <NavigatorComponent
            key={idx}
            title={item.title}
            number={item.number}
            bgColor={item.bgColor}
            links={item.links}
            fn={() => {}}
          />
        ))}
      </StyledNavigatorContainer>
    </div>
  );
};

export default HomePage;
