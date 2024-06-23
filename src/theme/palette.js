const BACKGROUND = (mode) => {
    const light = {
        background: {
            paper: "#f9f9f9",
        },
    };

    const dark = {
        background: {
            default: "#000000",
        },
    };

    return mode === "light" ? light : dark;
};

export default function palette(mode) {
    if (mode === "light") {
        return {
            mode: "light",
            ...BACKGROUND("light"),
        };
    } else {
        return {
            mode: "dark",
            ...BACKGROUND("dark"),
        };
    }
}
