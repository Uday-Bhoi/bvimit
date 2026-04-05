import type { Metadata } from "next";
import "@/index.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
    title: "BVIMIT",
    description: "BVIMIT official website",
    icons: {
        icon: "/assets/images/bharati_logo.png",
        shortcut: "/assets/images/bharati_logo.png",
        apple: "/assets/images/bharati_logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
