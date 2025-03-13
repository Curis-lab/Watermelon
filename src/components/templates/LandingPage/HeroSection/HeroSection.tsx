import { styled, TextField, Typography } from "@mui/material";
import MUIModel from "../../../atoms/Models";

const HeroSectionWrapper = styled("div")({
  display: "flex",
  maxHeight: "100vh",
});
const ContentWrapper = styled("div")({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const ImageWrapper = styled("div")(({ theme }) => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const StyledImageFrame = styled("img")(({ theme }) => ({
  width: "500px",
  borderRadius: theme.shape.borderRadiusLarge,
}));


const StyledModalContainer = styled('div')(({theme})=>({
    backgroundColor: '#fff',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    alignItems: 'center',
    width: '500px',
}));
const StyledModalBody = styled('div')(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
}))
const HeroSection = () => {
  const Login = () => <StyledModalContainer>
    <Typography variant="h5">Finish signing up</Typography>
    <StyledModalBody>
        <TextField label="name" placeholder="Enter your name"/>
        <TextField label="email" placeholder="Enter your email"/>
        <TextField label="email" placeholder="Enter your email"/>
    </StyledModalBody>
  </StyledModalContainer>;

  return (
    <>
      <MUIModel children={<Login />} />
      <HeroSectionWrapper>
        <ContentWrapper>
          <div>
            <Typography variant="h2">
              Find your mentor, connect with your peers and grow together
            </Typography>
            <Typography>Join our community of over 1000+ members</Typography>
          </div>
          <div>Containue with email -</div>
        </ContentWrapper>
        <ImageWrapper>
          <StyledImageFrame
            src="https://thumbs.dreamstime.com/b/group-joyful-young-friends-having-fun-outdoors-embracing-laughing-together-park-energetic-carefree-multiracial-people-342119550.jpg"
            alt=""
          />
          <StyledImageFrame
            src="https://as1.ftcdn.net/v2/jpg/05/09/47/98/1000_F_509479822_23rZq426T0BNEFmzKX1W5QJjTm8sgqMf.jpg"
            alt=""
          />
        </ImageWrapper>
      </HeroSectionWrapper>
    </>
  );
};

export default HeroSection;
