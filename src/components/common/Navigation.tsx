import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

import { pageRef } from "~utils/constants";

interface INavigationProps {
    breakpoint: "sm" | "md";
}

export function Navigation({
    breakpoint,
    ...restAttributes
}: INavigationProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
    const pathname = usePathname();

    return (
        <nav
            className={`w-full h-min flex flex-col gap-y-3 gap-x-8 ${
                breakpoint === "md" ? "md:w-max md:flex-row" : breakpoint === "sm" && "sm:w-max sm:flex-row"
            }`}
        >
            {pageRef.map(({ ref, title }) => (
                <Link
                    key={title}
                    href={ref}
                    {...restAttributes}
                    className={`w-full h-min duration-200 hover:animate-swing-effect hover:text-brand ${
                        breakpoint === "md"
                            ? "text-xl text-center md:w-max"
                            : breakpoint === "sm" && "text-sm text-left"
                    } ${pathname === ref ? "text-brand" : "text-slate-50"}`}
                >
                    {title}
                </Link>
            ))}
        </nav>
    );
}
