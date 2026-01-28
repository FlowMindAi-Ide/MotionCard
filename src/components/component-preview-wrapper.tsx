"use client";

import { useState, useMemo } from "react";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentControls } from "@/components/component-controls";
import { componentControls, ControlValue } from "@/config/component-controls";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import { Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ComponentPreviewWrapperProps {
    slug: string;
    files: { name: string; code: string }[];
    title: string;
}

export function ComponentPreviewWrapper({ slug, files, title }: ComponentPreviewWrapperProps) {
    const controls = componentControls[slug] || [];

    // Initialize default values from controls
    const defaultValues = useMemo(() => {
        const values: Record<string, ControlValue> = {};
        controls.forEach((control) => {
            values[control.prop] = control.defaultValue;
        });
        return values;
    }, [controls]);

    const [controlValues, setControlValues] = useState(defaultValues);

    const handleControlChange = (prop: string, value: ControlValue) => {
        setControlValues((prev) => ({ ...prev, [prop]: value }));
    };

    const handleReset = () => {
        setControlValues(defaultValues);
    };

    // Transform usage code based on control values
    const getTransformedCode = (code: string) => {
        let transformedCode = code;

        Object.entries(controlValues).forEach(([prop, value]) => {
            // Match pattern like prop="value" or prop={value}
            const regex = new RegExp(`${prop}=["'][^"']*["']|${prop}=\\{[^}]*\\}`, 'g');

            let replacement = "";
            if (typeof value === 'string') {
                replacement = `${prop}="${value}"`;
            } else if (typeof value === 'number') {
                replacement = `${prop}={${value}}`;
            } else if (typeof value === 'boolean') {
                // For booleans, if true just include prop, if false omit? 
                // Let's keep it explicit for now: prop={true}
                replacement = `${prop}={${value}}`;
            }

            if (transformedCode.match(regex)) {
                transformedCode = transformedCode.replace(regex, replacement);
            } else {
                // If the prop isn't in the code, we might want to inject it? 
                // For now, let's only replace existing props to avoid messing up the code structure.
            }
        });

        return transformedCode;
    };

    return (
        <div className="space-y-8">
            {/* Preview Section */}
            <div className="space-y-4">
                <div className="border rounded-xl bg-background overflow-hidden shadow-sm">
                    <div className="border-b px-4 py-3 bg-muted/30">
                        <span className="text-sm font-medium text-muted-foreground">Preview</span>
                    </div>
                    <div className="flex items-center justify-center min-h-[400px] p-10 bg-secondary/10 relative">
                        <div className="w-full flex items-center justify-center">
                            <ComponentPreview slug={slug} className="scale-100" controlValues={controlValues} />
                        </div>
                    </div>
                </div>

                {/* Controls Section */}
                {controls.length > 0 && (
                    <div className="border rounded-xl bg-card shadow-sm overflow-hidden">
                        <ComponentControls
                            controls={controls}
                            values={controlValues}
                            onChange={handleControlChange}
                            onReset={handleReset}
                        />
                    </div>
                )}
            </div>

            {/* Code Section */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Installation & Usage</h2>

                <Tabs defaultValue={files[0]?.name} className="w-full">
                    <div className="flex items-center justify-between mb-4">
                        <TabsList>
                            {files.map((file) => (
                                <TabsTrigger key={file.name} value={file.name}>
                                    {file.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {files.map((file) => (
                        <TabsContent key={file.name} value={file.name} className="relative mt-0">
                            <CodeBlock
                                code={file.name === "Usage" ? getTransformedCode(file.code) : file.code}
                            />
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div >
    );
}
