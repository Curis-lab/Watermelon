import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "./theme";

interface MUIThemeProviderProps {
  children: ReactNode;
}

const MUIThemeProvider = ({ children }: MUIThemeProviderProps) => {
  const { zIndex, ...restTheme } = theme;
  const mainTheme = createTheme({ ...restTheme });
  console.log(zIndex);
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
