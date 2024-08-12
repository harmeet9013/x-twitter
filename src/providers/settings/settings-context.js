import { useContext } from "react";
//
import { settings } from "./settings-provider";

export default function useSettingsContext() {
    const context = useContext(settings);

    if (!context) {
        throw new Error(
            "useSettingsContext should be wrapped inside the SettingsProvider!"
        );
    }

    return context;
}
