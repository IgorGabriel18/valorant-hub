import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                brand: "#e11d48",
                main: "#1e1e1e",
                glass: "rgba(0, 0, 0, 0.2)"
            },
            gridTemplateColumns: {
                "1": "fit-content",
                "3": "repeat(3, max-content)",
                "max-screen": "min(100%, 90rem)"
            },
            gridTemplateRows: {
                "1": "min-content",
                "2": "repeat(2, min-content)"
            },
            keyframes: {
                simpleRender: {
                    from: { opacity: "0" },
                    to: { opacity: "100%" }
                }
            },
            animation: {
                "simple-render": "simpleRender 0.75s ease-in-out"
            },
            translate: {
                "hover-navigation": "-0.5rem"
            }
        }
    },
    plugins: []
};

export default config;
