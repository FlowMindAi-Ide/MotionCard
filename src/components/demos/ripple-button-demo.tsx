"use client";
import { RippleButton } from "@/components/ui/ripple-button";

export function RippleButtonDemo(props: any) {
    return (
        <div className="flex justify-center items-center p-16">
            <RippleButton {...props}>
                {props.text || props.children || "Click Me"}
            </RippleButton>
        </div>
    );
}
