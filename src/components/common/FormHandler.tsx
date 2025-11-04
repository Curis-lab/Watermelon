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


  /** I use flag if I can't set name on components such as Autocomplete */
  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >, newValue?:string[], flag?:string
  ) => {
    const { name, type, value } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setStorage((prevData) => ({
      ...prevData,
    [flag ? flag: name]: type === 'checkbox' ? checked: newValue? [...newValue]: value
    }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (process) {
      await process(storage);
    }
  };

  
  return render({ formData: storage, submitHandler, inputHandler });
}

export default FormHandler;
