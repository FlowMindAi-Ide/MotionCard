"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export function GlowButton({ children, className, onClick }: GlowButtonProps) {
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
            onMouseMove={handleMouseMove}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative overflow-hidden px-8 py-3 rounded-full bg-zinc-900 border border-zinc-700 text-white font-semibold transition-all duration-300",
                className
            )}
        >
            {/* Cursor glow effect */}
            {isHovering && (
                <div
                    className="absolute pointer-events-none"
                    style={{
                        left: mousePosition.x,
                        top: mousePosition.y,
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(99,102,241,0.2) 30%, transparent 70%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            )}

            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}
