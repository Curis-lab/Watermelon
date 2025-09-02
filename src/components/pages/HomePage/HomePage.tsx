import { Box, Button, Typography } from "@mui/material";
import image from "../../../assets/events.jpg";
import phone from "../../../assets/phone.jpg";

const HomePage = () => {
  return (
    <Box>
      {/* TODO: Implement remaining sections:
        - Problem & Solution Section
        - Features & Benefits Section with:
          - Event Discovery
          - Mentor Finding
          - Dashboard Management 
          - Community Building
        - Social Proof Section with:
          - User Testimonials
          - Partner Logos
        - How It Works Section with 4 steps
        - Target Audience Section for:
          - Mentees
          - Mentors
        - Final CTA Section
        - Additional Sections for:
          - Event Organizers
          - Corporate Solutions
      */}
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          position: "relative",
          padding: "15px",
        }}
      >
        <img
          src={image}
          alt="events photo"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            width: "100%",
            minHeight: "100vh",
            borderRadius: "20px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "absolute",
            top: "0",
            color: "white",
            height: "100%",
            gap: "30px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              lineHeight: "50px",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "2.5rem",
              padding: "10px",
            }}
          >
            Discover Events, Find Mentors, Build Connections
          </Typography>
          <Typography
            sx={{
              display: "block",
              textAlign: "center",
              paddingInline: "15%",
              letterSpacing: "0.5px",
              wordSpacing: "1px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            maxime quia, nemo laboriosam sunt praesentium maiores quos veniam
            consequatur dicta cum voluptate aliquam nulla fugiat culpa pariatur,
            provident recusandae incidunt?
          </Typography>
          <Button
            sx={{
              alignSelf: "center",
              border: "1px solid white",
              borderRadius: "30px",
              padding: "15px 30px",
            }}
          >
            Register
          </Button>
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
        <Typography
          sx={{
            fontSize: "30px",
          }}
        >
          Discover Opportunities & Grow Your Network
        </Typography>
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
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          padding: "15px",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            width: "40%",
          }}
        >
          <img
            src={phone}
            alt="phone"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              minHeight: "100%",
              width: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            background: "#000",
            width: "60%",
            color: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "20px",
              color: "#fff",
            }}
          >
            <Typography variant="h2">How it works</Typography>

            <Box>
              <Box>
                <Typography variant="h3">1. Sign Up</Typography>
                <Typography>
                  Create your account to get started with our platform
                </Typography>
              </Box>

              <Box>
                <Typography variant="h3">2. Explore</Typography>
                <Typography>
                  Browse through our extensive collection of resources and tools
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography variant="h3">3. Get Started</Typography>
                <Typography>
                  Begin your journey and make the most of our platform's
                  features
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
