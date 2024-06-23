"use client";

import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@emotion/react";

export default function ThemeProvider({ children }) {
  const customTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        paper: "#f9f9f9",
      },
    },
  });

  return (
    <MuiThemeProvider theme={customTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  );
}
