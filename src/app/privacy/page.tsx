"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
            <Navbar />
            <main className="flex-1 pt-32 pb-20 px-4">
                <div className="container max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
                        <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 space-y-6">
                            <p className="text-sm">Last updated: January 29, 2026</p>

                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">Overview</h2>
                            <p>
                                MotionCard is an open-source component library. This website is a static documentation site that does not collect, store, or process any personal information from visitors.
                            </p>

                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">Information We Collect</h2>
                            <p>
                                <strong>We do not collect any personal information.</strong> This website:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Does not use cookies</li>
                                <li>Does not use analytics or tracking scripts</li>
                                <li>Does not require user accounts or authentication</li>
                                <li>Does not collect any form data</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">Third-Party Services</h2>
                            <p>
                                This website may link to external services such as GitHub. When you visit those external sites, their respective privacy policies apply.
                            </p>

                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">Open Source</h2>
                            <p>
                                MotionCard is fully open source and available on GitHub. You can review the complete source code to verify our privacy practices.
                            </p>

                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">Contact</h2>
                            <p>
                                If you have questions about this privacy policy, please open an issue on our{" "}
                                <a href="https://github.com/FlowMindAi-Ide/MotionCard" className="text-zinc-900 dark:text-zinc-50 underline hover:no-underline">
                                    GitHub repository
                                </a>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
