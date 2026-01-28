"use client";

import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface FloatingDockProps {
    items: { icon: React.ReactNode; label: string; onClick?: () => void }[];
    className?: string;
}

import { Home, Settings, Terminal, User } from "lucide-react";

export function FloatingDock({
    items = [
        { icon: <Home className="h-6 w-6" />, label: "Home" },
        { icon: <Terminal className="h-6 w-6" />, label: "Terminal" },
        { icon: <Settings className="h-6 w-6" />, label: "Settings" },
        { icon: <User className="h-6 w-6" />, label: "User" },
    ],
    className
}: FloatingDockProps) {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-zinc-900 px-4 pb-3",
                className
            )}
        >
            {items.map((item, i) => (
                <IconContainer mouseX={mouseX} key={i}>
                    <div
                        className="flex h-full w-full items-center justify-center rounded-full bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer"
                        onClick={item.onClick}
                    >
                        {item.icon}
                    </div>
                </IconContainer>
            ))}
        </motion.div>
    );
}

function IconContainer({ mouseX, children }: { mouseX: MotionValue; children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
    const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width, height }}
            className="aspect-square rounded-full"
        >
            {children}
        </motion.div>
    );
}
