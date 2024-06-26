"use client";

import { createContext, useEffect, useMemo, useState } from "react";
//
import { getCookie, setCookie } from "cookies-next";
//
import { useBoolean } from "@/hooks";
//
import { PageLoader } from "@/components/page-loader";

export const settings = createContext();

export default function SettingsProvider({ children }) {
    const isLoading = useBoolean(true);

    const [themeMode, setThemeMode] = useState("dark");

    const handleSelectTheme = (mode) => {
        setCookie("themeMode", mode);
        setThemeMode(mode);
    };

    const memoizedValue = useMemo(
        () => ({
            themeMode,
            setThemeMode,
            handleSelectTheme,
        }),
        [themeMode, setThemeMode, handleSelectTheme]
    );

    useEffect(() => {
        isLoading?.onTrue();

        const theme = getCookie("themeMode");

        if (!!theme) {
            setThemeMode(theme);
        } else {
            handleSelectTheme("dark");
        }

        isLoading?.onFalse();
    }, []);

    return (
        <settings.Provider value={memoizedValue}>
            {isLoading?.value ? <PageLoader /> : children}
        </settings.Provider>
    );
}
