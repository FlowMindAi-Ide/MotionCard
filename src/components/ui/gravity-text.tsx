"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface GravityTextProps {
    text: string;
    className?: string;
    font?: string;
    duration?: number;
    stiffness?: number;
}

export function GravityText({
    text = "GRAVITY",
    className,
    font = "font-bold",
    duration = 0.5,
    stiffness = 400
}: GravityTextProps) {
    const chars = text.split("");

    return (
        <div
            className={cn("flex flex-wrap justify-center gap-1 pb-4 relative", className)}
            style={{ minHeight: '120px' }}
        >
            {chars.map((char, i) => (
                <motion.span
                    key={i}
                    drag
                    dragSnapToOrigin // This makes it snap back!
                    dragElastic={0.3}
                    dragTransition={{
                        power: 0.3,
                        timeConstant: 200
                    }}
                    whileDrag={{
                        scale: 1.3,
                        cursor: 'grabbing',
                        zIndex: 10,
                    }}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        damping: 15,
                        stiffness: stiffness,
                        bounce: 0.8,
                        duration: duration,
                        delay: i * 0.1,
                    }}
                    className={cn(
                        "font-display transition-colors inline-block cursor-grab select-none",
                        font
                    )}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </div>
    );
}
