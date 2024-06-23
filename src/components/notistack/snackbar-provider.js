"use client";

import { useTheme } from "@emotion/react";
import { SnackbarProvider as MUISnackbarProvider } from "notistack";

export default function SnackbarProvider({ children }) {
    const theme = useTheme();

    return <MUISnackbarProvider>{children}</MUISnackbarProvider>;
}
