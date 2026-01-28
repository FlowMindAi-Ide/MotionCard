"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface TextShimmerProps {
    children: string;
    className?: string;
}

export function TextShimmer({
    children = "Premium Shimmer Effect",
    className,
    duration = 3,
}: TextShimmerProps & { duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        // Add keyframes dynamically
        const styleId = 'shimmer-keyframes';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
                @keyframes shimmer-slide {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
            `;
            document.head.appendChild(style);
        }
    }, []);

    return (
        <span
            ref={ref}
            className={cn(
                "inline-block bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-400 dark:from-zinc-600 dark:via-zinc-100 dark:to-zinc-600 bg-clip-text text-transparent p-2",
                className
            )}
            style={{
                backgroundSize: '200% auto',
                animation: `shimmer-slide ${duration}s linear infinite`,
            }}
        >
            {children}
        </span>
    );
}
