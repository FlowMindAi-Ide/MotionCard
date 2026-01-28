import Link from "next/link";
import { type Component } from "@/config/components";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";

interface ComponentCardProps {
    component: Component;
}

export function ComponentCard({ component }: ComponentCardProps) {
    return (
        <Link href={`/components/${component.slug}`}>
            <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors group relative">
                <div className="aspect-video bg-secondary/30 flex items-center justify-center p-6 border-b overflow-hidden relative">
                    <div className="w-full h-full flex items-center justify-center">
                        <ComponentPreview slug={component.slug} />
                    </div>


                </div>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="overflow-hidden text-ellipsis whitespace-nowrap">
                            {component.title}
                        </CardTitle>
                    </div>
                    <CardDescription className="line-clamp-2">
                        {component.description}
                    </CardDescription>
                </CardHeader>
            </Card>
        </Link>
    );
}
