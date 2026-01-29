"use client";

import { motion } from "framer-motion";

export function MotionCard() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ y: -5 }}
            className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow max-w-xs"
        >
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 mb-4">
                M
            </div>
            <h3 className="font-semibold text-lg mb-2">Hover me</h3>
            <p className="text-muted-foreground text-sm">
                I lift up smoothly when you hover! Built with Framer Motion.
            </p>
        </motion.div>
    );
}
