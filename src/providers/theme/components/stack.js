export default function stack(theme) {
    return {
        MuiStack: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    transition: theme.transitions.create([
                        "border",
                        "background",
                        "width",
                    ]),
                }),
            },
        },
    };
}
