import { useState } from "react";
import OnboardingTemplate from "../../templates/OnboardingTemplate/OnboardingTemplate";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "mentor",
    bio: "",
    availability: false,
    expertise: "",
  });

  const isSubmitButtonDisabled = () => {
    const { name, email, password, bio } = formData;
    return !name || !email || !password || !bio;
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

    console.log("this is data from register", formData);
  };

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
