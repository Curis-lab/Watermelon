// import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    boxShadows: {
      main: string;
      card: string;
      elevated: string;
      popup: string;
      primaryHeader: string;
      separator: string;
      accordionFooter: string;
      reverseFooter: string;
    };
    fontSizes: {
      extraLargeHeader: string;
      largeHeader: string;
      mediumHeader: string;
      mainHeader: string;
      bodySize: string;
      smallBody: string;
      smallerBody: string;
    };
    fontWeight: {
      thin: number;
      medium: number;
      semi: number;
      bold: number;
    };
    shape: {
      borderRadius: number;
      borderRadiusMedium: number;
      borderRadiusLarge: number;
      borderRadiusExtraLarge: number;
      tableRowHeight: number;
      tableRowHeightCompact: number;
      tableRowHeightDense: number;
    };
    zIndex: {
      sticky: number;
    };
    palette: {
      common: {
        white: string;
        black: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      primary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
        border: string;
        contrastText: string;
      };
      info: {
        main: string;
        light: string;
        dark: string;
        border: string;
        contrastText: string;
      };
      success: {
        main: string;
        light: string;
        dark: string;
        border: string;
        contrastText: string;
      };
      warning: {
        main: string;
        light: string;
        dark: string;
        border: string;
        contrastText: string;
      };
      error: {
        main: string;
        light: string;
        dark: string;
        border: string;
        contrastText: string;
      };
      web: {
        main: string;
        contrastText: string;
      };
      neutral: {
        main: string;
        light: string;
        dark: string;
        border: string;
        contrastText: string;
      };
      background: {
        paper: string;
        default: string;
        application: string;
        sidebar: string;
        alternative: string;
        elevation1: string;
        elevation2: string;
      };
      divider: string;
      table: {
        headerBackground: string;
        headerHover: string;
        divider: string;
        rowHover: string;
      };
      highlight: string;
      spotlight: {
        border: string;
        outline: string;
        pulse: string;
      };
      links: string;
      eventLog: {
        diffAdd: string;
        diffSub: string;
        edited: string;
      };
      seen: {
        unknown: string;
        recent: string;
        inactive: string;
        abandoned: string;
        primary: string;
      };
      envAccordion: {
        disabled: string;
        expanded: string;
      };
      grey: {
        100: string;
        600: string;
        700: string;
      };
    };
  }
  interface ThemeOptions {
    boxShadows?: {
      main?: string;
      card?: string;
      elevated?: string;
      popup?: string;
      primaryHeader?: string;
      separator?: string;
      accordionFooter?: string;
      reverseFooter?: string;
    };
    fontSizes?: {
      extraLargeHeader?: string;
      largeHeader?: string;
      mediumHeader?: string;
      mainHeader?: string;
      bodySize?: string;
      smallBody?: string;
      smallerBody?: string;
    };
    fontWeight?: {
      thin?: number;
      medium?: number;
      semi?: number;
      bold?: number;
    };
    shape?: {
      borderRadius?: number;
      borderRadiusMedium?: number;
      borderRadiusLarge?: number;
      borderRadiusExtraLarge?: number;
      tableRowHeight?: number;
      tableRowHeightCompact?: number;
      tableRowHeightDense?: number;
    };
    zIndex?: {
      sticky?: number;
    };
    palette?: {
      common?: {
        white?: string;
        black?: string;
      };
      text?: {
        primary?: string;
        secondary?: string;
        disabled?: string;
      };
      primary?: {
        main?: string;
        light?: string;
        dark?: string;
        contrastText?: string;
      };
      secondary?: {
        main?: string;
        light?: string;
        dark?: string;
        border?: string;
        contrastText?: string;
      };
      info?: {
        main?: string;
        light?: string;
        dark?: string;
        border?: string;
        contrastText?: string;
      };
      success?: {
        main?: string;
        light?: string;
        dark?: string;
        border?: string;
        contrastText?: string;
      };
      warning?: {
        main?: string;
        light?: string;
        dark?: string;
        border?: string;
        contrastText?: string;
      };
      error?: {
        main?: string;
        light?: string;
        dark?: string;
        border?: string;
        contrastText?: string;
      };
      web?: {
        main?: string;
        contrastText?: string;
      };
      neutral?: {
        main?: string;
        light?: string;
        dark?: string;
        border?: string;
        contrastText?: string;
      };
      background?: {
        paper?: string;
        default?: string;
        application?: string;
        sidebar?: string;
        alternative?: string;
        elevation1?: string;
        elevation2?: string;
      };
      divider?: string;
      table?: {
        headerBackground?: string;
        headerHover?: string;
        divider?: string;
        rowHover?: string;
      };
      highlight?: string;
      spotlight?: {
        border?: string;
        outline?: string;
        pulse?: string;
      };
      links?: string;
      eventLog?: {
        diffAdd?: string;
        diffSub?: string;
        edited?: string;
      };
      seen?: {
        unknown?: string;
        recent?: string;
        inactive?: string;
        abandoned?: string;
        primary?: string;
      };
      envAccordion?: {
        disabled?: string;
        expanded?: string;
      };
      grey?: {
        100?: string;
        600?: string;
        700?: string;
      };
    };
  }
}
