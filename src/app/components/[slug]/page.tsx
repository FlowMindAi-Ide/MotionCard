import { components } from "@/config/components";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { Lock, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

import { ComponentPreviewWrapper } from "@/components/component-preview-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ComponentPage({ params }: PageProps) {
    const { slug } = await params;
    const component = components.find((c) => c.slug === slug);

    if (!component) {
        notFound();
    }

    return (
        <div className="space-y-8 pt-24">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-10 items-start">
                {/* Main Content */}
                <div className="space-y-8 min-w-0">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-4xl font-bold tracking-tight">{component.title}</h1>
                        </div>
                        <p className="text-lg text-muted-foreground">{component.description}</p>
                    </div>

                    {/* Live Preview with Controls & Code Clips */}
                    <ComponentPreviewWrapper
                        slug={component.slug}
                        files={component.files}
                        title={component.title}
                    />
                </div>

                {/* Right Sidebar (Details) */}
                <div className="space-y-6 xl:sticky xl:top-24 hidden xl:block">
                    <div className="border rounded-xl p-6 bg-card shadow-sm">
                        <h3 className="font-semibold mb-4">Component Details</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between py-2 border-b">
                                <span className="text-muted-foreground">Framework</span>
                                <span className="font-medium">React / Next.js</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <span className="text-muted-foreground">Styling</span>
                                <span className="font-medium">Tailwind CSS</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <span className="text-muted-foreground">Animation</span>
                                <span className="font-medium">Framer Motion</span>
                            </div>
                            <div className="py-2 border-b">
                                <span className="text-muted-foreground block mb-2">Dependencies</span>
                                {component.dependencies && component.dependencies.length > 0 ? (
                                    <ul className="space-y-1">
                                        {component.dependencies.map((dep) => (
                                            <li key={dep} className="text-xs font-mono bg-muted px-2 py-1 rounded">
                                                {dep}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <span className="text-xs text-muted-foreground">No external packages required</span>
                                )}
                            </div>
                            <div className="py-2">
                                <span className="text-muted-foreground block mb-2">Features</span>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>Copy & Paste ready</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>Fully customizable</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>TypeScript support</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
