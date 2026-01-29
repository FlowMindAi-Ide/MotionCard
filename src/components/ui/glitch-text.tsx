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

    useEffect(() => {
        setDisplayText(text);
    }, [text]);

    const [isGlitching, setIsGlitching] = useState(false);

    const scramble = () => {
        setIsGlitching(true);
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
                setIsGlitching(false);
            }

            iteration += 1 / 3;
        }, 30);
    };

    return (
        <div
            className={cn("relative inline-block cursor-default select-none tap-highlight-transparent", className)}
            onMouseEnter={scramble}
            onClick={scramble}
        >
            <span className={cn(
                "relative z-10 block",
                mode === "dark" ? "mix-blend-difference" : "mix-blend-normal text-zinc-900"
            )}>
                {displayText}
            </span>
            <span className={cn(
                "absolute top-0 left-0 -z-10 block w-full text-red-500 transition-opacity duration-100",
                isGlitching ? "opacity-100 animate-glitch-1 translate-x-[2px]" : "opacity-0",
                mode === "dark" ? "mix-blend-screen" : "mix-blend-multiply"
            )}>
                {text}
            </span>
            <span className={cn(
                "absolute top-0 left-0 -z-10 block w-full text-cyan-500 transition-opacity duration-100",
                isGlitching ? "opacity-100 animate-glitch-2 -translate-x-[2px]" : "opacity-0",
                mode === "dark" ? "mix-blend-screen" : "mix-blend-multiply"
            )}>
                {text}
            </span>
        </div>
    );
}
