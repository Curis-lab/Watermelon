import {
  InputAdornment,
  inputBaseClasses,
  MenuItem,
  styled,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { createFormData } from "../../../utils/formUtils";
import { useAuth } from "../../../providers/AuthProvider";
import ProfileImageUpload from "../../atoms/Imageuploader/ProfileImage";

const StyledContainer = styled("div")({
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  display: "flex",
  flexDirection: "column",
  marginTop: "100px",
});

const StyledSubmitButton = styled("button")({
  fontSize: "18px",
  padding: "10px",
  backgroundColor: "#000",
  color: "#fff",
  fontWeight: "bold",
  marginBlock: "10px",
  boxShadow: "10px 10px 0 0 rgb(154, 6, 6)",
  "&:disabled": {
    backgroundColor: "#ccc",
    color: "#666",
    cursor: "not-allowed",
  },
});

const StyledForm = styled("form")(({ theme }) => ({
  width: "100%",
  display: "grid",
  gap: "10px",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
}));

const Onboarding = () => {
  const { setToken } = useAuth();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "mentor",
    bio: "",
    availability: true,
    expertise: "design",
  });

  const isSubmitButtonDisabled = () => {
    const { name, email, password, bio } = formData;
    return !name || !email || !password || !bio || !imageFile;
  };

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      console.log("Image file is required");
      return;
    }

    //this is should be in submit event
    //if I see image file I should use multipart/form-data
    const data = createFormData(formData, imageFile);

    const fetcher = async (url: string) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          body: data,
          headers: {
            Accept: "multipart/form-data",
          },
        });
        return response.json();
      } catch (error) {
        throw new Error(`Error: ${error.statusText}`);
      }
    };

    //response data to to emit it
    try {
      const result = await fetcher("http://localhost:3000/api/auth/register");
      setToken({
        token: result.token,
        expiresIn: 12,
      });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  return (
    <StyledContainer>
      <h1>Welcome to EventGo</h1>
      <p>
        Join our community by filling out the registration form below. Whether
        you're a mentor, mentee, organizer, or attendee, we have a place for
        you!
      </p>
      <StyledForm onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ProfileImageUpload
            handleImageUpload={handleImageUpload}
            imageUrl={imageFile}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            paddingInline: "10px",
          }}
        >
          <TextField
            variant="outlined"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            sx={{ width: "100%" }}
          />
          <TextField
            type="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            sx={{ width: "100%" }}
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
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            paddingInline: "10px",
          }}
        >
          <TextField
            select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            helperText="Select your role"
            sx={{ width: "100%" }}
          >
            <MenuItem value="mentor">Mentor</MenuItem>
            <MenuItem value="attendee">Attendee</MenuItem>
            <MenuItem value="organizer">Organizer</MenuItem>
            <MenuItem value="mentee">Mentee</MenuItem>
          </TextField>
          <div>
            <TextField
              select
              name="expertise"
              value={formData.expertise}
              onChange={handleInputChange}
              sx={{ width: "100%" }}
              helperText="Select your expertise"
            >
              <MenuItem value="web-development">Web Development</MenuItem>
              <MenuItem value="data-science">Data Science</MenuItem>
              <MenuItem value="design">Design</MenuItem>
              <MenuItem value="marketing">Marketing</MenuItem>
              <MenuItem value="business">Business</MenuItem>
            </TextField>

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
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="availability"
                checked={formData.availability}
                onChange={handleInputChange}
              />
              Available for Mentorship
            </label>
          </div>
          <StyledSubmitButton disabled={isSubmitButtonDisabled()} type="submit">
            Register
          </StyledSubmitButton>
        </div>
      </StyledForm>
    </StyledContainer>
  );
};

export default Onboarding;
