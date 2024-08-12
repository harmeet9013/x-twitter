export default function box(theme) {
    return {
        MuiBox: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    transition: theme.transitions.create(),
                }),
            },
        },
    };
}
