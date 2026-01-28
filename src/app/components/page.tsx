import { components } from "@/config/components";
import { redirect } from "next/navigation";

export default function ComponentsPage() {
    // Replicating Sidebar Logic to find the default component (First item in "Text Animations" category)
    const textComponents = components.filter(c => c.title.includes("Text") || c.title.includes("Type") || c.slug.includes("text"));

    // Fallback to absolute first component if category is empty
    const firstComponent = textComponents.length > 0 ? textComponents[0] : components[0];

    if (firstComponent) {
        redirect(`/components/${firstComponent.slug}`);
    }

    // Safety fallback (should never happen if components exist)
    return null;
}
