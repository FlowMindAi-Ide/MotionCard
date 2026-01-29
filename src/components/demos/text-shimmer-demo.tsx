"use client";
import { TextShimmer } from "@/components/ui/text-shimmer";

interface TextShimmerDemoProps {
    children?: string;
    className?: string;
    duration?: number;
}

export function TextShimmerDemo({ children, className, duration }: TextShimmerDemoProps) {
    return (
        <div className="flex justify-center items-center p-4 sm:p-16">
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-12 shadow-2xl bg-white dark:bg-zinc-950 max-w-2xl">
                <TextShimmer className={className} duration={duration}>
                    {children || "Loading premium experience..."}
                </TextShimmer>
            </div>
        </div>
    );
}
