"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { GlitchText } from "@/components/ui/glitch-text";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-zinc-950 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl">
                {/* 404 Hero Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex items-center justify-center mb-12 h-32 sm:h-48 w-full"
                >
                    {/* Background blurred number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[120px] sm:text-[180px] font-bold font-mono tracking-tighter text-zinc-900 dark:text-zinc-50 opacity-[0.03] select-none">
                            404
                        </span>
                    </div>

                    {/* Active Glitch Number */}
                    <GlitchText
                        text="404"
                        className="text-7xl sm:text-9xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Lost in Motion
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto text-lg leading-relaxed">
                        The page you are looking for has vanished into thin air. Let&apos;s get you back on track.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 mt-12"
                >
                    <Link href="/">
                        <Button variant="default" size="lg" className="rounded-full h-12 px-8 text-base shadow-lg shadow-zinc-200 dark:shadow-none">
                            <Home className="mr-2 h-4 w-4" />
                            Return Home
                        </Button>
                    </Link>
                    <Link href="/components">
                        <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base border-zinc-200 dark:border-zinc-800">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Explore Components
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        </div>
    );
}
