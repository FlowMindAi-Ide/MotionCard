"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function TermsPage() {
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
                        <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
                        <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 space-y-6">
                            <p className="text-sm">Last updated: January 29, 2026</p>

                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using MotionCard, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website or the components.
                            </p>

                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">2. MIT License</h2>
                            <p>
                                MotionCard is open-source software licensed under the <strong>MIT License</strong>. This means you are free to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Use the components in personal and commercial projects</li>
                                <li>Modify the source code to suit your needs</li>
                                <li>Distribute copies of the software</li>
                                <li>Sublicense and sell copies of the software</li>
                            </ul>
                            <p>
                                The only requirement is that you include the original copyright notice and license in any substantial portions of the software.
                            </p>

                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">3. No Warranty</h2>
                            <p>
                                This software is provided <strong>"as is"</strong>, without warranty of any kind, express or implied. We are not liable for any damages arising from the use of this software.
                            </p>

                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">4. Attribution</h2>
                            <p>
                                While not required, we appreciate attribution when you use MotionCard components in your projects. A link back to our repository is always welcome!
                            </p>

                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">5. Contributions</h2>
                            <p>
                                By contributing to MotionCard (via pull requests, issues, or discussions), you agree that your contributions will be licensed under the same MIT License.
                            </p>

                            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8 mb-4">6. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
