import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Mentors = () => {
  //fetch all mentors
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/user");
        const data = await response.json();
        setMentors(data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div>
      <div>
        <h1>Mentors</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "20px",
          }}
        >
          {mentors.users &&
            mentors.users.map((user, idx) => (
              <Link

              to={`/mentor/${user._id}`}
                key={idx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #000",
                  borderRadius: "20px",
                  padding: "10px",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "20px",
                    objectFit: "cover",
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMh3TSq7RzA1ioI7Sj-43Sen_tDnhnftN7Lg&s"
                  alt="mentor"
                />
                <div>
                  <Typography variant="h5">{user.name}</Typography>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Mentors;
