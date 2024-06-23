//
import { SettingsProvider } from "@/settings";
//
import { ClassicLayout } from "@/layouts/classic";
//
import { ThemeProvider, primaryFont } from "@/theme";
import { SnackbarProvider } from "@/components/notistack";

export const metadata = {
    title: "X-twitter",
    description: "Clone of X (Twitter)",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={primaryFont.className}
                style={{
                    margin: 0,
                    padding: 0,
                }}
            >
                <SettingsProvider>
                    <ThemeProvider>
                        <SnackbarProvider>
                            <ClassicLayout>{children}</ClassicLayout>
                        </SnackbarProvider>
                    </ThemeProvider>
                </SettingsProvider>
            </body>
        </html>
    );
}
