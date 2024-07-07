export default function textfield(theme) {
    return {
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    transition: theme.transitions.create(),
                    borderRadius: theme.spacing(1),
                    backgrond: theme.palette.background.default,
                }),
                notchedOutline: {
                    borderWidth: "2px",
                    transition: theme.transitions.create(["border-color"], {
                        duration: theme.transitions.duration.shorter,
                    }),
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: ({ ownerState }) => ({}),
            },
        },
    };
}
