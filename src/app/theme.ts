"use client";

import { createTheme } from "@mui/material/styles";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

/**
 * Paleta inspirada en GitHub (dark) con el púrpura mucho más presente.
 * Tokens base de GitHub:
 *   canvas.default  #0d1117
 *   canvas.subtle   #161b22
 *   border.default  #30363d
 *   fg.default      #e6edf3
 *   fg.muted        #8b949e
 * Acento púrpura: #a371f7 (open/accent purple de GitHub).
 */
const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
    primary: {
      main: "#a371f7",
      light: "#c8a2ff",
      dark: "#8957e5",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#bc8cff",
    },
    background: {
      default: "#0d1117",
      paper: "#161b22",
    },
    text: {
      primary: "#e6edf3",
      secondary: "#8b949e",
    },
    divider: "#30363d",
  },
  typography: {
    fontFamily: GeistSans.style.fontFamily,
    h1: { fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 },
    h2: { fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 },
    h3: { fontWeight: 600, letterSpacing: "-0.02em" },
    h4: { fontWeight: 600, letterSpacing: "-0.01em" },
    button: { textTransform: "none", fontWeight: 600 },
    body1: { lineHeight: 1.7 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          paddingInline: 22,
          paddingBlock: 10,
          borderRadius: 10,
        },
        containedPrimary: {
          background: "linear-gradient(180deg, #a371f7 0%, #8957e5 100%)",
          boxShadow: "0 1px 0 rgba(255,255,255,0.08) inset, 0 4px 24px rgba(137,87,229,0.35)",
          "&:hover": {
            background: "linear-gradient(180deg, #b585ff 0%, #9968ef 100%)",
          },
        },
        outlined: {
          borderColor: "#30363d",
          color: "#e6edf3",
          "&:hover": {
            borderColor: "#a371f7",
            backgroundColor: "rgba(163,113,247,0.08)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid #30363d",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
    },
  },
});

// Exportamos también la mono por si la usamos en bloques de código.
export const monoFontFamily = GeistMono.style.fontFamily;

export default theme;
