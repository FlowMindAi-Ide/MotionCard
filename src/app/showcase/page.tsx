import { components } from "@/config/components";
import { ComponentCard } from "@/components/component-card";
import { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Component Showcase | MotionCard",
    description: "Explore our collection of premium, animated React components.",
};

export default function ShowcasePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="container mx-auto py-20 px-4">
                    <div className="flex flex-col items-center justify-center space-y-4 mb-16 text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                            Component Showcase
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Browse our complete library of production-ready components.
                            Copy and paste directly into your project.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {components.map((component) => (
                            <ComponentCard key={component.slug} component={component} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
