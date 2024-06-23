"use client";

import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@emotion/react";

export default function ThemeProvider({ children }) {
    const customTheme = createTheme();

    return (
        <MuiThemeProvider theme={customTheme}>
            <CssBaseline enableColorScheme />
            {children}
        </MuiThemeProvider>
    );
}
