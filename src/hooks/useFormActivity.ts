import { useState } from "react";

export const useFormActivity = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    submitCallback: () => Promise<void>
  ) => {
    e.preventDefault();
    try {
      await submitCallback();
    } catch {
      setErrors("Error from useFormActivity");
    }
  };

  return {
    handleChange,
    formData,
    handleSubmit,
    errors,
  };
};
