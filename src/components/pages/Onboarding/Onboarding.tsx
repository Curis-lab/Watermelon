import { useState } from "react";
import { createFormData } from "../../../utils/formUtils";
import { useAuth } from "../../../providers/AuthProvider";
// import ProfileImageUpload from "../../atoms/Imageuploader/ProfileImage";
import OnboardingTemplate from "../../templates/OnboardingTemplate/OnboardingTemplate";


const Onboarding = () => {
  useAuth(); // Removed destructuring as the values are unused
  const [imageFile] = useState<File | null>(null);
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;
    const checked = (e.target as HTMLInputElement).checked; // Explicitly cast to HTMLInputElement for 'checked'
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageFile) {
      console.log("Image file is required");
      return;
    }

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
        if (error instanceof Error) {
          throw new Error(`Error: ${error.message}`);
        }
        throw error;
      }
    };

    try {
      await fetcher("http://localhost:3000/api/auth/register"); // Removed unused 'result'
      // Assuming setToken is a function you need to define or import
      // setToken({
      //   token: result.token,
      //   expiresIn: 12,
      // });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     setImageFile(file);
  //   }
  // };

  return (
    <OnboardingTemplate
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      isSubmitButtonDisabled={isSubmitButtonDisabled}
    />
  );
};

export default Onboarding;
