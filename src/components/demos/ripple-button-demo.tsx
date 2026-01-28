"use client";
import { RippleButton } from "@/components/ui/ripple-button";

export function RippleButtonDemo() {
    return (
        <div className="flex justify-center items-center p-16">
            <RippleButton>
                Click Me
            </RippleButton>
        </div>
    );
}
