import { TextField } from "@mui/material";
import React from "react";

interface IValueWithLabel {
  value:string;
  label:string;
}

function SelectWithOptions({ values, render, textFieldProperties }:{
  values: IValueWithLabel[],
  textFieldProperties:{
    name:string,
    value:string,
    onChange:(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    helperText:string;
  },
  render:({val, idx}:{val:IValueWithLabel, idx:number|string})=>React.ReactNode
}) {
  return (
    <TextField select {...textFieldProperties}>
      {values.map((val, idx) => render({val, idx}))}
    </TextField>
  );
}

export default SelectWithOptions;
