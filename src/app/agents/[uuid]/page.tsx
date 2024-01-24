import Image from "next/image";

import { SectionContainer } from "~components/common";
import { handleGetAgent } from "~services/getAgents";
import { IParams } from "~types/global-types";

export default async function Agent({ params }: IParams) {
    const { data } = await handleGetAgent(params.uuid);

    return (
        <SectionContainer heightFull>
            <section className="w-11/12 h-min mx-auto p-6 rounded bg-main">
                <figure className="w-full h-min grid grid-cols-1 grid-rows-2 gap-x-5 justify-center">
                    <figcaption className="w-full h-min text-slate-50 text-2xl font-extrabold text-start">
                        {data.displayName}
                    </figcaption>
                    <Image
                        src={data.fullPortrait || ""}
                        alt={data.displayName}
                        width={310}
                        height={420}
                    />
                </figure>
                <p className="w-full h-min text-slate-50 text-base text-center">{data.description}</p>
                <div className="w-full h-min flex flex-wrap gap-4">
                    <figure className="w-fit h-min grid grid-cols-1 grid-rows-2 gap-y-2 justify-items-center">
                        <Image
                            src={data.role.displayIcon || ""}
                            alt={data.role.displayName}
                            width={35}
                            height={35}
                        />
                        <figcaption>{data.role.displayName}</figcaption>
                    </figure>
                    <p>{data.role.description}</p>
                </div>
                <ul>
                    {data.abilities.map(({ slot, displayIcon, displayName, description }) => (
                        <li key={slot}>
                            <figure>
                                <Image
                                    src={displayIcon || ""}
                                    alt={displayName}
                                    width={35}
                                    height={35}
                                />
                                <figcaption>{displayName}</figcaption>
                            </figure>
                            <p>{description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </SectionContainer>
    );
}
