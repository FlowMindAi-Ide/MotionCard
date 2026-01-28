"use client";

import { CardNav } from "@/components/ui/card-nav";


const navItems = [
    { name: "Features", link: "/#features" },
    { name: "Components", link: "/components" },
];

export function Navbar() {
    return (
        <CardNav
            items={navItems}
        />
    );
}
