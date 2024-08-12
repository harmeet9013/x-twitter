"use client";

import { usePathname, useRouter } from "next/navigation";
//
import {
    Button,
    ButtonGroup,
    Card,
    CardContent,
    Container,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
import { X } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
//
import { useSettingsContext } from "@/providers/settings";
//
import { NAV_LIST } from "@/config";
//
import { THEME_OPTIONS } from "@/_mock";

export const ClassicLayout = ({ children }) => {
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
            <Container maxWidth="lg">
                <Stack height="100dvh" direction="row">
                    <Stack
                        p={2}
                        height={1}
                        spacing={3}
                        width={0.18}
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
                                <X
                                    fontSize="large"
                                    sx={{
                                        color: "primary.light",
                                    }}
                                />

                                <Typography
                                    variant="h4"
                                    fontWeight={600}
                                    color="primary.light"
                                >
                                    Twitter
                                </Typography>
                            </Stack>

                            <Stack width={1} spacing={2} alignItems="center">
                                {NAV_LIST?.map((item, index) => {
                                    const isSelected = pathname === item?.url;

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
                        width={0.6}
                        sx={{
                            border: `2px solid ${theme.palette.divider}`,
                            borderTop: 0,
                            borderBottom: 0,
                        }}
                    >
                        {children}
                    </Stack>

                    <Stack width={0.22} px={3} pt={3}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    align="center"
                                >
                                    Trending
                                </Typography>

                                <Divider flexItem />

                                <Stack pt={2}>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        color="primary.light"
                                    >
                                        #One
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        color="primary.light"
                                    >
                                        #Two
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        color="primary.light"
                                    >
                                        #Three
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    );
};
