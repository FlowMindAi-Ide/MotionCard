"use client";
import { SidebarNav } from "@/components/ui/sidebar-nav";

export function SidebarNavDemo() {
    return (
        <div className="flex justify-start items-stretch bg-zinc-950 rounded-2xl overflow-hidden" style={{ height: '500px', width: '100%' }}>
            <SidebarNav />
        </div>
    );
}
