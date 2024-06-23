import { merge } from "lodash";
import { Quicksand } from "next/font/google";

export const primaryFont = Quicksand({
    subsets: ["latin"],
    weight: ["variable"],
});

export const typography = (theme) => {
    return merge(theme.typography, {
        fontFamily: primaryFont.style.fontFamily,
        button: {
            ...theme.typography.button,
            fontWeight: 600,
        },
        body1semi: {
            ...theme.typography.body1,
            fontWeight: 600,
        },
        h6semi: {
            ...theme.typography.h6,
            fontWeight: 600,
        },
    });
};
