import { Metadata } from "next";
import Link from "next/link";

import { SectionContainer } from "~components/common";

export const metadata: Metadata = {
    title: "Not Found",
    description: "This page could not be found."
};

export default function NotFound() {
    return (
        <SectionContainer heightFull>
            <section className="w-full h-min grid grid-cols-1 grid-rows-3 gap-y-10 justify-items-center">
                <h1 className="text-6xl font-bold text-center text-slate-50">404</h1>
                <p className="text-base text-center text-slate-500">This page could not be found.</p>
                <Link
                    href="/"
                    className="w-fit h-min py-2 px-8 rounded-md text-lg font-medium text-center text-slate-50 bg-glass backdrop-blur-lg"
                >
                    Return Home
                </Link>
            </section>
        </SectionContainer>
    );
}
