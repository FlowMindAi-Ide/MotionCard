"use client";
import { NeonButton } from "@/components/ui/neon-button";

export function NeonButtonDemo(props: any) {
    return (
        <div className="flex justify-center items-center p-16 bg-black rounded-2xl">
            <NeonButton {...props}>
                {props.text || props.children || "Neon Glow"}
            </NeonButton>
        </div>
    );
}
