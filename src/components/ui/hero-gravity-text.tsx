"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroGravityTextProps {
    text: string;
    className?: string;
}

export function HeroGravityText({ text = "GRAVITY", className }: HeroGravityTextProps) {
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
                        stiffness: 400,
                        bounce: 0.8,
                        delay: i * 0.1,
                    }}
                    className="text-4xl font-bold font-display hover:text-primary transition-colors inline-block cursor-grab select-none"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </div>
    );
}
