"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Github, Star } from "lucide-react";
import { HeroGravityText } from "@/components/ui/hero-gravity-text";

export function Hero() {
    const [stars, setStars] = useState<number | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/repos/FlowMindAi-Ide/MotionCard")
            .then((res) => res.json())
            .then((data) => setStars(data.stargazers_count))
            .catch((e) => console.error("Error fetching stars:", e));
    }, []);

    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-[90vh] flex items-center justify-center">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">

                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium mb-8 border border-zinc-200 dark:border-zinc-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="flex h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 mr-2"></span>
                        Open Source Components v1.0
                    </motion.div>

                    {/* Interactive Headline */}
                    <div className="mb-8 w-full">
                        <div className="hidden sm:block">
                            <HeroGravityText text="Build Premium Experiences" className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50" />
                        </div>
                        <div className="sm:hidden">
                            <h1 className="text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">
                                Build Premium Experiences
                            </h1>
                        </div>
                    </div>

                    <motion.p
                        className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        A curated collection of high-quality, motion-driven React components.
                        Crafted for developers who value aesthetics and performance.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Link href="/components" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto h-12 px-8 rounded-full text-base">
                                Browse Components <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="https://github.com/FlowMindAi-Ide/MotionCard" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 rounded-full text-base border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 group">
                                <Github className="mr-2 h-4 w-4" />
                                <span>Star on GitHub</span>
                                <div className="ml-2 flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-700">
                                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 group-hover:scale-110 transition-transform" />
                                    <span className="text-xs font-medium">
                                        {stars ? new Intl.NumberFormat('en-US', { notation: "compact", compactDisplay: "short" }).format(stars) : "..."}
                                    </span>
                                </div>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </section>
    );
}
