"use client";

import { useTheme } from "@emotion/react";
import { Box, Stack, Typography } from "@mui/material";
//
import { bgBlur } from "@/providers/theme/css";
import { HEADER } from "@/config";

export const ProfileLayout = ({ children }) => {
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
                    ...bgBlur({
                        color: theme.palette.background.default,
                    }),
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
                    <Typography variant="h4">Profile</Typography>
                </Stack>
            </Stack>
            <Box>{children}</Box>
        </Stack>
    );
};
