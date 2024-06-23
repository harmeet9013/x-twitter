"use client";

import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@emotion/react";
//
import palette from "./palette";
import { merge } from "lodash";
import { typography } from "./typography";
import { useSettingsContext } from "@/settings";
import componentsOverrides from "./components";

export default function ThemeProvider({ children }) {
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
}
