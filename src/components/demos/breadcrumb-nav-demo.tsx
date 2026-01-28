"use client";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

export function BreadcrumbNavDemo() {
    return (
        <div className="flex justify-center items-center p-16">
            <BreadcrumbNav
                items={[
                    { label: "Products", href: "/products" },
                    { label: "Electronics", href: "/products/electronics" },
                    { label: "Laptops", href: "/products/electronics/laptops" },
                ]}
            />
        </div>
    );
}
