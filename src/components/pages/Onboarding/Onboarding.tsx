import { useState } from "react";
import OnboardingTemplate from "../../templates/OnboardingTemplate/OnboardingTemplate";
import { useRegister } from "../../../hooks/api/actions/useRegister/userRegister";

interface IBaseFormRegister {
  name:string;
  email:string;
  password:string;
  role: "mentor",
  bio:string;
  availability:boolean;
  expertise:string;
}

const Onboarding = () => {
  const register = useRegister();

  const [formData, setFormData] = useState<IBaseFormRegister>({
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
    await register(formData);
    console.log("this is data from register", formData);
  };

  return (
    <OnboardingTemplate
      formData={formData}
      handleInputChange={()=>handleInputChange}
      handleSubmit={()=>handleSubmit}
      isSubmitButtonDisabled={isSubmitButtonDisabled}
    />
  );
};

export default Onboarding;
