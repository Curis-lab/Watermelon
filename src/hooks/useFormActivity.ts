import { useState } from "react";

export const useFormActivity = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, any>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  //I want to collect as multipart data

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>, submitCallback: () => Promise<void>) => {
    e.preventDefault();
    try {
      await submitCallback();
    } catch (error: any) {
      setErrors(error.errors || {});
    }
    console.log(formData);
  };

  return {
    handleChange,
    formData,
    handleSubmit,
    errors,
  };
};
