"use client";

import { X } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
//
import { useSettingsContext } from "@/settings";
//
import { THEME_OPTIONS } from "@/_mock";
import { NAV_LIST } from "@/config";
import { usePathname, useRouter } from "next/navigation";

export default function ClassicLayout({ children }) {
    const theme = useTheme();
    const settings = useSettingsContext();
    const pathname = usePathname();
    const router = useRouter();

    return (
        <Stack width={1} bgcolor="background.paper">
            <Container maxWidth="xl">
                <Stack height="100dvh" direction="row">
                    <Stack
                        width={0.2}
                        // maxWidth={MAIN_NAV_WIDTH}
                        height={1}
                        p={2}
                        spacing={3}
                        justifyContent="space-between"
                        alignItems="center"
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
                                                router.push(item?.url)
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
                                            settings.setThemeMode(item?.value)
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

                    <Box width={0.8}>{children}</Box>
                </Stack>
            </Container>
        </Stack>
    );
}
