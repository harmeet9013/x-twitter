export default function typography(theme) {
    return {
        MuiTypography: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    transition: theme.transitions.create(["color"]),
                }),
            },
        },
    };
}
