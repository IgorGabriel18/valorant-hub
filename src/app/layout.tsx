import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer, Navbar } from "~components/ui";
import { IChildren } from "~types/global-types";
import "~styles/globals.css";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Valorant Hub",
    description:
        "Explore Valorant agents and discover detailed information about each agent to enhance your gaming strategies. The ultimate source to get to know Valorant heroes. Start now!"
};

export default function RootLayout({ children }: IChildren) {
    return (
        <html lang="en">
            <body className={`w-full h-screen min-h-min ${inter.className}`}>
                <Providers>
                    <Navbar />
                    <main className="w-full h-min flex flex-col gap-y-12 items-center bg-[url('../assets/images/background-2.png')] bg-center bg-cover">
                        {children}
                    </main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
