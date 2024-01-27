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
    role: ISkill;
    abilities: ISkill[];
}

export interface ISkill {
    slot?: string;
    displayName: string;
    displayIcon: string;
    description: string;
}
