import { Google } from "@mui/icons-material";
import { Button, Paper, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MentorProfile = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/user/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, [id]);

  const StyledDescriptionContainer = styled('div')(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    [theme.breakpoints.up('md')]:{
      flexDirection: 'row'
    },
    [theme.breakpoints.up('lg')]:{
      flexDirection: 'row'
    }
  }))
  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div>
        <img
          src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            border: "1px solid #000",
            borderRadius: "50%",
          }}
          alt="mentor"
        />
        <div>
          <Typography variant="h6">Emily Curis</Typography>
          <Typography>UI/Ux Designer</Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Google fontSize="small" />
            <Typography variant="caption">
              Elason Group Inc. Los Angules, USA
            </Typography>
          </div>
          <div
            style={{
              backgroundColor: "#333",
              color: "#efefef",
              padding: "10px 20px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={()=>navigator('/inbox')}
          >
            Message
          </div>
        </div>
      </div>
      <StyledDescriptionContainer>
        <div style={{maxWidth: '1000px'}}>
          {id} this is mentor profile
          {user && JSON.stringify(user)}
          <Typography variant="h3">Bio</Typography>
          <Typography>
            Emily Curis is a seasoned UI/UX Designer with over 10 years of
            experience in the industry. She has worked with various high-profile
            clients and has a passion for creating intuitive and user-friendly
            designs. Emily is currently working at Elason Group Inc. in Los
            Angeles, USA, where she leads a team of talented designers. In her
            free time, she enjoys mentoring aspiring designers and sharing her
            knowledge through workshops and online courses.
          </Typography>
        </div>
        <div>
          <Paper
            sx={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h2">Available sessions</Typography>
              <Typography variant="caption">
                Book 1:1 sessions from the options based on your needs
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "7px 10px",
                border: "1px solid #000",
                borderRadius: "10px",
              }}
            >
              <div>
                <Typography variant="h3">Mentorship Session</Typography>
                <Typography variant="caption">30 minutes</Typography>
              </div>
              <Button variant="contained" size="small">
                Book
              </Button>
            </div>
          </Paper>
        </div>
      </StyledDescriptionContainer>
    </div>
  );
};

export default MentorProfile;
