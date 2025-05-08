import { Button, styled } from "@mui/material";
import { useState } from "react";
import { createFormData } from "../../../utils/formUtils";
import { useAuth } from "../../../providers/AuthProvider";

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

    const data = createFormData(formData, imageFile);

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        body: data,
        headers: {
          "Accept": "multipart/form-data",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Registration successful:", result);
      setToken({
        token: result.token,
        expiresIn: 12,
      });
    } catch (error) {
      console.error("Registration failed:", error);
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
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setImageFile(file);
                }
              }}
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
