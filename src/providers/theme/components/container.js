export default function container(theme) {
    return {
        MuiContainer: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    transition: theme.transitions.create([
                        "border",
                        "background",
                        "width",
                    ]),
                    height: "100%",
                }),
            },
        },
    };
}
