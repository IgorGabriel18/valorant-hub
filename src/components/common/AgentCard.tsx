import Image from "next/image";
import Link from "next/link";

import { IAgent } from "~types/api-types";

export function AgentCard({
    uuid,
    backgroundGradientColors,
    background,
    role,
    displayName,
    fullPortrait,
    abilities
}: IAgent) {
    return (
        <li
            key={uuid}
            className="w-full max-w-80 h-min"
            style={{
                backgroundImage: `linear-gradient(to top, #${backgroundGradientColors[0]}, transparent 90%), url(${background})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat"
            }}
        >
            <fieldset className="w-full h-min py-6 px-3 grid grid-cols-1 grid-rows-3 gap-y-8 justify-items-center border-2 rounded border-purple-400">
                <legend className="w-3/4 h-min mx-auto py-1 px-8 border-2 rounded-full grid grid-cols-2 grid-rows-1 justify-between items-center border-slate-50">
                    <p className="w-max h-min text-base font-normal text-slate-50">{displayName}</p>
                    <Image
                        src={role.displayIcon || ""}
                        alt={role.displayName}
                        width={20}
                        height={20}
                    />
                </legend>
                <Image
                    src={fullPortrait}
                    alt={displayName}
                    width={290}
                    height={350}
                    loading="lazy"
                    className="hover:scale-150 transition-transform duration-300 ease-in-out"
                />
                <div className="w-full h-min py-2 px-4 rounded flex gap-x-4 justify-evenly bg-main">
                    {abilities.map(({ slot, displayIcon, displayName }) => (
                        <Image
                            key={slot}
                            src={displayIcon || ""}
                            alt={displayName}
                            width={35}
                            height={35}
                        />
                    ))}
                </div>
                <Link
                    href={`/agents/${uuid}`}
                    className="w-max h-min py-2 px-8 rounded-full bg-main text-base font-normal text-slate-50 hover:px-11 duration-300 ease-in-out"
                >
                    view more
                </Link>
            </fieldset>
        </li>
    );
}
