"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

interface PerspectiveCardProps {
    children: React.ReactNode;
    className?: string;
}

export function PerspectiveCard({
    children = (
        <div className="h-40 w-full flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">3D Hover</h3>
        </div>
    ),
    className
}: PerspectiveCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useMotionTemplate`calc(${mouseYSpring} * -0.5deg)`;
    const rotateY = useMotionTemplate`calc(${mouseXSpring} * 0.5deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        let clientX, clientY;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct * 20); // Sensitivity
        y.set(yPct * 20);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className={`relative group rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 p-6 ${className}`}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
            >
                {children}
            </div>

            {/* Gloss/Reflection Effect */}
            <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: useMotionTemplate`
                        linear-gradient(
                            115deg, 
                            transparent 0%, 
                            rgba(255, 255, 255, 0.1) 30%, 
                            transparent 60%
                        )
                   `,
                    transform: "translateZ(1px)" // Sit slightly above
                }}
            />
        </motion.div>
    );
}
