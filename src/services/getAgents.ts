import { IAgent, IAgents } from "~types/api-types";
import { BASE_URL_API } from "~utils/constants";

export async function handleGetAgents(): Promise<IAgents> {
    const response = await fetch(`${BASE_URL_API}agents?isPlayableCharacter=true`);
    const agents = await response.json();

    return agents;
}

export async function handleGetAgent(uuid: string): Promise<{ data: IAgent }> {
    const response = await fetch(`${BASE_URL_API}agents/${uuid}`);
    const agent = await response.json();

    return agent;
}
