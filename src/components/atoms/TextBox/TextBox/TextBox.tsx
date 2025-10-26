import React from "react";
import { TextField } from "@mui/material";

interface IProperties {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  name: string;
  label: string;
  helperText?: string;
  type?: string;
  multiline?:boolean
  rows?:number
}

function TextBox({ properties}: { properties: IProperties}) {
  return (
    <TextField
      {...properties}
      variant="outlined"
      required
      sx={{ width: "100%" }}
    />
  );
}

export default TextBox;
