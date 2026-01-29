"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface RippleButtonProps {
    children?: React.ReactNode;
    text?: string;
    className?: string;
    onClick?: () => void;
    rippleColor?: string;
    duration?: string;
}

interface Ripple {
    x: number;
    y: number;
    id: number;
}

export function RippleButton({
    children,
    text,
    className,
    onClick,
    rippleColor = "rgba(255, 255, 255, 0.5)",
    duration = "0.6s"
}: RippleButtonProps) {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple: Ripple = {
            x,
            y,
            id: Date.now(),
        };

        setRipples((prev) => [...prev, newRipple]);

        // Remove ripple after animation
        const durationValue = parseFloat(duration) || 0.6;
        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, durationValue * 1000);

        onClick?.();
    };

    return (
        <button
            onClick={handleClick}
            className={cn(
                "relative overflow-hidden rounded-full px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300",
                className
            )}
        >
            {ripples.map((ripple) => (
                <motion.span
                    key={ripple.id}
                    className="absolute rounded-full"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        backgroundColor: rippleColor,
                    }}
                    initial={{
                        width: 0,
                        height: 0,
                        x: 0,
                        y: 0,
                        opacity: 1,
                    }}
                    animate={{
                        width: 500,
                        height: 500,
                        x: -250,
                        y: -250,
                        opacity: 0,
                    }}
                    transition={{
                        duration: parseFloat(duration) || 0.6,
                        ease: "easeOut",
                    }}
                />
            ))}
            <span className="relative z-10">{children || text || "Click Me"}</span>
        </button>
    );
}
