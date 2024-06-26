"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
//
import { paths } from "@/config";
//
import { useBoolean } from "@/hooks";
import { useAuthContext } from "@/contexts";
//
import { PageLoader } from "@/components/page-loader";

export default function GlobalAuthGuard({ children }) {
    const router = useRouter();
    const isChecking = useBoolean();
    const { session } = useAuthContext();

    useEffect(() => {
        if (!session) {
            router.replace(paths.login);
        }
    }, []);

    return isChecking?.value ? <PageLoader /> : <>{children}</>;
}
