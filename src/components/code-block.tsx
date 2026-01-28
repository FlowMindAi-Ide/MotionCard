"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
    code: string;
    language?: string;
    className?: string;
}

export function CodeBlock({ code, language = "tsx", className }: CodeBlockProps) {
    const [hasCopied, setHasCopied] = useState(false);

    const onCopy = () => {
        navigator.clipboard.writeText(code);
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    };

    return (
        <div className={cn("relative rounded-lg bg-zinc-950 dark:bg-zinc-900 border overflow-hidden", className)}>
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
                <span className="text-xs text-zinc-400 font-medium lowercase">{language}</span>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
                    onClick={onCopy}
                >
                    {hasCopied ? (
                        <Check className="h-3 w-3" />
                    ) : (
                        <Copy className="h-3 w-3" />
                    )}
                    <span className="sr-only">Copy code</span>
                </Button>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="text-sm text-zinc-50 font-mono whitespace-pre-wrap break-words">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
}
