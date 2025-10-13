import React from "react";
import {
  Box,
  InputAdornment,
  inputBaseClasses,
  MenuItem,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import onboardingConfig from "../../../constants/onboarding";
import SelectWithOptions from "../../atoms/Dropdown/SelectWithOptions/SelectWithOptions";
import HeroHeader from "../../molecules/HeroHeader/HeroHeader";

const StyledContainer = styled("div")({
  minWidth: "100%",
  minHeight: "100vh",
  backgroundImage:
    "url(https://i.pinimg.com/1200x/00/32/70/003270ad0273b9628256d88a1492ff5e.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  paddingTop: "5rem",
  paddingBottom: "4rem",
  display: "flex",
  justifyContent: "flex-end",
  borderRadius: "10px",
});

const StyledSubmitButton = styled("button")({
  fontSize: "18px",
  padding: "10px",
  backgroundColor: "#000",
  color: "#fff",
  fontWeight: "bold",
  borderRadius: "20px",
  "&:disabled": {
    backgroundColor: "#ccc",
    color: "#666",
    cursor: "not-allowed",
  },
});

const StyledForm = styled("form")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.4em",
  paddingBlock: "1em",
});
const StyledContent = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  alignItems: "flex-end",
  maxWidth: "50%",
  // padding: "2rem",
}));

function OnboardingTemplate({
  formData,
  handleInputChange,
  handleSubmit,
  isSubmitButtonDisabled,
}) {
  return (
    <StyledContainer>
      <StyledContent>
        <HeroHeader {...onboardingConfig.hero} white />
      </StyledContent>
      <Box
        sx={{
          background: "white",
          minWidth: "20rem",
          padding: "2em",
          marginInline: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5">
          {onboardingConfig.registration.heading}
        </Typography>
        <Typography variant="body2">
          {onboardingConfig.registration.subtitle}
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            sx={{ width: "100%" }}
            helperText="Please enter your full name"
          />

          <TextField
            type="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            sx={{ minWidth: "100%" }}
            helperText="Please enter a unique email address"
            slotProps={{
              htmlInput: {
                sx: { textAlign: "start" },
              },
              input: {
                endAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      alignSelf: "flex",
                      margin: 0,
                      opacity: 0,
                      pointerEvents: "none",
                      [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                        opacity: 1,
                      },
                    }}
                  >
                    @gmail.com
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
            sx={{ width: "100%" }}
            helperText="Password must be at least 8 characters long"
          />
          <SelectWithOptions
            textFieldProperties={{
              name: "role",
              value: formData.role,
              onChange: handleInputChange,
              helperText: "Select your role",
            }}
            values={[
              { value: "mentor", label: "Mentor" },
              { value: "attendee", label: "Attendee" },
              { value: "organizer", label: "Organizer" },
              { value: "mentee", label: "Mentee" },
            ]}
            render={(val, idx) => (
              <MenuItem value={val.value} key={idx}>
                {val.label}
              </MenuItem>
            )}
          />
          <SelectWithOptions
            textFieldProperties={{
              name: "expertise",
              value: formData.expertise,
              onChange: handleInputChange,
              helperText: "Select your expertise",
              sx: { width: "100%" },
            }}
            values={[
              { value: "web-development", label: "Web Development" },
              { value: "data-science", label: "Data Science" },
              { value: "design", label: "Design" },
              { value: "marketing", label: "Marketing" },
              { value: "business", label: "Business" },
            ]}
            render={(val, idx) => (
              <MenuItem value={val.value} key={idx}>
                {val.label}
              </MenuItem>
            )}
          />

          <TextField
            multiline
            name="bio"
            label="Short Bio"
            rows={4}
            value={formData.bio}
            onChange={handleInputChange}
            sx={{ width: "100%" }}
            helperText="Tell us about yourself"
          />
          <Typography variant="caption">
            <input
              type="checkbox"
              name="availability"
              checked={formData.availability}
              onChange={handleInputChange}
            />
            Available for Mentorship
          </Typography>
          <StyledSubmitButton disabled={isSubmitButtonDisabled()} type="submit">
            Register
          </StyledSubmitButton>
        </StyledForm>
      </Box>
    </StyledContainer>
  );
}

export default OnboardingTemplate;
