"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
    text: string;
    className?: string;
    mode?: "dark" | "light";
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";

export function GlitchText({ text = "GLITCH", className, mode = "dark" }: GlitchTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = () => {
        let iteration = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    return (
        <div
            className={cn("relative inline-block group cursor-default select-none", className)}
            onMouseEnter={scramble}
        >
            <span className={cn(
                "relative z-10 block",
                mode === "dark" ? "mix-blend-difference" : "mix-blend-normal text-zinc-900"
            )}>
                {displayText}
            </span>
            <span className={cn(
                "absolute top-0 left-0 -z-10 block w-full text-red-500 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-1 group-hover:translate-x-[2px]",
                mode === "dark" ? "mix-blend-screen" : "mix-blend-multiply"
            )}>
                {text}
            </span>
            <span className={cn(
                "absolute top-0 left-0 -z-10 block w-full text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-2 group-hover:-translate-x-[2px]",
                mode === "dark" ? "mix-blend-screen" : "mix-blend-multiply"
            )}>
                {text}
            </span>
        </div>
    );
}
