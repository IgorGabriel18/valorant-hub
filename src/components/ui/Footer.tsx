"use client";
import { GitBranch, GithubLogo } from "@phosphor-icons/react";
import Link from "next/link";

import { Logo, Navigation } from "~components/common";

export function Footer() {
    return (
        <footer className="w-full h-min pt-10 px-4 pb-4 grid grid-cols-max-screen grid-rows-1 justify-center">
            <div className="w-full h-min pt-4 px-4 pb-6 flex flex-wrap gap-y-4 gap-x-12 items-center md:justify-center">
                <Logo />
                <Navigation breakpoint="sm" />
                <div className="w-full h-min flex flex-col gap-y-2 items-center">
                    <h4 className="w-fit h-min text-slate-50 text-lg">Developed by Igor</h4>
                    <Link
                        href="https://github.com/IgorGabriel18"
                        target="_blank"
                        className="w-full h-min grid grid-cols-3 grid-rows-1 gap-6 justify-center items-center sm:w-max"
                    >
                        <GithubLogo className="text-brand text-2xl" />
                        <span className="text-brand text-lg">GitHub</span>
                        <GitBranch className="text-brand text-2xl" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
