"use client";

import { usePathname, useRouter } from "next/navigation";
//
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
import { X } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
//
import { useSettingsContext } from "@/settings";
//
import { NAV_LIST } from "@/config";
//
import { THEME_OPTIONS } from "@/_mock";

export default function ClassicLayout({ children }) {
    const theme = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const settings = useSettingsContext();

    const handleNavigate = (url) => {
        if (!!url) {
            router.push(url);
        }
    };

    return (
        <Stack width={1} bgcolor="background.default">
            <Container maxWidth="xl">
                <Stack height="100dvh" direction="row">
                    <Stack
                        p={2}
                        height={1}
                        spacing={3}
                        width={0.2}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Stack
                            width={1}
                            height={1}
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                            divider={<Divider variant="middle" flexItem />}
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

                            <Stack width={1} spacing={2} alignItems="center">
                                {NAV_LIST?.map((item, index) => {
                                    const isSelected = pathname?.includes(
                                        item?.value
                                    );

                                    return (
                                        <Button
                                            key={index}
                                            variant={
                                                isSelected
                                                    ? "contained"
                                                    : "text"
                                            }
                                            color={
                                                isSelected
                                                    ? "primary"
                                                    : "inherit"
                                            }
                                            size="large"
                                            onClick={() =>
                                                handleNavigate(item?.url)
                                            }
                                            fullWidth
                                            rounded="xl"
                                            startIcon={item?.icon}
                                            sx={{
                                                justifyContent: "flex-start",
                                            }}
                                        >
                                            {item?.label}
                                        </Button>
                                    );
                                })}
                            </Stack>
                        </Stack>

                        <Stack width={1} spacing={1}>
                            <Typography
                                variant="body2"
                                fontWeight={400}
                                color="text.disabled"
                                align="left"
                                pl={2}
                                textTransform="uppercase"
                            >
                                Theming
                            </Typography>
                            <ButtonGroup fullWidth>
                                {THEME_OPTIONS?.map((item, index) => (
                                    <Button
                                        key={index}
                                        variant={
                                            settings?.themeMode === item?.value
                                                ? "contained"
                                                : "soft"
                                        }
                                        color={
                                            settings?.themeMode === item?.value
                                                ? "primary"
                                                : "inherit"
                                        }
                                        onClick={() =>
                                            settings.handleSelectTheme(
                                                item?.value
                                            )
                                        }
                                        startIcon={item?.icon}
                                        rounded="xl"
                                    >
                                        {item?.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </Stack>
                    </Stack>

                    <Stack
                        width={0.8}
                        sx={{
                            border: `2px solid ${theme.palette.divider}`,
                            borderTop: 0,
                            borderBottom: 0,
                        }}
                    >
                        {children}
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    );
}
