"use client";
import { GlowButton } from "@/components/ui/glow-button";

export function GlowButtonDemo() {
    return (
        <div className="flex justify-center items-center p-16">
            <GlowButton>
                Hover for Glow
            </GlowButton>
        </div>
    );
}
