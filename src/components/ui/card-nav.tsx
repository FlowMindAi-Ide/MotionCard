"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
    name: string;
    link: string;
    icon?: React.ReactNode;
}

interface CardNavProps {
    items: NavItem[];
    className?: string;
    actionButton?: React.ReactNode;
}

export function CardNav({ items, className, actionButton }: CardNavProps) {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <div
                className={cn(
                    "fixed top-0 inset-x-0 z-50 flex justify-center py-4 transition-all duration-300 pointer-events-none",
                    scrolled ? "py-4" : "py-6"
                )}
            >
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    className={cn(
                        "pointer-events-auto flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md px-3 py-2 shadow-sm transition-all hover:shadow-md",
                        className
                    )}
                >
                    {/* Logo / Home */}
                    <Link
                        href="/"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                    >
                        <div className="h-4 w-4 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
                    </Link>

                    <div className="mx-2 h-6 w-px bg-zinc-200 dark:bg-zinc-800" />

                    {/* Desktop Nav Items */}
                    <nav className="hidden sm:flex items-center gap-1">
                        {items.map((item) => {
                            const isActive = pathname === item.link || pathname.startsWith(item.link + "/");
                            return (
                                <Link
                                    key={item.name}
                                    href={item.link}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 rounded-full",
                                        isActive
                                            ? "text-zinc-900 dark:text-zinc-100"
                                            : "text-zinc-500 dark:text-zinc-400"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 z-[-1] rounded-full bg-zinc-100 dark:bg-zinc-800"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="sm:hidden flex h-10 w-10 items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>

                    {actionButton && (
                        <>
                            <div className="mx-2 h-6 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />
                            <div className="hidden sm:block">
                                {actionButton}
                            </div>
                        </>
                    )}
                </motion.div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="fixed top-20 left-4 right-4 z-[60] sm:hidden"
                    >
                        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xl overflow-hidden">
                            <nav className="flex flex-col p-2">
                                {items.map((item) => {
                                    const isActive = pathname === item.link || pathname.startsWith(item.link + "/");
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.link}
                                            className={cn(
                                                "px-4 py-3 text-sm font-medium rounded-xl transition-colors",
                                                isActive
                                                    ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                                                    : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop for mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[55] bg-black/20 backdrop-blur-sm sm:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
