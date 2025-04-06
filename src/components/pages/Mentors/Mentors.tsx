import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/mentors");
        const data = await response.json();
        setMentors(data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  const renderMentorCard = (user) => (
    <Link
      to={`/mentor/${user._id}`}
      key={user._id}
      style={{
        padding: "10px",
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          padding: "20px",
          // textAlign: "center",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMh3TSq7RzA1ioI7Sj-43Sen_tDnhnftN7Lg&s"
          alt="mentor"
        />
        <div
          style={{
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h3">
            {user.name}
          </Typography>
          <div>
            <Typography style={{fontSize: '14px'}}>Program Manager, Product Manger at google</Typography>
            <Typography style={{fontSize: '12px', color: '#999'}}>41 sessions,(5 reviews)</Typography>
          </div>
          <div>
            <Typography variant="caption">Experience</Typography>
            <Typography variant="h4">4 years</Typography>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div style={{ height: "100vh", backgroundColor: "#03032B" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
        }}
      >
        {mentors.map(renderMentorCard)}
      </div>
    </div>
  );
};

export default Mentors;
