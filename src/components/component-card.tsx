import Link from "next/link";
import { type Component } from "@/config/components";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";

import { componentControls, ControlValue } from "@/config/component-controls";

interface ComponentCardProps {
    component: Component;
}

export function ComponentCard({ component }: ComponentCardProps) {
    // Get default values for this component
    const controls = componentControls[component.slug] || [];
    const defaultValues: Record<string, ControlValue> = {};
    controls.forEach(control => {
        defaultValues[control.prop] = control.defaultValue;
    });

    return (
        <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors group relative">
            <Link href={`/components/${component.slug}`} className="absolute inset-0 z-0">
                <span className="sr-only">View {component.title}</span>
            </Link>
            <div className="aspect-video bg-secondary/30 flex items-center justify-center p-6 border-b overflow-hidden relative z-20 pointer-events-none">
                <div
                    className="flex items-center justify-center pointer-events-auto"
                    style={{
                        width: component.previewScale ? `${100 / component.previewScale}%` : '100%',
                        height: component.previewScale ? `${100 / component.previewScale}%` : '100%',
                        transform: component.previewScale ? `scale(${component.previewScale})` : undefined,
                        transformOrigin: 'center center'
                    }}
                >
                    <ComponentPreview slug={component.slug} controlValues={defaultValues} />
                </div>
            </div>
            <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                    <CardTitle className="overflow-hidden text-ellipsis whitespace-nowrap leading-relaxed py-1">
                        {component.title}
                    </CardTitle>
                </div>
                <CardDescription className="line-clamp-2">
                    {component.description}
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
