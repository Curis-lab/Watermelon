import { Box, Typography } from "@mui/material";
import style from "./style.module.css";
// import { positionalKeys } from "framer-motion";
const HomePage = () => {
  return (
    <Box>
      <Box
        sx={{
          background: "#000",
          minHeight: "90vh",
          minWidth: "100%",
          borderRadius: "10px",
        }}
      >
        <Box sx={{
          position: 'relative',
          height: '90vh',
          top: '40vh',
          left: '40%'
        }}>

        <div className={style.energy}>
          <span
            style={{ "--clr": "#fbad04", "--i": "18px", "--d": "2.5s" }}
          ></span>
          <span
            style={{ "--clr": "#03a1d9", "--i": "13px", "--d": "5s" }}
          ></span>
          <span
            style={{ "--clr": "#f7036d", "--i": "15px", "--d": "7.5s" }}
          ></span>
          <span
            style={{ "--clr": "#13ff16", "--i": "20px", "--d": "10s" }}
          ></span>
        </div>
        </Box>
        <Box
          sx={{
            gap: "1.2rem",
            color: "white",
            display: "flex",
            flexDirection: "column",
            maxWidth: "50rem",
            position: 'absolute',
            top:'25%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "3rem",
              fontWeight: "500",
            }}
          >
            Discover Events, Find Mentors, Build Connections
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              lineHeight: "1.5em",
              fontSize: "1rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            maxime quia, nemo laboriosam sunt praesentium maiores quos veniam
            consequatur dicta cum voluptate aliquam nulla fugiat culpa pariatur,
            provident recusandae incidunt?
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: "100vh",
          background: "#fff",
          paddingInline: "15px",
          paddingBlock: "10%",
        }}
      >
        <Typography variant="caption">Featured & Benefits topics</Typography>
        <div
        className={style.autoShow}
          style={{
            fontSize: "30px",
          }}
        >
          Discover Opportunities & Grow Your Network
        </div>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              md: "repeat(3, 1fr)",
              xs: "1fr",
            },
            gridTemplateRows: {
              md: "repeat(1, 320px)",
              xs: "repeat(3, 320px)",
            },
            gap: "20px",
            marginTop: "60px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              background: "#000",
              height: "100%",
              borderRadius: "10px",
            }}
          >
            1
          </Box>
          <Box
            sx={{
              width: "100%",
              background: "#000",
              height: "100%",
              borderRadius: "10px",
            }}
          >
            1
          </Box>
          <Box
            sx={{
              width: "100%",
              background: "#000",
              height: "100%",
              borderRadius: "10px",
            }}
          >
            1
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
