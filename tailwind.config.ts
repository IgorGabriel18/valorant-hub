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
                glass: "rgba(0, 0, 0, 0.2)"
            },
            gridTemplateColumns: {
                "3": "repeat(3, max-content)",
                "max-screen": "min(100%, 90rem)"
            },
            gridTemplateRows: {
                "1": "min-content"
            },
            keyframes: {
                simpleRender: {
                    from: { opacity: "0" },
                    to: { opacity: "100%" }
                },
                swingEffect: {
                    "0%": { transform: "rotate(0deg)" },
                    "25%": { transform: "rotate(8deg)" },
                    "50%": { transform: "rotate(-8deg)" },
                    "100%": { transform: "rotate(0deg)" }
                }
            },
            animation: {
                "simple-render": "simpleRender 0.75s ease-in-out",
                "swing-effect": "swingEffect 0.5s ease-in-out"
            }
        }
    },
    plugins: []
};

export default config;
