"use client";

import { useTheme } from "@emotion/react";
import {
    CommentOutlined,
    FavoriteBorderOutlined,
    MoreHorizRounded,
    ShareRounded,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Container,
    Divider,
    Fade,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";

export const HomeView = ({ avatar }) => {
    const theme = useTheme();

    return (
        <Fade in={true}>
            <Stack height={1} width={1} divider={<Divider />}>
                {new Array(10).fill(0)?.map((item, index) => {
                    return (
                        <Stack
                            px={3}
                            pt={4}
                            pb={2}
                            key={index}
                            spacing={2}
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            bgcolor="background.default"
                        >
                            <Avatar
                                src={
                                    "https://firebasestorage.googleapis.com/v0/b/blog-uploads.appspot.com/o/users%2Fharmeet_singh.jpg?alt=media&token=43631f63-740d-4a6b-a2bc-ecb9d0b30fa0"
                                }
                            />
                            <Stack
                                direction="column"
                                spacing={2}
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography
                                        variant="body1"
                                        fontWeight={600}
                                    >
                                        Harmeet Singh
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                    >
                                        @harmeet9013 &#183; 12 August 2024
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body1"
                                    textAlign="left"
                                    gutterBottom
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </Typography>

                                <Box
                                    component="img"
                                    src="https://firebasestorage.googleapis.com/v0/b/blog-uploads.appspot.com/o/blogs%2Fdynamic%20island.png?alt=media&token=d7972b20-3d30-454a-b4ff-e332a3e1783a"
                                    sx={{
                                        objectFit: "cover",
                                        width: 1,
                                        height: theme.spacing(40),
                                        borderRadius: 4,
                                        border: `2px solid ${theme.palette.divider}`,
                                    }}
                                />

                                <Stack
                                    direction="row"
                                    spacing={2}
                                    width={1}
                                    justifyContent="space-around"
                                    alignItems="center"
                                >
                                    <IconButton disableRipple>
                                        <FavoriteBorderOutlined />
                                    </IconButton>
                                    <IconButton disableRipple>
                                        <CommentOutlined />
                                    </IconButton>
                                    <IconButton disableRipple>
                                        <ShareRounded />
                                    </IconButton>
                                </Stack>
                            </Stack>
                            <IconButton disableRipple>
                                <MoreHorizRounded />
                            </IconButton>
                        </Stack>
                    );
                })}
            </Stack>
        </Fade>
    );
};
