import { MetadataRoute } from "next";
import { components } from "@/config/components";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://motioncard.flowmindai.in";

    // Static routes
    const routes = [
        "",
        "/components",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic routes for each component
    const componentRoutes = components.map((component) => ({
        url: `${baseUrl}/components/${component.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    return [...routes, ...componentRoutes];
}
