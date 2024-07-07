//
import { SettingsProvider } from "@/settings";
//
import { AuthContext, AuthSession } from "@/contexts";
//
import { ThemeProvider, primaryFont } from "@/theme";
//
import { SnackbarProvider } from "@/components/notistack";

export const metadata = {
    title: "X-twitter",
    description: "Clone of X (Twitter)",
};

export default function RootLayout({ children, session }) {
    return (
        <html lang="en">
            <body
                className={primaryFont.className}
                style={{
                    margin: 0,
                    padding: 0,
                    height: "100dvh",
                }}
            >
                <AuthContext session={session}>
                    <AuthSession>
                        <SettingsProvider>
                            <ThemeProvider>
                                <SnackbarProvider>{children}</SnackbarProvider>
                            </ThemeProvider>
                        </SettingsProvider>
                    </AuthSession>
                </AuthContext>
            </body>
        </html>
    );
}
