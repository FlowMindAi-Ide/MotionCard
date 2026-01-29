"use client";

import { CardNav } from "@/components/ui/card-nav";


const navItems = [
    { name: "Showcase", link: "/showcase" },
    { name: "Components", link: "/components" },
];

export function Navbar() {
    return (
        <CardNav
            items={navItems}
        />
    );
}
