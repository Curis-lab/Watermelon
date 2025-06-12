import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "./theme";

interface MUIThemeProviderProps {
  children: ReactNode;
}

const MUIThemeProvider = ({ children }: MUIThemeProviderProps) => {
  const { zIndex, components, ...restTheme } = theme;
  const mainTheme = createTheme({ ...restTheme, components: components as any });
  console.log(zIndex);
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
