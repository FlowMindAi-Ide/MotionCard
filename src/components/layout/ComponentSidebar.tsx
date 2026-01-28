"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { components } from "@/config/components";
import { Badge } from "@/components/ui/badge";

export function ComponentSidebar() {
    const pathname = usePathname();

    // Group components by category
    const groupedComponents = {
        "Text": components.filter(c => c.title.includes("Text") || c.title.includes("Type") || c.slug.includes("text")),
        "Cards": components.filter(c => c.title.includes("Card") || c.slug.includes("card") || c.slug.includes("border")),
        "Buttons": components.filter(c => c.title.includes("Button")),
        "Navigation": components.filter(c => c.title.includes("Tabs") || c.title.includes("Dock") || c.title.includes("Nav")),
        "Forms": components.filter(c => c.title.includes("Form") || c.title.includes("Input") || c.slug.includes("form")),
        "Sections": components.filter(c => c.title.includes("Section") || c.title.includes("Grid") || c.title.includes("Layout") || c.slug.includes("lamp") || c.slug.includes("bento")),
    };

    // Helper to check if a component is already categorized to avoid duplicates (simplified logic for now)
    // Actually, let's just explicit map or ensure we don't duplicate.
    // For this quick implementation, I'll iterate categories.

    const categories = [
        { name: "Text Animations", items: groupedComponents.Text },
        { name: "Cards & Containers", items: groupedComponents.Cards },
        { name: "Buttons", items: groupedComponents.Buttons },
        { name: "Navigation", items: groupedComponents.Navigation },
        { name: "Forms", items: groupedComponents.Forms },
        { name: "Sections & Layout", items: groupedComponents.Sections },
    ];

    return (
        <aside className="fixed top-20 left-0 z-30 hidden w-full shrink-0 md:sticky md:block md:w-64 lg:w-72 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 h-[calc(100vh-80px)] top-20 self-start">
            <div className="h-full overflow-y-auto py-6 px-4 pb-20">
                {
                    categories.map((category) => (
                        <div key={category.name} className="mb-8">
                            <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                {category.name}
                            </h2>
                            <div className="space-y-1">
                                {category.items.map((component) => (
                                    <Link
                                        key={component.id}
                                        href={`/components/${component.slug}`}
                                        className={cn(
                                            "group flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900",
                                            pathname === `/components/${component.slug}`
                                                ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50"
                                                : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                                        )}
                                    >
                                        <span>{component.title}</span>

                                    </Link>
                                ))}
                                {category.items.length === 0 && (
                                    <div className="px-3 py-2 text-sm text-muted-foreground italic">No items</div>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>
        </aside>
    );
}
