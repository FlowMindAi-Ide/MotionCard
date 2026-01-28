"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Github, Chrome } from "lucide-react";
import { cn } from "@/lib/utils";

interface SignupFormProps {
    className?: string;
}

export function SignupForm({ className }: SignupFormProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Signup submitted");
    };

    return (
        <div className={cn("grid gap-6", className)}>
            <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full gap-2">
                    <Github className="h-4 w-4" />
                    Github
                </Button>
                <Button variant="outline" className="w-full gap-2">
                    <Chrome className="h-4 w-4" />
                    Google
                </Button>
            </div>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
                        Or continue with
                    </span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                        id="name"
                        placeholder="John Doe"
                        required
                        className="bg-transparent"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        className="bg-transparent"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        required
                        className="bg-transparent"
                    />
                </div>
                <Button type="submit" className="w-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
                    Create Account
                </Button>
            </form>
        </div>
    );
}
