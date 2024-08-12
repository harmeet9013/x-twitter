"use client";

import { useTheme } from "@emotion/react";
import { X } from "@mui/icons-material";
import { CircularProgress, Stack } from "@mui/material";

export const PageLoader = () => {
    const theme = useTheme();

    console.log("===", theme);

    const spacing = (value) => {
        return `${value * 8}px`;
    };

    return (
        <Stack
            width={1}
            height="100dvh"
            justifyContent="center"
            alignItems="center"
            position="relative"
            bgcolor="background.default"
        >
            <X
                color="primary"
                sx={{
                    width: spacing(4),
                    height: spacing(4),
                    position: "absolute",
                }}
            />
            <CircularProgress color="primary" size={60} disableShrink />
        </Stack>
    );
};
