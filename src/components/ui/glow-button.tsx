"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
    children?: React.ReactNode;
    text?: string;
    className?: string;
    onClick?: () => void;
    glowColor?: string;
    hoverColor?: string;
}

export function GlowButton({ children, text, className, onClick, glowColor = "#6366f1", hoverColor = "#ffffff" }: GlowButtonProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.button
            onClick={onClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={() => setIsHovering(true)}
            onTouchEnd={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative overflow-hidden px-8 py-3 rounded-full bg-zinc-900 border border-zinc-700 text-white font-semibold transition-all duration-300",
                className
            )}
        >
            {/* Cursor glow effect - visible on hover or on mobile (always at center) */}
            <div
                className={cn(
                    "absolute pointer-events-none transition-opacity duration-300",
                    isHovering ? "opacity-100" : "opacity-30 sm:opacity-0"
                )}
                style={{
                    left: isHovering ? mousePosition.x : "50%",
                    top: isHovering ? mousePosition.y : "50%",
                    width: '200px',
                    height: '200px',
                    background: `radial-gradient(circle, ${glowColor} 0%, rgba(99,102,241,0) 70%)`,
                    transform: 'translate(-50%, -50%)',
                }}
            />

            <span className="relative z-10" style={{ color: isHovering ? hoverColor : '' }}>{children || text || "Hover Me"}</span>
        </motion.button>
    );
}
