export interface IAgents {
    data: IAgent[];
}

export interface IAgent {
    uuid: string;
    displayName: string;
    fullPortrait: string;
    background: string;
    description: string;
    backgroundGradientColors: string[];
    role: {
        displayName: string;
        displayIcon: string;
        description: string;
    };
    abilities: {
        slot: string;
        displayName: string;
        displayIcon: string;
        description: string;
    }[];
}
