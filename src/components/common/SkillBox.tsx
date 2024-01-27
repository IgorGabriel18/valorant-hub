import Image from "next/image";

import { ISkill } from "~types/api-types";

interface ISkillBoxProps {
    title: string;
    skills: ISkill[];
    maxBox?: true;
}

export function SkillBox({ title, skills, maxBox }: ISkillBoxProps) {
    return (
        <div className="w-full h-min grid grid-cols-1 grid-rows-2 gap-y-7 justify-items-center">
            <h2 className="text-2xl text-center text-slate-50">{title}</h2>
            <ul className="w-full h-min flex flex-col gap-y-4 gap-x-2 justify-center md:flex-wrap md:flex-row">
                {skills.map(({ slot, displayName, displayIcon, description }) => (
                    <li
                        key={slot || displayName}
                        className={`w-full h-auto min-h-min grid grid-cols-1 grid-rows-2 gap-4 ${
                            maxBox && "md:w-5/12"
                        }`}
                    >
                        <figure className="w-max h-min grid grid-cols-1 grid-rows-2 gap-3 place-items-center md:grid-cols-2 md:grid-rows-1">
                            <Image
                                src={displayIcon || ""}
                                alt={displayName}
                                width={32}
                                height={32}
                            />
                            <figcaption className="text-lg text-slate-50">{displayName}</figcaption>
                        </figure>
                        <p className="text-sm text-start text-slate-500">{description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
