import Link from "next/link";
import { Github, Twitter, Layers } from "lucide-react";

const footerLinks = {
    product: [
        { name: "Features", href: "/#features" },
        { name: "Components", href: "/components" },
        { name: "Changelog", href: "/changelog" },
    ],
    resources: [
        { name: "Documentation", href: "/docs" },
        { name: "Community", href: "/community" },
        { name: "Showcase", href: "/showcase" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
    ],
};

export function Footer() {
    return (
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="inline-flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-sm">
                                <div className="h-3.5 w-3.5 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
                            </div>
                            <span className="text-xl font-bold font-display text-zinc-900 dark:text-zinc-50 tracking-tight">
                                MotionCard
                            </span>
                        </Link>
                        <p className="text-zinc-500 dark:text-zinc-400 max-w-xs text-sm leading-relaxed">
                            An open-source component library for developers who value aesthetics and user experience. Built with Framer Motion.
                        </p>
                        <div className="flex items-center space-x-4">
                            <Link href="https://twitter.com" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="https://github.com" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 tracking-wide uppercase mb-6">Product</h4>
                        <ul className="space-y-4">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 tracking-wide uppercase mb-6">Resources</h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 tracking-wide uppercase mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-zinc-400 text-center md:text-left">
                        &copy; {new Date().getFullYear()} MotionCard. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
