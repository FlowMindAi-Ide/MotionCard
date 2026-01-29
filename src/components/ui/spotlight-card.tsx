"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export function SpotlightCard({
    spotlightColor = "#b928e2",
    spotlightRadius = 360,
}: { spotlightColor?: string; spotlightRadius?: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(e: MouseEvent | React.TouchEvent) {
        let clientX, clientY;

        if ('touches' in e) {
            const touch = e.touches[0];
            clientX = touch.clientX;
            clientY = touch.clientY;
        } else {
            clientX = (e as MouseEvent).clientX;
            clientY = (e as MouseEvent).clientY;
        }

        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative max-w-md rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-16 shadow-2xl"
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              ${spotlightRadius}px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative">
                <h3 className="text-xl font-bold text-zinc-100 mb-2">
                    Spotlight Effect
                </h3>
                <p className="text-zinc-400">
                    A subtle gradient that follows your mouse cursor, creating a beautiful spotlight effect that reveals borders and textures.
                </p>
            </div>
        </div>
    );
}
