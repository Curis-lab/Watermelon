import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import { ReactNode } from "react";
import { theme } from "./theme";

interface MUIThemeProviderProps {
  children: ReactNode;
}

const MUIThemeProvider = ({ children }: MUIThemeProviderProps) => {
  const { components, ...restTheme } = theme;
  const mainTheme = createTheme({
    ...restTheme,
    components: components as React.ReactNode,
  });
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "*": { boxSizing: "border-box", margin: 0, padding: 0 },
          body: { fontFamily: '"Sen", sans-serif' },
        }}
      />
      <>{children}</>
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
