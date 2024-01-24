export const breakpoints = {
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "2xl": 1536
};

export const pageRef: { ref: string; title: string }[] = [
    {
        ref: "/",
        title: "Home"
    },
    {
        ref: "/agents",
        title: "Agents"
    },
    {
        ref: "/maps",
        title: "Maps"
    },
    {
        ref: "/weapons",
        title: "Weapons"
    }
];

export const BASE_URL_API = "https://valorant-api.com/v1/";
