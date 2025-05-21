import { Box, Typography } from "@mui/material";
import { OutboundOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const navigatorCard = [
  {
    title: "Event",
    number: "01",
    description: "Live Events &",
    label: "Live Events",
    bgColor: "#iefie2",
  },
  {
    title: "Mentor",
    number: "02",
    description: "Live Events &",
    label: "Live Events",
    bgColor: "#929fff",
  },
  {
    title: "Share Experties",
    number: "03",
    description: "Live Events &",
    label: "Live Events",
    bgColor: "#94994",
  },
];

const NavigatorComponent = ({
  title,
  number,
  bgColor,
  fn,
}: {
  title: string;
  number: string;
  bgColor: string;
  fn: () => void;
}) => {
  console.log(bgColor);
  return (
    <div>
      <h1
        style={{
          WebkitTextStroke: "1px white",
          color: "transparent",
          fontSize: "60px",
        }}
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
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          onClick={fn}
        >
          <p>Live Workshops & Events</p>
          <div>
            <OutboundOutlined sx={{ fontSize: 60 }} />
          </div>
        </div>
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
        <Box
          sx={{
            borderRadius: "40px",
            padding: "16px",
            background: `
          linear-gradient(white, white) padding-box, 
          linear-gradient(135deg,rgb(223, 69, 30),rgb(103, 95, 255),rgb(123, 254, 127)) border-box
        `,
            border: "4px solid transparent",
            backgroundClip: "padding-box, border-box",
            width: "fit-content",
          }}
        >
          <Link to="/onboarding">
            <Typography
              sx={{
                background: "linear-gradient(135deg, #FF5733, #FFC300)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              Let's get start
            </Typography>
          </Link>
        </Box>
      </div>

      {/** end for button */}

      {/** should know the size the div that can change grid of the row */}
      <div style={{ display: "flex", gap: "20px", minWidth: "940px" }}>
        {navigatorCard.map((item, idx) => (
          <NavigatorComponent
            key={idx}
            title={item.title}
            number={item.number}
            fn={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
