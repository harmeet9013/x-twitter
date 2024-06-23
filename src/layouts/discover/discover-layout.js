"use client";

import { useTheme } from "@emotion/react";
import { Box, Stack, Typography } from "@mui/material";
//
import { HEADER } from "@/config";
//
import { bgBlur } from "@/theme/css";

export default function DiscoverLayout({ children }) {
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
            <Stack
                width={1}
                position="sticky"
                top={0}
                sx={{
                    height: HEADER,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    ...bgBlur({ color: theme.palette.background.default }),
                }}
            >
                <Stack
                    width={1}
                    height={1}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    px={4}
                    py={2}
                >
                    <Typography variant="h4">Discover</Typography>
                </Stack>
            </Stack>
            <Box>{children}</Box>
        </Stack>
    );
}
