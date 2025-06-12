import { PaletteOptions, ZIndex } from "@mui/material/styles";

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
    zIndex: ZIndex;
    palette: PaletteOptions;
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
    zIndex?: Partial<ZIndex>;
    palette?: PaletteOptions;
  }
}
