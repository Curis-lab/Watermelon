import { TextField } from "@mui/material";

function SelectWithOptions({ values, render , textFieldProperties }) {
  return <TextField select {...textFieldProperties}>{values.map((val) => render(val))}</TextField>;
}

export default SelectWithOptions;
