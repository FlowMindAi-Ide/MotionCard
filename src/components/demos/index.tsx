"use client";

import { PremiumButton } from "@/components/ui/premium-button";
import { MotionCard } from "@/components/ui/motion-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TextReveal } from "@/components/ui/text-reveal";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { GlitchText } from "@/components/ui/glitch-text";
import { GradientBorder } from "@/components/ui/gradient-border";
import { GravityText } from "@/components/ui/gravity-text";
import { MorphingCard } from "@/components/ui/morphing-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { PerspectiveCard } from "@/components/ui/perspective-card";
import { FloatingDock } from "@/components/ui/floating-dock";
import { GradientBorderDemo } from "./gradient-border-demo";
import { TextShimmerDemo } from "./text-shimmer-demo";
import { RippleButtonDemo } from "./ripple-button-demo";
import { NeonButtonDemo } from "./neon-button-demo";
import { GlowButtonDemo } from "./glow-button-demo";
import { BreadcrumbNavDemo } from "./breadcrumb-nav-demo";
import { SidebarNavDemo } from "./sidebar-nav-demo";
import { BentoGridDemo } from "./bento-grid-demo";
import { LampDemo } from "./lamp-demo";
import { InfiniteMovingCardsDemo } from "./infinite-moving-cards-demo";
import { LoginFormDemo } from "./login-form-demo";
import { SignupFormDemo } from "./signup-form-demo";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const demos: Record<string, React.ComponentType<any>> = {
    "premium-button": PremiumButton,
    "motion-card": MotionCard,
    "spotlight-card": SpotlightCard,
    "text-reveal": TextReveal,
    "animated-tabs": AnimatedTabs,
    "glitch-text": GlitchText,
    "gradient-border": GradientBorderDemo,
    "gravity-text": GravityText,
    "morphing-card": MorphingCard,
    "magnetic-button": MagneticButton,
    "text-shimmer": TextShimmerDemo,
    "perspective-card": PerspectiveCard,
    "floating-dock": FloatingDock,
    "ripple-button": RippleButtonDemo,
    "neon-button": NeonButtonDemo,
    "glow-button": GlowButtonDemo,
    "breadcrumb-nav": BreadcrumbNavDemo,
    "sidebar-nav": SidebarNavDemo,
    "bento-grid": BentoGridDemo,
    "lamp": LampDemo,
    "infinite-moving-cards": InfiniteMovingCardsDemo,
    "login-form": LoginFormDemo,
    "signup-form": SignupFormDemo,
};
