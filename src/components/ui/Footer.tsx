"use client";
import { GithubLogo, GitBranch } from "@phosphor-icons/react";
import Link from "next/link";

import { Logo, Navigation } from "~components/common";

export function Footer() {
    return (
        <footer className="w-full h-min py-6 pb-4 grid grid-cols-max-screen grid-rows-1 justify-center bg-main">
            <div className="w-full h-min pt-4 px-4 pb-6 flex flex-wrap gap-y-4 gap-x-12 justify-center items-center">
                <Logo />
                <Navigation layout="footer" />
                <div className="w-full h-min grid grid-cols-1 grid-rows-2 gap-y-2 justify-items-center">
                    <h4 className="text-slate-50 text-lg">Developed by Igor</h4>
                    <Link
                        href="https://github.com/IgorGabriel18"
                        target="_blank"
                        className="w-max h-min grid grid-cols-3 grid-rows-1 gap-x-6 items-center"
                    >
                        <GithubLogo className="text-brand text-4xl" />
                        <span className="text-brand text-lg">GitHub</span>
                        <GitBranch className="text-brand text-4xl" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
