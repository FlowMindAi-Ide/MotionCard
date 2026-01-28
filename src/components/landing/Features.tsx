"use client";

import { motion } from "framer-motion";
import { Zap, Layout, Monitor, Shield, Layers, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: Code,
        title: "Copy & Paste",
        description: "No complex installs. Just copy the code and drop it into your project.",
        className: "md:col-span-2",
    },
    {
        icon: Zap,
        title: "60 FPS Motion",
        description: "Butter smooth Framer Motion animations.",
        className: "md:col-span-1",
    },
    {
        icon: Layout,
        title: "Responsive",
        description: "Flawless on all devices.",
        className: "md:col-span-1",
    },
    {
        icon: Shield,
        title: "Secure & Typed",
        description: "Fully typed with TypeScript for maximum safety.",
        className: "md:col-span-2",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center p-2 mb-6 bg-white dark:bg-zinc-900 rounded-full shadow-sm border border-zinc-200 dark:border-zinc-800"
                    >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 mr-2 shadow-sm">
                            <div className="h-2 w-2 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
                        </div>
                        <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Why MotionCard</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 drop-shadow-sm">
                        Everything needed to build <br />
                        <span className="text-zinc-400 dark:text-zinc-600">world-class interfaces.</span>
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 transition-all duration-300",
                                "shadow-xl hover:shadow-2xl hover:-translate-y-1",
                                feature.className
                            )}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                                <feature.icon className="w-32 h-32" />
                            </div>

                            <div className="relative z-10 flex flex-col h-full justify-end">
                                <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 w-fit rounded-xl mb-6 shadow-md border border-zinc-100 dark:border-zinc-700/50">
                                    <feature.icon className="w-6 h-6 text-zinc-900 dark:text-zinc-100 drop-shadow-md" />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2 drop-shadow-sm">
                                    {feature.title}
                                </h3>
                                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
