"use client";
import { NeonButton } from "@/components/ui/neon-button";

export function NeonButtonDemo() {
    return (
        <div className="flex flex-col gap-6 justify-center items-center p-16 bg-black rounded-2xl">
            <NeonButton color="cyan">
                Neon Cyan
            </NeonButton>
            <NeonButton color="pink">
                Neon Pink
            </NeonButton>
            <NeonButton color="purple">
                Neon Purple
            </NeonButton>
        </div>
    );
}
