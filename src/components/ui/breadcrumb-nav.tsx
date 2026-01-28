"use client";

import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href: string; // Keep href for reference, but won't navigate in demo
}

interface BreadcrumbNavProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function BreadcrumbNav({ items, className }: BreadcrumbNavProps) {
    // TODO: Replace these button handlers with actual navigation in your app
    // For example: const router = useRouter(); then onClick={() => router.push(item.href)}
    const handleClick = (href: string) => {
        console.log(`Navigate to: ${href}`);
        // Add your navigation logic here
    };

    return (
        <nav className={cn("flex items-center gap-2 text-sm", className)}>
            {/* Home button - customize the onClick handler for your app */}
            <button
                onClick={() => handleClick("/")}
                className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
                <Home className="h-4 w-4" />
            </button>

            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                >
                    <ChevronRight className="h-4 w-4 text-zinc-400" />
                    {index === items.length - 1 ? (
                        // Last item - not clickable
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">
                            {item.label}
                        </span>
                    ) : (
                        // Clickable breadcrumb items - customize onClick for your app
                        <button
                            onClick={() => handleClick(item.href)}
                            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            {item.label}
                        </button>
                    )}
                </motion.div>
            ))}
        </nav>
    );
}
