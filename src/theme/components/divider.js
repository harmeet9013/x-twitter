export default function divider(theme) {
    return {
        MuiDivider: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    transition: theme.transitions.create(),
                }),
            },
        },
    };
}
