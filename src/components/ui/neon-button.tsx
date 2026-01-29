"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonButtonProps {
    children?: React.ReactNode;
    text?: string;
    className?: string;
    onClick?: () => void;
    color?: "cyan" | "pink" | "purple";
}

export function NeonButton({
    children,
    text,
    className,
    onClick,
    color = "cyan"
}: NeonButtonProps) {
    const colors = {
        cyan: {
            bg: "bg-cyan-500/10",
            border: "border-cyan-400/50",
            text: "text-cyan-300",
            glow: "shadow-[0_0_20px_rgba(34,211,238,0.3),inset_0_0_20px_rgba(34,211,238,0.1)]",
            hoverGlow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.6),0_0_60px_rgba(34,211,238,0.3),inset_0_0_20px_rgba(34,211,238,0.2)]",
        },
        pink: {
            bg: "bg-pink-500/10",
            border: "border-pink-400/50",
            text: "text-pink-300",
            glow: "shadow-[0_0_20px_rgba(244,114,182,0.3),inset_0_0_20px_rgba(244,114,182,0.1)]",
            hoverGlow: "hover:shadow-[0_0_30px_rgba(244,114,182,0.6),0_0_60px_rgba(244,114,182,0.3),inset_0_0_20px_rgba(244,114,182,0.2)]",
        },
        purple: {
            bg: "bg-purple-500/10",
            border: "border-purple-400/50",
            text: "text-purple-300",
            glow: "shadow-[0_0_20px_rgba(192,132,252,0.3),inset_0_0_20px_rgba(192,132,252,0.1)]",
            hoverGlow: "hover:shadow-[0_0_30px_rgba(192,132,252,0.6),0_0_60px_rgba(192,132,252,0.3),inset_0_0_20px_rgba(192,132,252,0.2)]",
        },
    };

    const theme = colors[color];

    // Get glow values for animations
    const glowValues = {
        cyan: {
            default: "0 0 20px rgba(34,211,238,0.3), inset 0 0 20px rgba(34,211,238,0.1)",
            active: "0 0 30px rgba(34,211,238,0.6), 0 0 60px rgba(34,211,238,0.3), inset 0 0 20px rgba(34,211,238,0.2)"
        },
        pink: {
            default: "0 0 20px rgba(244,114,182,0.3), inset 0 0 20px rgba(244,114,182,0.1)",
            active: "0 0 30px rgba(244,114,182,0.6), 0 0 60px rgba(244,114,182,0.3), inset 0 0 20px rgba(244,114,182,0.2)"
        },
        purple: {
            default: "0 0 20px rgba(192,132,252,0.3), inset 0 0 20px rgba(192,132,252,0.1)",
            active: "0 0 30px rgba(192,132,252,0.6), 0 0 60px rgba(192,132,252,0.3), inset 0 0 20px rgba(192,132,252,0.2)"
        }
    };

    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.02, boxShadow: glowValues[color].active }}
            whileTap={{ scale: 0.98, boxShadow: glowValues[color].active }}
            initial={{ boxShadow: glowValues[color].default }}
            className={cn(
                "relative px-8 py-3 rounded-lg border-2 font-semibold uppercase tracking-widest text-sm transition-all duration-500 backdrop-blur-sm",
                theme.bg,
                theme.border,
                theme.text,
                className
            )}
        >
            <span className="relative z-10">{children || text || "Neon Glow"}</span>
        </motion.button>
    );
}
