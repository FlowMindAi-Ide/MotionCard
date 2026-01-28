"use client";

import { LoginForm } from "@/components/ui/login-form";

export function LoginFormDemo() {
    return (
        <div className="flex items-center justify-center p-6 w-full">
            <div className="bg-white dark:bg-zinc-950 p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 w-full max-w-sm shadow-sm">
                <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Welcome Back</h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                        Enter your credentials to access your account
                    </p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}
