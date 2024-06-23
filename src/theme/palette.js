import { alpha } from "@mui/material";
//
import THEME from "./material-theme.json";

const COLORS = (mode) => {
    const light = {
        primary: {
            main: THEME["palettes"]["primary"][40],
            light: THEME["palettes"]["primary"][30],
            dark: THEME["palettes"]["primary"][50],
            contrastText: THEME["palettes"]["primary"][100],
        },
        secondary: {
            main: THEME["palettes"]["secondary"][40],
            light: THEME["palettes"]["secondary"][30],
            dark: THEME["palettes"]["secondary"][50],
            contrastText: THEME["palettes"]["secondary"][100],
        },
        tertiary: {
            main: THEME["palettes"]["tertiary"][40],
            light: THEME["palettes"]["tertiary"][30],
            dark: THEME["palettes"]["tertiary"][50],
            contrastText: THEME["palettes"]["tertiary"][100],
        },
    };

    const dark = {
        primary: {
            main: THEME["palettes"]["primary"][80],
            light: THEME["palettes"]["primary"][70],
            dark: THEME["palettes"]["primary"][90],
            contrastText: THEME["palettes"]["primary"][20],
        },
        secondary: {
            main: THEME["palettes"]["secondary"][80],
            light: THEME["palettes"]["secondary"][70],
            dark: THEME["palettes"]["secondary"][90],
            contrastText: THEME["palettes"]["secondary"][20],
        },
        tertiary: {
            main: THEME["palettes"]["tertiary"][80],
            light: THEME["palettes"]["tertiary"][70],
            dark: THEME["palettes"]["tertiary"][90],
            contrastText: THEME["palettes"]["tertiary"][20],
        },
    };

    return {
        mode,
        ...(mode === "light" ? light : dark),
        background: {
            default: THEME["schemes"][mode]["surfaceContainerLowest"],
            paper: THEME["schemes"][mode]["surfaceContainer"],
        },
        divider: alpha(THEME["schemes"][mode]["outlineVariant"], 0.7),
        grey: {
            ...THEME["palettes"]["neutral"],
        },
    };
};

export default function palette(mode) {
    return {
        mode,
        ...COLORS(mode),
    };
}
