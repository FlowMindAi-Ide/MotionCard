"use client";

import { Control, ControlValue } from "@/config/component-controls";
import { ControlInput } from "./control-input";
import { Button } from "./ui/button";
import { RotateCcw } from "lucide-react";

interface ComponentControlsProps {
    controls: Control[];
    values: Record<string, ControlValue>;
    onChange: (prop: string, value: ControlValue) => void;
    onReset: () => void;
}

export function ComponentControls({
    controls,
    values,
    onChange,
    onReset,
}: ComponentControlsProps) {
    if (controls.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-muted/30">
                <h3 className="font-semibold text-sm">Customize</h3>
                <Button
                    onClick={onReset}
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs gap-1"
                >
                    <RotateCcw className="h-3 w-3" />
                    Reset
                </Button>
            </div>

            {/* Controls Grid */}
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {controls.map((control) => (
                        <ControlInput
                            key={control.prop}
                            control={control}
                            value={values[control.prop]}
                            onChange={(value) => onChange(control.prop, value)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
