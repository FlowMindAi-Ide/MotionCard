"use client";

import { cn } from "@/lib/utils";

interface GradientBorderProps {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    gradient?: string;
    borderWidth?: number;
    duration?: number;
    borderRadius?: number;
}

const tailwindColorMap: Record<string, string> = {
    'teal-500': '#06d4d4ff',
    'blue-400': '#4194faff',
    'purple-500': '#8e2aebff',
    'blue-500': '#6296e9ff',
    'indigo-500': '#6668dfff',
    'green-500': '#22c55e',
    'red-500': '#ef445bff',
    'yellow-500': '#eab308'
};

export function GradientBorder({
    children,
    className,
    containerClassName,
    gradient = "from-blue-400 to-purple-500",
    borderWidth = 4,
    duration = 3,
    borderRadius = 24
}: GradientBorderProps) {
    // Parse colors for the conic gradient
    const fromColorMatch = gradient.match(/from-([\w-]+)/);
    const toColorMatch = gradient.match(/to-([\w-]+)/);

    const fromColor = fromColorMatch ? tailwindColorMap[fromColorMatch[1]] || '#3B82F6' : '#3B82F6';
    const toColor = toColorMatch ? tailwindColorMap[toColorMatch[1]] || '#A855F7' : '#A855F7';

    return (
        <div
            className={cn("relative group overflow-hidden", containerClassName)}
            style={{
                borderRadius: borderRadius,
                padding: borderWidth,
            }}
        >
            {/* Animated Gradient Border */}
            <div
                className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]"
                style={{
                    background: `conic-gradient(from 0deg, ${fromColor}, ${toColor}, ${fromColor})`,
                    animationDuration: `${duration}s`,
                }}
            />

            {/* Glow Effect on Hover */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl",
                gradient.includes("from-") ? "bg-gradient-to-r " + gradient : "bg-purple-500/50"
            )} />

            <div
                className={cn("relative bg-zinc-950 h-full w-full z-10", className)}
                style={{
                    borderRadius: Math.max(0, borderRadius ? borderRadius - borderWidth : 0),
                }}
            >
                {children}
            </div>
        </div>
    );
}
