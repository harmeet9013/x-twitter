"use client";

import { HomeLayout } from "@/layouts/home";
import { HomeView } from "@/sections/home/view";

export default function Page() {
    return (
        <HomeLayout>
            <HomeView />
        </HomeLayout>
    );
}
