"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

import { LinkValorant } from "~components/common";
import { pageRef } from "~utils/constants";

interface INavigationProps extends HTMLAttributes<HTMLAnchorElement> {
    layout: "navbar" | "footer";
}

export function Navigation({ layout, ...restAttributes }: INavigationProps) {
    const pathname = usePathname();

    return (
        <>
            <nav
                className={`w-full h-min flex flex-col gap-y-3 gap-x-8 justify-center ${
                    layout === "navbar"
                        ? "items-center md:w-max md:flex-row"
                        : layout === "footer" && "items-start sm:w-max sm:flex-row"
                }`}
            >
                {pageRef.map(({ ref, title }) => (
                    <Link
                        key={ref}
                        href={ref}
                        className={`w-fit h-min transition-transform duration-700 ease-in-out hover:translate-y-hover-navigation hover:text-brand ${
                            pathname === ref ? "text-brand" : "text-slate-50"
                        } ${layout === "navbar" ? "text-xl" : "text-sm"}`}
                        {...restAttributes}
                    >
                        {title}
                    </Link>
                ))}
            </nav>
            <LinkValorant breakpoint={layout === "navbar" ? "md" : "sm"} />
        </>
    );
}
