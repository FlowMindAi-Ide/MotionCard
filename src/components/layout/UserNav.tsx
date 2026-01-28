"use client";

import { useEffect, useState } from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { LogOut, User as UserIcon } from "lucide-react";

interface UserNavProps {
    user: User;
}

export function UserNav({ user }: UserNavProps) {
    const router = useRouter();
    const supabase = createClient();
    const [isPro, setIsPro] = useState(false);

    useEffect(() => {
        const checkSubscription = async () => {
            const { data } = await supabase
                .from('subscriptions')
                .select('status')
                .eq('user_id', user.id)
                .eq('status', 'active')
                .maybeSingle();

            setIsPro(!!data);
        };
        checkSubscription();
    }, [user.id, supabase]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
    };

    const handleMockUpgrade = async () => {
        await fetch('/api/mock/upgrade', { method: 'POST' });
        router.refresh();
        window.location.reload(); // Force reload to update state
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={user.user_metadata.avatar_url} alt={user.email || ""} />
                        <AvatarFallback>{user.email?.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-medium leading-none">{user.user_metadata.full_name || "User"}</p>
                            {isPro && <span className="px-1.5 py-0.5 text-[10px] bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-full">PRO</span>}
                        </div>
                        <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/* {!isPro && process.env.NODE_ENV === 'development' && (
                    <DropdownMenuItem onClick={handleMockUpgrade} className="cursor-pointer text-blue-600 focus:text-blue-600">
                        <span>Dev: Mock Upgrade</span>
                    </DropdownMenuItem>
                )} */}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-600 focus:text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
