import { useState } from "react";

export const useFormActivity = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  //I want to collect as multiplart data

  const handleSubmit = async(e, submitCallback) => {
    e.preventDefault();
    try {
      await submitCallback();
    } catch (error) {
      setErrors(error.errors || {});
    }
    console.log(formData);
  };

  return {
    handleChange,
    formData,
    handleSubmit,
  };
};
