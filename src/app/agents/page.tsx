import { Metadata } from "next";

import { AgentCard, SectionContainer } from "~components/common";
import { handleGetAgents } from "~services/getAgents";

export const metadata: Metadata = {
    title: "Valorant Hub - Agents",
    description:
        "Explore the full lineup of Valorant agents! Our page provides a comprehensive overview of each hero, including details on abilities, backstories, and recommended strategies. The essential tool for delving into the diverse cast of Valorant and refining your gaming tactics. Find your favorite agent and dominate the battlefield. Explore now!"
};

export default async function Agents() {
    const { data } = await handleGetAgents();

    return (
        <SectionContainer heightFull>
            <ul className="w-full h-min grid grid-cols-responsive grid-rows-responsive gap-10 justify-center">
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
