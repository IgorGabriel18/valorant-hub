import Image from "next/image";

import { SectionContainer, SkillBox } from "~components/common";
import { handleGetAgent } from "~services/getAgents";
import { IParams } from "~types/global-types";

export default async function Agent({ params }: IParams) {
    const { data } = await handleGetAgent(params.uuid);

    return (
        <>
            <SectionContainer heightFull>
                <section className="w-full h-min grid grid-cols-1 grid-rows-2 gap-10 items-center md:grid-cols-agent-layout md:grid-rows-1">
                    <Image
                        src={data.fullPortrait || ""}
                        alt={data.displayName}
                        width={660}
                        height={420}
                    />
                    <div className="w-full h-min grid grid-cols-1 grid-rows-3 gap-6">
                        <h1 className="text-4xl font-bold text-center text-slate-50 md:text-start">
                            {data.displayName}
                        </h1>
                        <p className="text-base text-center text-slate-500 md:text-start">{data.description}</p>
                        <SkillBox
                            title="ROLE"
                            skills={[data.role]}
                        />
                    </div>
                </section>
            </SectionContainer>
            <div
                className="w-10/12 max-w-7xl h-3 rounded-2xl"
                style={{
                    background: `linear-gradient(to right, #${data.backgroundGradientColors[0]}, #${data.backgroundGradientColors[1]}, #${data.backgroundGradientColors[2]}, #${data.backgroundGradientColors[3]})`
                }}
            />
            <SectionContainer>
                <SkillBox
                    title="ABILITIES"
                    skills={data.abilities}
                    maxBox
                />
            </SectionContainer>
        </>
    );
}
