"use client";

import { useTheme } from "@emotion/react";
import { Box, Stack, Typography } from "@mui/material";
//
import { HEADER } from "@/config";
import { hideScroll, bgBlur } from "@/providers";
//

export const HomeLayout = ({ children }) => {
    const theme = useTheme();

    return (
        <Stack
            width={1}
            height={1}
            sx={{
                background: theme.palette.background.paper,
                ...hideScroll.y,
                overflowY: "auto",
            }}
        >
            <Stack
                width={1}
                position="sticky"
                top={0}
                sx={{
                    height: HEADER,
                    zIndex: 10,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    ...bgBlur({
                        color: theme.palette.background.default,
                        opacity: 0.95,
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
                    <Typography variant="h4">Home</Typography>
                </Stack>
            </Stack>
            <Box>{children}</Box>
        </Stack>
    );
};
