export default function alert(theme) {
    return {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    cursor: "default",
                    borderRadius: theme.spacing(1),
                    transition: theme.transitions.create(),
                    "&:hover": {
                        borderRadius: theme.spacing(2),
                    },
                }),
                message: {
                    ...theme.typography.body1,
                    fontWeight: theme.typography.fontWeightBold,
                },
            },
        },
    };
}
