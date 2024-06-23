"use client";

import { X } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { Button, Container, Divider, Stack, Typography } from "@mui/material";
//
import { MAIN_NAV_WIDTH } from "@/config";

export default function ClassicLayout({ children }) {
    const theme = useTheme();

    return (
        <Stack width={1} bgcolor="background.paper">
            <Container maxWidth="xl">
                <Stack height="100dvh" direction="row">
                    <Stack
                        width={1}
                        maxWidth={MAIN_NAV_WIDTH}
                        height={1}
                        p={2}
                        spacing={3}
                        borderTop={0}
                        borderBottom={0}
                        border={`2px solid ${theme.palette.divider}`}
                        divider={<Divider />}
                    >
                        <Stack
                            width={1}
                            spacing={2}
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <X color="primary" fontSize="large" />

                            <Typography
                                variant="h4"
                                fontWeight={600}
                                color="primary"
                            >
                                Twitter
                            </Typography>
                        </Stack>

                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                        >
                            Home
                        </Button>
                    </Stack>
                    {children}
                </Stack>
            </Container>
        </Stack>
    );
}
