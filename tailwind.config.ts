import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
                display: ['var(--font-outfit)']
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            animation: {
                "glitch-1": "glitch-1 2.5s infinite linear alternate-reverse",
                "glitch-2": "glitch-2 3s infinite linear alternate-reverse",
                "shimmer": "shimmer 3s infinite linear",
                "scroll": "scroll var(--animation-duration, 40s) var(--animation-direction, normal) linear infinite",
            },
            keyframes: {
                "glitch-1": {
                    "0%": { clipPath: "polygon(0 2%, 100% 2%, 100% 5%, 0 5%)" },
                    "10%": { clipPath: "polygon(0 15%, 100% 15%, 100% 15%, 0 15%)" },
                    "20%": { clipPath: "polygon(0 10%, 100% 10%, 100% 20%, 0 20%)" },
                    "30%": { clipPath: "polygon(0 1%, 100% 1%, 100% 2%, 0 2%)" },
                    "40%": { clipPath: "polygon(0 33%, 100% 33%, 100% 33%, 0 33%)" },
                    "50%": { clipPath: "polygon(0 44%, 100% 44%, 100% 44%, 0 44%)" },
                    "60%": { clipPath: "polygon(0 50%, 100% 50%, 100% 20%, 0 20%)" },
                    "70%": { clipPath: "polygon(0 70%, 100% 70%, 100% 70%, 0 70%)" },
                    "80%": { clipPath: "polygon(0 80%, 100% 80%, 100% 80%, 0 80%)" },
                    "90%": { clipPath: "polygon(0 50%, 100% 50%, 100% 55%, 0 55%)" },
                    "100%": { clipPath: "polygon(0 70%, 100% 70%, 100% 80%, 0 80%)" },
                },
                "glitch-2": {
                    "0%": { clipPath: "polygon(0 25%, 100% 25%, 100% 30%, 0 30%)" },
                    "15%": { clipPath: "polygon(0 3%, 100% 3%, 100% 3%, 0 3%)" },
                    "22%": { clipPath: "polygon(0 5%, 100% 5%, 100% 20%, 0 20%)" },
                    "31%": { clipPath: "polygon(0 20%, 100% 20%, 100% 20%, 0 20%)" },
                    "45%": { clipPath: "polygon(0 40%, 100% 40%, 100% 40%, 0 40%)" },
                    "51%": { clipPath: "polygon(0 52%, 100% 52%, 100% 59%, 0 59%)" },
                    "63%": { clipPath: "polygon(0 60%, 100% 60%, 100% 60%, 0 60%)" },
                    "76%": { clipPath: "polygon(0 75%, 100% 75%, 100% 75%, 0 75%)" },
                    "81%": { clipPath: "polygon(0 65%, 100% 65%, 100% 40%, 0 40%)" },
                    "94%": { clipPath: "polygon(0 45%, 100% 45%, 100% 50%, 0 50%)" },
                    "100%": { clipPath: "polygon(0 14%, 100% 14%, 100% 33%, 0 33%)" },
                },
                "shimmer": {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                "scroll": {
                    to: {
                        transform: "translateX(calc(-50% - 0.5rem))",
                    },
                },
            },
        }
    },
    plugins: [tailwindAnimate],
};
export default config;
