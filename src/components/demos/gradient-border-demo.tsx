"use client";
import { GradientBorder } from "@/components/ui/gradient-border";

export function GradientBorderDemo(props: any) {
    return (
        <div className="flex justify-center p-4 sm:p-10">
            <GradientBorder className="bg-zinc-950" {...props}>
                <div className="max-w-xs text-center p-8">
                    <h3 className="text-xl font-bold text-white mb-4">Legendary</h3>
                    <p className="text-zinc-400 mb-4 text-sm">
                        Unlock premium features with our animated borders.
                    </p>
                    <button className="w-1/2 rounded-full bg-white py-2 text-xs font-semibold text-black hover:bg-zinc-200 transition-colors">
                        Get Started
                    </button>
                </div>
            </GradientBorder>
        </div>
    );
}
