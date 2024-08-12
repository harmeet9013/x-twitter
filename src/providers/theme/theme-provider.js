"use client";

import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@emotion/react";
//
import palette from "./palette";
import { typography } from "./typography";
import { useSettingsContext } from "@/providers/settings";
import componentsOverrides from "./components";

export const ThemeProvider = ({ children }) => {
    const settings = useSettingsContext();

    const memoizedValue = {
        palette: {
            ...palette(settings.themeMode),
        },
    };

    const customTheme = createTheme(memoizedValue);

    customTheme.typography = typography(customTheme);

    customTheme.components = componentsOverrides(customTheme);

    return (
        <MuiThemeProvider theme={customTheme}>
            <CssBaseline enableColorScheme />
            {children}
        </MuiThemeProvider>
    );
};
