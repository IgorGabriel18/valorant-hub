import { AgentCard, SectionContainer } from "~components/common";
import { handleGetAgents } from "~services/getAgents";

export default async function Agents() {
    const { data } = await handleGetAgents();

    return (
        <SectionContainer heightFull>
            <ul className="w-full h-min grid grid-cols-responsive grid-rows-responsive gap-10">
                {data.map((agent) => {
                    return (
                        <AgentCard
                            key={agent.uuid}
                            {...agent}
                        />
                    );
                })}
            </ul>
        </SectionContainer>
    );
}
