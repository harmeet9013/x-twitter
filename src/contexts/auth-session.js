"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
//
import { getSession } from "next-auth/react";
//
import { useBoolean } from "@/hooks";
//
import { PageLoader } from "@/components/page-loader";

const authContext = createContext();

export function AuthSession({ children }) {
    const isFetching = useBoolean();

    const [session, setSession] = useState(null);

    const memoizedValue = useMemo(
        () => ({
            session,
        }),
        [session]
    );

    useEffect(() => {
        async () => {
            isFetching.onTrue();

            const sessionData = await getSession();

            if (!!sessionData) {
                setSession(sessionData.session);
            }

            isFetching.onFalse();
        };
    }, []);

    return isFetching?.value ? (
        <PageLoader />
    ) : (
        <authContext.Provider value={memoizedValue}>
            {children}
        </authContext.Provider>
    );
}

export function useAuthContext() {
    const context = useContext(authContext);

    if (!authContext) {
        throw new Error(
            "useAuthContext must be placed inside AuthSession provider!"
        );
    }

    return context;
}
