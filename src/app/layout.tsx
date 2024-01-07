import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer, Navbar } from "~components/ui";
import { IChildren } from "~types/global-types";
import "~styles/globals.css";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Valorant - Home",
    description: "Valorant app"
};

export default function RootLayout({ children }: IChildren) {
    return (
        <html lang="en">
            <body
                className={`w-full h-min min-h-screen flex flex-col gap-y-12 justify-between bg-[url('../assets/images/background.png')] bg-cover ${inter.className}`}
            >
                <Providers>
                    <Navbar />
                    <main className="w-full h-full pt-32 px-4 pb-4 flex flex-col gap-y-12 md:pt-40">{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
