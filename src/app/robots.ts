import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://motioncard.flowmindai.in";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/", // Example of disallowed path if needed
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
