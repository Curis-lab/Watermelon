import { ChatBubbleOutline, WorkOutline } from "@mui/icons-material";
import { Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mentorCategories } from "../../../static/mentor-category/mentor-cate";

const StyledContaierBox = styled(Link)(({ theme }) => {
  return {
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    marginInline: "auto",
    [theme.breakpoints.up("md")]: {
      width: "328px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "346px",
    },
  };
});

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/mentors");
        const data = await response.json();
        console.log("data", data);
        setMentors(data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  const renderMentorCard = (user: { _id: string; name: string }) => (
    <StyledContaierBox to={`/mentor/${user._id}`} key={user._id} style={{}}>
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255)",
          padding: "0.41em",
          transition: "opacity 0.3s",
          borderRadius: "4px",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <img
          style={{
            width: "100%",
            height: "13.94em",
            objectFit: "cover",
            borderRadius: "3px",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMh3TSq7RzA1ioI7Sj-43Sen_tDnhnftN7Lg&s"
          alt="mentor"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "1em",
              fontWeight: "bold",
            }}
          >
            {user.name}
          </Typography>
          <div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
            >
              <WorkOutline fontSize="small" />
              <Typography style={{ fontSize: "14px" }}>
                Program Manager, Product Manger at google
              </Typography>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
            >
              <ChatBubbleOutline fontSize="small" />
              <Typography style={{ fontSize: "12px", color: "#999" }}>
                41 sessions,(5 reviews)
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "rgba(16, 14, 14, 0.43)",
              padding: "0.41em",
              borderRadius: "3px",
            }}
          >
            <div>
              <Typography variant="caption">Experience</Typography>
              <Typography variant="h4">4 years</Typography>
            </div>
            <div>
              <Typography variant="caption">Avg.Attendees</Typography>
              <Typography variant="h4">100%</Typography>
            </div>
          </div>
        </div>
      </div>
    </StyledContaierBox>
  );

  const StyledCardController = styled("div")(({ theme }) => ({
    display: "grid",
    gap: "15px",
    [theme.breakpoints.up("md")]: {
      PaddingOutlined: "10px",
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.up("lg")]: {
      paddingInline: "20px",
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  }));
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        {mentorCategories.map((cat, idx) => (
          <div
            key={idx}
            style={{
              color: "#000",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {cat.icon}
            <p style={{ fontSize: "15px" }}>{cat.name}</p>
          </div>
        ))}
      </div>
      <StyledCardController>
        {mentors.map(renderMentorCard)}
      </StyledCardController>
    </div>
  );
};

export default Mentors;
