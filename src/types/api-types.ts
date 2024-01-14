export interface IAgents {
    data: IAgent[];
}

interface IAgent {
    uuid: string;
    displayName: string;
    fullPortrait: string;
    background: string;
    role: {
        displayName: string;
        displayIcon: string;
    };
    abilities: {
        slot: string;
        displayName: string;
        displayIcon: string;
    }[];
}
