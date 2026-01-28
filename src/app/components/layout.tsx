import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ComponentSidebar } from "@/components/layout/ComponentSidebar";

export default function ComponentsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
            <Navbar />
            <div className="container flex-1 md:grid md:grid-cols-[260px_minmax(0,1fr)] lg:grid-cols-[300px_minmax(0,1fr)] md:gap-6 lg:gap-10 items-stretch">
                <ComponentSidebar />
                <main className="relative py-6 lg:gap-10 lg:py-8 pt-24 md:pt-10">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}
