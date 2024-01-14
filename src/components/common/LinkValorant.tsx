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
            className={`w-fit h-min mx-auto block ${
                breakpoint === "md" ? "md:mx-0" : breakpoint === "sm" && "sm:mx-0"
            }`}
        >
            PLAY NOW
        </Link>
    );
}
