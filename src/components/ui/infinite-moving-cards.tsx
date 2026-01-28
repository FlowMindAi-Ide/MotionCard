"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
    gap = "normal",
    textColor = "#ffffff",
    backgroundColor = "#09090b",
    subTextColor = "#a1a1aa",
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
    gap?: "small" | "normal" | "large";
    textColor?: string;
    backgroundColor?: string;
    subTextColor?: string;
}) => {
    // ... refs and effects ...
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "normal"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    // Reacting to props changes to update CSS variables immediately
    useEffect(() => {
        getDirection();
        getSpeed();
    }, [direction, speed]);

    const gapClass = {
        small: "gap-2",
        normal: "gap-4",
        large: "gap-8",
    }[gap];

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 py-4 w-max flex-nowrap",
                    gapClass,
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.concat(items).map((item, idx) => (
                    <li
                        className={cn(
                            "w-[350px] max-w-full relative rounded-2xl border flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                        )}
                        style={{
                            backgroundColor: backgroundColor
                        }}
                        key={item.name + idx}
                    >
                        <blockquote>
                            <span
                                className="relative z-20 text-sm leading-[1.6] font-normal"
                                style={{ color: textColor }}
                            >
                                {item.quote}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span style={{ color: subTextColor }} className="text-sm leading-[1.6] font-normal">
                                        {item.name}
                                    </span>
                                    <span style={{ color: subTextColor }} className="text-sm leading-[1.6] font-normal">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
