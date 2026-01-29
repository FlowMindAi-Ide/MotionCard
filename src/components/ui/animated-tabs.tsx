"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
    { id: "world", label: "World" },
    { id: "ny", label: "N.Y." },
    { id: "business", label: "Business" },
    { id: "arts", label: "Arts" },
    { id: "science", label: "Science" },
];

export function AnimatedTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="flex space-x-1 rounded-full border bg-background/50 p-1 backdrop-blur-sm overflow-x-auto max-w-full">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                        "relative px-4 py-2 text-sm font-medium transition focus-visible:outline-2",
                        activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground hover:text-primary"
                    )}
                    style={{
                        WebkitTapHighlightColor: "transparent",
                    }}
                >
                    {activeTab === tab.id && (
                        <motion.span
                            layoutId="bubble"
                            className="absolute inset-0 z-10 bg-primary shadow-sm"
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-20 mix-blend-exclusion dark:mix-blend-normal">{tab.label}</span>
                </button>
            ))}
        </div>
    );
}
