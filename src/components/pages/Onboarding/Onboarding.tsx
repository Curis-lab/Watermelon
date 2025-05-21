import { Button, styled } from "@mui/material";
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
    expertise: "",
  });

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

    const fetcher = async (url:string) => {
      try {
        const response = await fetch(
          url,
          {
            method: "POST",
            body: data,
            headers: {
              Accept: "multipart/form-data",
            },
          }
        );
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
      <form
        onSubmit={handleSubmit}
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <select name="role" value={formData.role} onChange={handleInputChange}>
          <option value="mentor">Mentor</option>
          <option value="attendee">Attendee</option>
          <option value="organizer">Organizer</option>
          <option value="mentee">Mentee</option>
        </select>
        <div>
          <select
            name="expertise"
            value={formData.expertise}
            onChange={handleInputChange}
          >
            <option value="">Select Expertise</option>
            <option value="web-development">Web Development</option>
            <option value="data-science">Data Science</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="business">Business</option>
          </select>
          <div>
            <ProfileImageUpload
              handleImageUpload={handleImageUpload}
              imageUrl={imageFile}
            />
          </div>
          <textarea
            name="bio"
            placeholder="Short Bio"
            value={formData.bio}
            onChange={handleInputChange}
            style={{ width: "100%", height: "100px", resize: "none" }}
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
        <Button type="submit" variant="contained">
          Register
        </Button>
      </form>
    </StyledContainer>
  );
};

export default Onboarding;
