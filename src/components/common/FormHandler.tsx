import React, { useState } from "react";

export interface IRender<T> {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  inputHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formData: T;
}

interface IFormHandlerProps<T> {
  render: ({
    submitHandler,
    inputHandler,
    formData,
  }: IRender<T>) => React.ReactNode;
  initial: T;
  process?: (formData: T) => void;
}
function FormHandler<TInitial>({
  initial,
  render,
  process,
}: IFormHandlerProps<TInitial>) {
  const [storage, setStorage] = useState<TInitial>(initial);

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setStorage((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (process) {
      await process(storage);
    }
    console.log("this is data from register", storage);
  };

  return render({ formData: storage, submitHandler, inputHandler });
}

export default FormHandler;
