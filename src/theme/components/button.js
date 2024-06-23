import { merge } from "lodash";

export default function button(theme) {
    const roundedValues = {
        xs: 0,
        sm: 1,
        md: 2,
        xl: 4,
    };

    const styles = (ownerState) => {
        const isLightMode = theme.palette.mode === "light";
        const roundedValue = roundedValues[ownerState.rounded];
        const softVariant = ownerState.variant === "soft";
        const inheritColor = ownerState.color === "inherit";

        if (!roundedValue) {
            throw new Error(
                `Invalid rounded value: [${Object.keys(roundedValues)?.join(
                    ", "
                )}]`
            );
        }

        const defaultStyle = {
            borderRadius: theme.spacing(roundedValue),
            textTransform: "none",
            boxShadow: "none",
            transition: theme.transitions.create(),
            "&:hover": {
                boxShadow: "none",
            },
        };

        const variantStyles = {
            ...(softVariant && {
                ...(inheritColor && {
                    backgroundColor: theme.palette.grey[isLightMode ? 80 : 20],
                    color: theme.palette.grey[isLightMode ? 0 : 100],
                    "&:hover": {
                        backgroundColor:
                            theme.palette.grey[isLightMode ? 90 : 15],
                    },
                }),
            }),
        };

        return merge(defaultStyle, variantStyles);
    };

    return {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => styles(ownerState),
            },
            defaultProps: {
                rounded: "sm",
            },
        },
    };
}
