"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Home, Settings, User, FileText, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarNavProps {
    className?: string;
}

const navItems = [
    { icon: Home, label: "Dashboard", href: "#" },
    { icon: User, label: "Profile", href: "#" },
    { icon: FileText, label: "Documents", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
    { icon: HelpCircle, label: "Help", href: "#" },
];

export function SidebarNav({ className }: SidebarNavProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <motion.nav
            initial={false}
            animate={{ width: isExpanded ? 240 : 80 }}
            className={cn(
                "relative h-full bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col gap-2 transition-all duration-300",
                className
            )}
        >
            {/* Toggle button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="absolute -right-3 top-6 bg-zinc-900 border border-zinc-800 rounded-full p-1 hover:bg-zinc-800 transition-colors"
            >
                <motion.div
                    animate={{ rotate: isExpanded ? 0 : 180 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronLeft className="h-4 w-4 text-zinc-400" />
                </motion.div>
            </button>

            {/* Nav items */}
            <div className="flex flex-col gap-1 mt-8">
                {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = index === activeIndex;

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                                isActive
                                    ? "bg-indigo-600 text-white"
                                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                            )}
                        >
                            <Icon className="h-5 w-5 shrink-0" />
                            <AnimatePresence mode="wait">
                                {isExpanded && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="font-medium whitespace-nowrap overflow-hidden"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}
