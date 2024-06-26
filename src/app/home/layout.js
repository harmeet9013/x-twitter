import { GlobalAuthGuard } from "@/guards";
import { ClassicLayout } from "@/layouts/classic";

export default function Layout({ children }) {
    return (
        <GlobalAuthGuard>
            <ClassicLayout>{children}</ClassicLayout>
        </GlobalAuthGuard>
    );
}
