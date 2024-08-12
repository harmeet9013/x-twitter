"use client";

import { useTheme } from "@emotion/react";
import { Divider, Fade, Stack, Typography } from "@mui/material";

export const DiscoverView = () => {
    const theme = useTheme();

    return (
        <Fade in={true}>
            <Stack height={1} width={1} divider={<Divider />}>
                {new Array(10).fill(0)?.map((item, index) => {
                    return (
                        <Stack minHeight={theme.spacing(20)}>
                            <Typography variant="h1">{index + 1}</Typography>
                        </Stack>
                    );
                })}
            </Stack>
        </Fade>
    );
};
