import Link from "next/link";
import { Github, Twitter, Layers } from "lucide-react";

const footerLinks = {
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
    ],
};

export function Footer() {
    return (
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6 md:max-w-sm">
                        <Link href="/" className="inline-flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-sm">
                                <div className="h-3.5 w-3.5 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
                            </div>
                            <span className="text-xl font-bold font-display text-zinc-900 dark:text-zinc-50 tracking-tight">
                                MotionCard
                            </span>
                        </Link>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                            An open-source component library for developers who value aesthetics and user experience. Built with Framer Motion.
                        </p>
                        <div className="flex items-center space-x-4">
                            {/* <Link href="https://twitter.com" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link> */}
                            <Link href="https://github.com/FlowMindAi-Ide/MotionCard" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="https://discord.gg/eC7BF9VEJn" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994c.033-.065.001-.144-.069-.17a12.912 12.912 0 0 1-1.873-.892a.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.29a.078.078 0 0 1 .082-.011c3.927 1.793 8.18 1.793 12.061 0a.078.078 0 0 1 .084.009c.12.098.245.196.372.29a.077.077 0 0 1-.006.127c-.594.352-1.214.652-1.873.893c-.072.026-.101.106-.07.17c.357.7.77 1.364 1.232 1.994a.075.075 0 0 0 .085.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.966 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Legal Column */}
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
