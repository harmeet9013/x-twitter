export default function card(theme) {
    return {
        MuiCard: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    transition: theme.transitions.create(),
                    borderRadius: theme.spacing(2),
                }),
            },
        },
    };
}
