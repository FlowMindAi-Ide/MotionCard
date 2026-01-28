"use client";

import { useState, useMemo } from "react";
import { demos } from "@/components/demos";
import { cn } from "@/lib/utils";
import { componentControls, ControlValue } from "@/config/component-controls";

interface ComponentPreviewProps {
    slug: string;
    className?: string;
    controlValues?: Record<string, ControlValue>;
}

export function ComponentPreview({ slug, className, controlValues = {} }: ComponentPreviewProps) {
    const Component = demos[slug];

    if (!Component) {
        return (
            <div className="text-muted-foreground flex flex-col items-center justify-center h-full">
                <p>Preview not available</p>
            </div>
        );
    }

    // Pass control values as props to the component
    return (
        <div className={cn("flex items-center justify-center w-full h-full", className)}>
            <Component {...controlValues} />
        </div>
    );
}
