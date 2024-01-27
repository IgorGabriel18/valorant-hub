import { Metadata } from "next";
import Image from "next/image";

import { SectionContainer, SkillBox } from "~components/common";
import { handleGetAgent } from "~services/getAgents";
import { IParams } from "~types/global-types";

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
    const { displayName, description } = await handleGetAgent(params.uuid).then(({ data }) => data);

    return {
        title: `Valorant Hub - ${displayName}`,
        description: description
    };
}

export default async function Agent({ params }: IParams) {
    const { fullPortrait, displayName, role, description, backgroundGradientColors, abilities } = await handleGetAgent(
        params.uuid
    ).then(({ data }) => data);

    return (
        <>
            <SectionContainer heightFull>
                <section className="w-full h-min grid grid-cols-1 grid-rows-2 gap-10 items-center md:grid-cols-agent-layout md:grid-rows-1">
                    <Image
                        src={fullPortrait || ""}
                        alt={displayName}
                        width={660}
                        height={420}
                    />
                    <div className="w-full h-min grid grid-cols-1 grid-rows-3 gap-6">
                        <h1 className="text-4xl font-bold text-center text-slate-50 md:text-start">{displayName}</h1>
                        <p className="text-base text-center text-slate-500 md:text-start">{description}</p>
                        <SkillBox
                            title="ROLE"
                            skills={[role]}
                        />
                    </div>
                </section>
            </SectionContainer>
            <div
                className="w-10/12 max-w-7xl h-3 rounded-2xl"
                style={{
                    background: `linear-gradient(to right, #${backgroundGradientColors[0]}, #${backgroundGradientColors[1]}, #${backgroundGradientColors[2]}, #${backgroundGradientColors[3]})`
                }}
            />
            <SectionContainer>
                <SkillBox
                    title="ABILITIES"
                    skills={abilities}
                    maxBox
                />
            </SectionContainer>
        </>
    );
}
