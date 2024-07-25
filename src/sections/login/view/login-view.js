"use client";

import { Box, Card, Container, Fade, Stack, Typography } from "@mui/material";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormProvider, RHFTextField } from "@/components/hook-form";
import { LoadingButton } from "@mui/lab";
import { EmailRounded, PasswordRounded, X } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { signIn } from "next-auth/react";
import endpoints from "@/config/endpoints";

export default function LoginView() {
    const theme = useTheme();

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Enter a valid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "Enter more than 8 characters")
            .required("Password is required"),
    });

    const methods = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(loginSchema),
    });

    const {
        formState: { isSubmitting },
        handleSubmit,
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        const response = await signIn("credentials", {
            redirect: false,
            ...data,
        });
        console.log(response);
    });

    console.log(isSubmitting);

    return (
        <Container maxWidth="lg">
            <FormProvider methods={methods} onSubmit={onSubmit}>
                <Grid
                    container
                    spacing={2}
                    height={1}
                    pt={2}
                    disableEqualOverflow
                    alignItems="stretch"
                >
                    <Grid xs={12} md={6} display="flex">
                        <Stack
                            width={1}
                            spacing={{ xs: 1, md: 3 }}
                            justifyContent="center"
                            alignItems="flex-start"
                        >
                            <Typography
                                variant="h1"
                                align="left"
                                fontWeight={600}
                            >
                                Login
                            </Typography>
                            <X
                                color="primary"
                                sx={{
                                    fontSize: theme.spacing(25),
                                }}
                            />
                        </Stack>
                    </Grid>

                    <Grid xs={12} md={6} display="flex">
                        <Stack
                            sx={{
                                width: 1,
                                p: 3,
                                background: theme.palette.background.default,
                                borderRadius: 2,
                                border: `2px solid ${theme.palette.divider}`,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            spacing={2}
                        >
                            <RHFTextField
                                name="email"
                                label={
                                    <Box
                                        sx={{
                                            width: 1,
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}
                                    >
                                        <EmailRounded
                                            sx={{
                                                mx: 0.5,
                                            }}
                                        />
                                        Email
                                    </Box>
                                }
                            />
                            <RHFTextField
                                name="password"
                                label={
                                    <Box
                                        sx={{
                                            width: 1,
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}
                                    >
                                        <PasswordRounded
                                            sx={{
                                                mx: 0.5,
                                            }}
                                        />
                                        Password
                                    </Box>
                                }
                            />

                            <LoadingButton
                                loadingPosition="center"
                                loading={isSubmitting}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="tertiary"
                                rounded="sm"
                                sx={{
                                    borderRadius: 2,
                                    transition: theme.transitions.create(),
                                    "&:hover": {
                                        borderRadius: 6,
                                    },
                                }}
                            >
                                Login
                            </LoadingButton>
                        </Stack>
                    </Grid>
                </Grid>
            </FormProvider>

            {/* <Stack
                width={1}
                justifyContent="center"
                height={1}
                alignItems="center"
            >
                <Fade in={true}>
                    <Card
                        variant="outlined"
                        sx={{
                            px: 2,
                            py: 3,
                            width: 1,
                            background: theme.palette.background.default,
                        }}
                    ></Card>
                </Fade>
            </Stack> */}
        </Container>
    );
}
