import { ThemeProvider, primaryFont } from "@/theme";

export const metadata = {
    title: "X-twitter",
    description: "Clone of X (Twitter)",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={primaryFont.className}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
