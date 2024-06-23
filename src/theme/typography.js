import { Quicksand } from "next/font/google";

export const primaryFont = Quicksand({
    weight: ["variable"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const typography = (theme) => {
    return {
        ...theme.typography,
        fontFamily: primaryFont.style.fontFamily,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightSemiBold: 600,
        fontWeightBold: 700,
        h1: {
            fontSize: theme.typography.pxToRem(97),
            fontWeight: 300,
        },
        h2: {
            fontSize: theme.typography.pxToRem(61),
            fontWeight: 700,
        },
        h3: {
            fontSize: theme.typography.pxToRem(48),
            fontWeight: 400,
        },
        h4: {
            fontSize: theme.typography.pxToRem(34),
            fontWeight: 700,
        },
        h5: {
            fontSize: theme.typography.pxToRem(24),
            fontWeight: 700,
        },
        h6: {
            fontSize: theme.typography.pxToRem(20),
            fontWeight: 500,
        },
        h6semi: {
            fontSize: theme.typography.pxToRem(20),
            fontWeight: 600,
        },
        h6bold: {
            fontSize: theme.typography.pxToRem(20),
            fontWeight: 700,
        },
        subtitle1: {
            fontSize: theme.typography.pxToRem(16),
            fontWeight: 600,
        },
        subtitle2: {
            fontSize: theme.typography.pxToRem(14),
            fontWeight: 500,
        },
        body1: {
            fontSize: theme.typography.pxToRem(16),
            fontWeight: 400,
            letterSpacing: "0.00938em",
            lineHeight: 1.5,
        },
        body1semi: {
            fontSize: theme.typography.pxToRem(16),
            fontWeight: 600,
            letterSpacing: "0.00938em",
            lineHeight: 1.5,
        },
        body1bold: {
            fontSize: theme.typography.pxToRem(16),
            fontWeight: 700,
            letterSpacing: "0.00938em",
            lineHeight: 1.5,
        },
        body2: {
            fontSize: theme.typography.pxToRem(14),
            fontWeight: 400,
            letterSpacing: "0.01071em",
            lineHeight: 1.43,
        },
        button: {
            fontSize: theme.typography.pxToRem(16),
            fontWeight: 600,
            letterSpacing: "0.02857em",
            lineHeight: 1.75,
            textTransform: "unset",
        },
        caption: {
            fontSize: theme.typography.pxToRem(12),
            fontWeight: 400,
        },
        overline: {
            fontSize: theme.typography.pxToRem(10),
            fontWeight: 400,
            textTransform: "uppercase",
        },
    };
};
