import { colors } from "./colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  boxShadows: {
    main: "0px 2px 4px rgba(129, 122, 254, 0.2)",
    card: "0px 2px 10px rgba(28, 25, 78, 0.12)",
    elevated: "0px 1px 20px rgba(45, 42, 89, 0.1)",
    popup: "0px 2px 6px rgba(0, 0, 0, 0.25)",
    primaryHeader: "0px 8px 24px rgba(97, 91, 194, 0.2)",
    separator: "0px 2px 4px rgba(32, 32, 33, 0.12)", // Notifications header
    accordionFooter: "inset 0px 2px 4px rgba(32, 32, 33, 0.05)",
    reverseFooter: "inset 0px -2px 4px rgba(32, 32, 33, 0.05)",
  },
  typography: {
    fontFamily: "Sen, Roboto, sans-serif",
    fontWeightBold: "700",
    fontWeightMedium: "700",
    allVariants: { lineHeight: 1.4 },
    button: { lineHeight: 1.75 },
    h1: {
      fontSize: "1.5rem",
      lineHeight: 1.875,
    },
    h2: {
      fontSize: `${20 / 16}rem`,
      fontWeight: "700",
    },
    h3: {
      fontSize: "1rem",
      fontWeight: "700",
    },
    h4: {
      fontSize: "1rem",
      fontWeight: "600",
    },
    caption: {
      fontSize: `${12 / 16}rem`,
    }
  },
  fontSizes: {
    extraLargeHeader: "clamp(2rem, 2.5vw, 2.5rem)",
    largeHeader: "clamp(1.5rem, 2vw, 2rem)",
    mediumHeader: "clamp(1.2rem, 1.5vw, 1.5rem)",
    mainHeader: "clamp(1rem, 1.1vw, 1.1rem)",
    bodySize: "clamp(0.9rem, 1vw, 1rem)",
    smallBody: "clamp(0.8rem, 0.875vw, 0.875rem)",
    smallerBody: "clamp(0.75rem, 0.75vw, 0.75rem)",
  },
  fontWeight: {
    thin: 300,
    medium: 400,
    semi: 700,
    bold: 700,
  },
  shape: {
    borderRadius: 4,
    borderRadiusMedium: 8,
    borderRadiusLarge: 12,
    borderRadiusExtraLarge: 20,
    tableRowHeight: 64,
    tableRowHeightCompact: 56,
    tableRowHeightDense: 48,
  },
  zIndex: {
    appBar: 1400, // Replacing 'sticky' with 'appBar' as a known property
  },
  palette: {
    common: {
      white: colors.grey[50], // Tooltips text color // Switch base (OFF) // Text color
      black: colors.grey[900], // Switch track (OFF)
    },
    text: {
      primary: colors.grey[900],
      secondary: colors.grey[800],
      disabled: colors.grey[600],
    },
    primary: {
      main: colors.pink[900],
      light: colors.pink[700],
      dark: colors.pink[900],
      contrastText: colors.grey[50], // Color used for content when primary.main is used as a background
    },
    secondary: {
      // Used for purple badges and purple light elements
      main: colors.pink[800],
      light: colors.pink[500],
      dark: colors.pink[900], // Color used for text
      contrastText: colors.pink[900], // Color used for text inside badge
    },
    info: {
      main: colors.violet[500],
      light: colors.violet[500],
      dark: colors.violet[800], // Color used for text
      contrastText: colors.violet[800], // Color used for text inside alert
    },
    success: {
      main: colors.green[600],
      light: colors.green[50],
      dark: colors.green[800], // Color used for text
      contrastText: colors.green[800], // Color used for text inside alert
    },
    warning: {
      main: colors.orange[800],
      light: colors.orange[100],
      dark: colors.orange[900], // Color used for text
      contrastText: colors.orange[900], // Color used for text inside alert
    },
    error: {
      main: colors.red[700], // used on error buttons // used on icons on these elements
      light: colors.red[50],
      dark: colors.red[800], // Color used for text
      contrastText: colors.red[800], // Color used for text inside alert
    },
    background: {
      paper: colors.grey[50],
      default: colors.grey[200],
    },
    divider: colors.grey[400],
    links: colors.pink[900],
    eventLog: {
      diffAdd: colors.green[800],
      diffSub: colors.red[800],
      edited: colors.grey[900],
    },
    seen: {
      unknown: colors.grey[100],
      recent: colors.green[100],
      inactive: colors.orange[200],
      abandoned: colors.red[200],
      primary: colors.pink[100],
    },
    envAccordion: {
      disabled: colors.grey[100],
      expanded: colors.grey[200],
    },
    grey: {
      100: colors.grey[100], // Disabled Switch base (OFF)
      600: colors.grey[800], // slider tooltip background
      700: colors.grey[800], // Dark tooltip background
    },
  },
});
