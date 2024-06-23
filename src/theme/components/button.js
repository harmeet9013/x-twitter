import { merge } from "lodash";

export default function button(theme) {
    const roundedValues = {
        xs: 0,
        sm: 1,
        md: 2,
        xl: 4,
    };

    const styles = (ownerState) => {
        const roundedValue = roundedValues[ownerState.rounded];
        const softVariant = ownerState.variant === "soft";

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
        };

        const variantStyles = {
            ...(softVariant && {
                backgroundColor: theme.palette.action.hover,
                "&:hover": {
                    backgroundColor: theme.palette.action.focus,
                },
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
