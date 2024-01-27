import Link from "next/link";
import { HTMLAttributes } from "react";

interface ILinkValorantProps extends HTMLAttributes<HTMLAnchorElement> {
    breakpoint?: "md" | "sm";
}

export function LinkValorant({ breakpoint, ...restAttributes }: ILinkValorantProps) {
    return (
        <Link
            href="https://playvalorant.com/en-us/"
            target="_blank"
            {...restAttributes}
            className={`w-fit h-min mx-auto py-2 px-10 border-2 rounded-md block text-base font-medium text-slate-50 bg-glass backdrop-blur-lg ${
                breakpoint === "md" ? "md:mx-0" : breakpoint === "sm" && "sm:mx-0"
            }`}
        >
            PLAY NOW
        </Link>
    );
}
