"use client";

import { createContext, useMemo, useState } from "react";

export const settings = createContext();

export default function SettingsProvider({ children }) {
    const [themeMode, setThemeMode] = useState("light");

    const memoizedValue = useMemo(
        () => ({
            themeMode,
            setThemeMode,
        }),
        [themeMode, setThemeMode]
    );

    return (
        <settings.Provider value={memoizedValue}>{children}</settings.Provider>
    );
}
