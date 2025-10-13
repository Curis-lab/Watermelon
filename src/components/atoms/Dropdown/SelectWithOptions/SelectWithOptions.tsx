import { TextField } from "@mui/material";

function SelectWithOptions({ values, render, textFieldProperties }) {
  return (
    <TextField select {...textFieldProperties}>
      {values.map((val, idx) => render(val, idx))}
    </TextField>
  );
}

export default SelectWithOptions;
