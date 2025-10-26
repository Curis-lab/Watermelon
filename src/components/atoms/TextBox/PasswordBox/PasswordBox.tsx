import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

interface IPasswordBoxProps {
  value: string;
  handleChangeInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

function PasswordBox({ value, handleChangeInput }: IPasswordBoxProps) {
  const [showPassword, setShowPassword] = useState(false);

  const _handleClickShowPassword = () => setShowPassword((show) => !show);

  const _handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const _handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="outlined" sx={{ width: "100%" }}>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        name="password"
        type={showPassword ? "text" : "password"}
        value={value}
        sx={{
          minWidth: "80%",
        }}
        onChange={handleChangeInput}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? "Hide Password" : "Show Password"}
              onClick={_handleClickShowPassword}
              onMouseDown={_handleMouseDownPassword}
              onMouseUp={_handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default PasswordBox;
