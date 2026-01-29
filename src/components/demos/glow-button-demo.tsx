"use client";
import { GlowButton } from "@/components/ui/glow-button";

export function GlowButtonDemo(props: any) {
    return (
        <div className="flex justify-center items-center p-8 sm:p-16">
            <GlowButton {...props}>
                {props.text || props.children || "Hover for Glow"}
            </GlowButton>
        </div>
    );
}
