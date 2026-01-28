"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function MorphingCard() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <motion.div
                layout
                onClick={() => setIsOpen(!isOpen)}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl cursor-pointer overflow-hidden relative shadow-xl"
                style={{
                    width: isOpen ? 400 : 80,
                    height: isOpen ? 300 : 80,
                    borderRadius: 24,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <motion.div
                    layout="position"
                    className="absolute top-4 left-4"
                >
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-red-500 text-white' : 'bg-white text-black'}`}>
                        <Plus className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} />
                    </div>
                </motion.div>

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.2 }}
                        className="p-8 pt-24"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">Extended Card</h3>
                        <p className="text-zinc-400">
                            This card seamlessly morphed from a small button into a full content area using Framer Motion&apos;s layout animations.
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
