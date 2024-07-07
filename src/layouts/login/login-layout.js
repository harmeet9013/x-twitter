"use client";

import { Stack } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function LoginLayout({ children }) {
    const theme = useTheme();

    return (
        <Stack
            width={1}
            height={1}
            sx={{
                background: theme.palette.background.paper,
                overflowY: "auto",
            }}
        >
            {children}
        </Stack>
    );
}
