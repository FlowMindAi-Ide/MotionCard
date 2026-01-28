export type ComponentType = "free" | "pro";

export interface ComponentFile {
  name: string;
  code: string;
}

export interface Component {
  id: string;
  title: string;
  slug: string;
  description: string;
  type: ComponentType;
  files: ComponentFile[];
  dependencies?: string[]; // NPM packages required
}

export const components: Component[] = [
  {
    id: "premium-button",
    title: "Premium Button",
    slug: "premium-button",
    description: "A gradient button with shadow and hover effects.",
    type: "free",
    dependencies: [],
    files: [
      {
        name: "Usage",
        code: `import { Button } from "@/components/ui/button"

export function PremiumButtonDemo() {
  return (
    <Button variant="premium">
      Get Started
    </Button>
  )
}`
      },
      {
        name: "components/ui/button.tsx",
        code: `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline:
                    "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost:
                    "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
                premium: "bg-zinc-900 text-zinc-100 border border-zinc-800 hover:bg-zinc-800/80 shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset,0_1px_2px_0_rgba(0,0,0,0.4)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_4px_12px_0_rgba(0,0,0,0.5)] active:translate-y-0.5 transition-all duration-300 rounded-full px-8 backdrop-blur-sm",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
                "icon-sm": "size-8",
                "icon-lg": "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

function Button({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    }) {
    const Comp = asChild ? Slot : "button"

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }`
      }
    ]
  },
  {
    id: "motion-card",
    title: "Motion Card",
    slug: "motion-card",
    description: "Animated card with smooth entrance and glow effects.",
    type: "free",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "Usage",
        code: `import { MotionCard } from "@/components/ui/motion-card"

export function MotionCardDemo() {
  return (
    <div className="flex justify-center p-10">
       <MotionCard />
    </div>
  )
}`
      },
      {
        name: "components/ui/motion-card.tsx",
        code: `"use client";

import { motion } from "framer-motion";

export function MotionCard() {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow max-w-xs"
        >
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 mb-4">
                M
            </div>
            <h3 className="font-semibold text-lg mb-2">Hover me</h3>
            <p className="text-muted-foreground text-sm">
                I lift up smoothly when you hover! Built with Framer Motion.
            </p>
        </motion.div>
    );
}`
      }
    ]
  },
  {
    id: "spotlight-card",
    title: "Spotlight Card",
    slug: "spotlight-card",
    description: "A card with a mouse-following spotlight gradient effect.",
    type: "free",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "Usage",
        code: `import { SpotlightCard } from "@/components/ui/spotlight-card"

export function SpotlightCardDemo() {
  return (
    <div className="flex justify-center p-10">
      <SpotlightCard spotlightColor="#b928e2" spotlightRadius={360} />
    </div>
  )
}`
      },
      {
        name: "components/ui/spotlight-card.tsx",
        code: `"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export function SpotlightCard() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative max-w-md rounded-xl border border-zinc-800 bg-zinc-900 px-8 py-16 shadow-2xl"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate\`
            radial-gradient(
              650px circle at \${mouseX}px \${mouseY}px,
              rgba(120, 119, 198, 0.15),
              transparent 80%
            )
          \`,
                }}
            />

            <div className="relative">
                <h3 className="text-xl font-bold text-zinc-100 mb-2">
                    Spotlight Effect
                </h3>
                <p className="text-zinc-400">
                    A subtle gradient that follows your mouse cursor, creating a beautiful spotlight effect that reveals borders and textures.
                </p>
            </div>
        </div>
    );
}`
      }
    ]
  },
  {
    id: "text-reveal",
    title: "Text Reveal",
    slug: "text-reveal",
    description: "Reveals text word by word with opacity animation.",
    type: "free",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "Usage",
        code: `import { TextReveal } from "@/components/ui/text-reveal"

export function TextRevealDemo() {
  return (
    <TextReveal text="Motion driven experiences that delight your users." duration={0.5} />
  )
}`
      },
      {
        name: "components/ui/text-reveal.tsx",
        code: `"use client";
import { motion } from "framer-motion";

interface TextRevealProps {
    text?: string;
    className?: string;
}

export function TextReveal({
    text = "Motion driven experiences that delight your users.",
    className
}: TextRevealProps) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "5px" }}
                    key={index}
                    className="text-2xl font-bold text-foreground"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}`
      }
    ]
  },
  {
    id: "animated-tabs",
    title: "Animated Tabs",
    slug: "animated-tabs",
    description: "Tabs with a floating background indicator.",
    type: "free",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "Usage",
        code: `import { AnimatedTabs } from "@/components/ui/animated-tabs"

export function AnimatedTabsDemo() {
    return <AnimatedTabs />
}`
      },
      {
        name: "components/ui/animated-tabs.tsx",
        code: `"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
    { id: "world", label: "World" },
    { id: "ny", label: "N.Y." },
    { id: "business", label: "Business" },
    { id: "arts", label: "Arts" },
    { id: "science", label: "Science" },
];

export function AnimatedTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="flex space-x-1 rounded-full border bg-background/50 p-1 backdrop-blur-sm">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                        "relative px-4 py-2 text-sm font-medium transition focus-visible:outline-2",
                        activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground hover:text-primary"
                    )}
                    style={{
                        WebkitTapHighlightColor: "transparent",
                    }}
                >
                    {activeTab === tab.id && (
                        <motion.span
                            layoutId="bubble"
                            className="absolute inset-0 z-10 bg-primary shadow-sm"
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-20 mix-blend-exclusion dark:mix-blend-normal">{tab.label}</span>
                </button>
            ))}
        </div>
    );
}`
      }
    ]
  },
  {
    id: "glitch-text",
    title: "Glitch Text",
    slug: "glitch-text",
    description: "Cyberpunk-style glitch effect for text.",
    type: "free",
    dependencies: [],
    files: [
      {
        name: "Usage",
        code: `import { GlitchText } from "@/components/ui/glitch-text"

export function GlitchTextDemo() {
  return (
    <div className="flex justify-center p-10">
      <GlitchText text="CYBERPUNK" className="text-5xl font-bold" />
    </div>
  )
}`
      },
      {
        name: "components/ui/glitch-text.tsx",
        code: `"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
    text: string;
    className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?";

export function GlitchText({ text = "GLITCH", className }: GlitchTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = () => {
        let iteration = 0;
        
        if (intervalRef.current) clearInterval(intervalRef.current);
        
        intervalRef.current = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }

            iteration += 1/3;
        }, 30);
    };

    return (
        <div 
            className={cn("relative inline-block group cursor-default select-none", className)}
            onMouseEnter={scramble}
        >
            <span className="relative z-10 block mix-blend-difference">{displayText}</span>
            <span className="absolute top-0 left-0 -z-10 block w-full text-red-500 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-1 group-hover:translate-x-[2px] mix-blend-screen">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 block w-full text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-2 group-hover:-translate-x-[2px] mix-blend-screen">
                {text}
            </span>
        </div>
    );
}`
      },
      {
        name: "tailwind.config.ts",
        code: `// Add this to your tailwind.config.ts file
export default {
  theme: {
    extend: {
      animation: {
        "glitch-1": "glitch-1 2.5s infinite linear alternate-reverse",
        "glitch-2": "glitch-2 3s infinite linear alternate-reverse",
      },
      keyframes: {
        "glitch-1": {
          "0%": { clipPath: "polygon(0 2%, 100% 2%, 100% 5%, 0 5%)" },
          "10%": { clipPath: "polygon(0 15%, 100% 15%, 100% 15%, 0 15%)" },
          "20%": { clipPath: "polygon(0 10%, 100% 10%, 100% 20%, 0 20%)" },
          "30%": { clipPath: "polygon(0 1%, 100% 1%, 100% 2%, 0 2%)" },
          "40%": { clipPath: "polygon(0 33%, 100% 33%, 100% 33%, 0 33%)" },
          "50%": { clipPath: "polygon(0 44%, 100% 44%, 100% 44%, 0 44%)" },
          "60%": { clipPath: "polygon(0 50%, 100% 50%, 100% 20%, 0 20%)" },
          "70%": { clipPath: "polygon(0 70%, 100% 70%, 100% 70%, 0 70%)" },
          "80%": { clipPath: "polygon(0 80%, 100% 80%, 100% 80%, 0 80%)" },
          "90%": { clipPath: "polygon(0 50%, 100% 50%, 100% 55%, 0 55%)" },
          "100%": { clipPath: "polygon(0 70%, 100% 70%, 100% 80%, 0 80%)" },
        },
        "glitch-2": {
          "0%": { clipPath: "polygon(0 25%, 100% 25%, 100% 30%, 0 30%)" },
          "15%": { clipPath: "polygon(0 3%, 100% 3%, 100% 3%, 0 3%)" },
          "22%": { clipPath: "polygon(0 5%, 100% 5%, 100% 20%, 0 20%)" },
          "31%": { clipPath: "polygon(0 20%, 100% 20%, 100% 20%, 0 20%)" },
          "45%": { clipPath: "polygon(0 40%, 100% 40%, 100% 40%, 0 40%)" },
          "51%": { clipPath: "polygon(0 52%, 100% 52%, 100% 59%, 0 59%)" },
          "63%": { clipPath: "polygon(0 60%, 100% 60%, 100% 60%, 0 60%)" },
          "76%": { clipPath: "polygon(0 75%, 100% 75%, 100% 75%, 0 75%)" },
          "81%": { clipPath: "polygon(0 65%, 100% 65%, 100% 40%, 0 40%)" },
          "94%": { clipPath: "polygon(0 45%, 100% 45%, 100% 50%, 0 50%)" },
          "100%": { clipPath: "polygon(0 14%, 100% 14%, 100% 33%, 0 33%)" },
        },
      },
    },
  },
}`
      }
    ]
  },
  {
    id: "gradient-border",
    title: "Gradient Border",
    slug: "gradient-border",
    description: "A container with a moving gradient border.",
    type: "free",
    dependencies: [],
    files: [
      {
        name: "Usage",
        code: `import { GradientBorder } from "@/components/ui/gradient-border";
import { Sparkles } from "lucide-react";

export function GradientBorderDemo() {
  return (
    <div className="flex justify-center p-10">
      <GradientBorder gradient="from-red-500 to-yellow-500" borderWidth="4" duration="3" borderRadius="24" className="bg-zinc-950">
        <div className="max-w-xs text-center p-2">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 mb-4">
                <Sparkles className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Legendary</h3>
            <p className="text-zinc-400 mb-6 text-sm">
                Unlock premium features with our animated borders.
            </p>
            <button className="w-full rounded-md bg-white py-2 text-xs font-semibold text-black hover:bg-zinc-200 transition-colors">
                Get Started
            </button>
        </div>
      </GradientBorder>
    </div>
  );
}`
      },
      {
        name: "components/ui/gradient-border.tsx",
        code: `"use client";

import { cn } from "@/lib/utils";

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  gradient?: string;
}

const tailwindColorMap: Record<string, string> = {
  "blue-400": "#60a5fa",
  "purple-500": "#a855f7",
  "blue-500": "#3b82f6",
  "indigo-500": "#6366f1",
  "green-500": "#22c55e",
  "red-500": "#ef4444",
  "yellow-500": "#eab308",
};

export function GradientBorder({
  children,
  className,
  containerClassName,
  gradient = "from-blue-400 to-purple-500",
}: GradientBorderProps) {
  // Parse colors for the conic gradient
  const fromColorMatch = gradient.match(/from-([\w-]+)/);
  const toColorMatch = gradient.match(/to-([\w-]+)/);

  const fromColor = fromColorMatch
    ? tailwindColorMap[fromColorMatch[1]] || "#3B82F6"
    : "#3B82F6";
  const toColor = toColorMatch
    ? tailwindColorMap[toColorMatch[1]] || "#A855F7"
    : "#A855F7";

  return (
    <div
      className={cn(
        "relative group rounded-[24px] p-1 overflow-hidden",
        containerClassName
      )}
    >
      {/* Animated Gradient Border */}
      <div
        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]"
        style={{
          background: "conic-gradient(from 0deg, " + fromColor + ", " + toColor + ", " + fromColor + ")",
        }}
      />

      {/* Glow Effect on Hover */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl",
          gradient.includes("from-")
            ? "bg-gradient-to-r " + gradient
            : "bg-purple-500/50"
        )}
      />

      <div
        className={cn(
          "relative bg-zinc-950 rounded-[20px] p-6 h-full w-full z-10",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}`
      }
    ]
  },
  {
    id: "gravity-text",
    title: "Gravity Text",
    slug: "gravity-text",
    description: "Text characters that fall and bounce on mount.",
    type: "free",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "Usage",
        code: `import { GravityText } from "@/components/ui/gravity-text"

export function GravityTextDemo() {
  return (
    <div className="h-[300px] flex items-center justify-center">
       <GravityText text="GRAVITY" />
    </div>
  )
}`
      },
      {
        name: "components/ui/gravity-text.tsx",
        code: `"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface GravityTextProps {
    text: string;
    className?: string;
    font?: string;
    duration?: number;
    stiffness?: number;
}

export function GravityText({
    text = "GRAVITY",
    className,
    font = "font-bold",
    duration = 0.5,
    stiffness = 400
}: GravityTextProps) {
    const chars = text.split("");

    return (
        <div
            className={cn("flex flex-wrap justify-center gap-1 pb-4 relative", className)}
            style={{ minHeight: '120px' }}
        >
            {chars.map((char, i) => (
                <motion.span
                    key={i}
                    drag
                    dragSnapToOrigin // This makes it snap back!
                    dragElastic={0.3}
                    dragTransition={{
                        power: 0.3,
                        timeConstant: 200
                    }}
                    whileDrag={{
                        scale: 1.3,
                        cursor: 'grabbing',
                        zIndex: 10,
                    }}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        damping: 15,
                        stiffness: stiffness,
                        bounce: 0.8,
                        duration: duration,
                        delay: i * 0.1,
                    }}
                    className={cn(
                        "font-display transition-colors inline-block cursor-grab select-none",
                        font
                    )}
                >
                    {char === " " ? "\\u00A0" : char}
                </motion.span>
            ))}
        </div>
    );
}`
      }
    ]
  },
  {
    id: "morphing-card",
    title: "Morphing Card",
    slug: "morphing-card",
    description: "Card that morphs between different states.",
    type: "free",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "Usage",
        code: `import { MorphingCard } from "@/components/ui/morphing-card"

export function MorphingCardDemo() {
  return (
    <div className="h-[400px] flex items-center justify-center">
      <MorphingCard />
    </div>
  )
}`
      },
      {
        name: "components/ui/morphing-card.tsx",
        code: `"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function MorphingCard() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
             <motion.div
                layout
                onClick={() => setIsOpen(!isOpen)}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl cursor-pointer overflow-hidden relative shadow-xl"
                style={{
                    width: isOpen ? 400 : 80,
                    height: isOpen ? 300 : 80,
                    borderRadius: 24,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <motion.div 
                    layout="position"
                    className="absolute top-4 left-4"
                >
                     <div className={\`h-12 w-12 rounded-full flex items-center justify-center transition-colors duration-300 \${isOpen ? 'bg-red-500 text-white' : 'bg-white text-black'}\`}>
                         <Plus className={\`transition-transform duration-300 \${isOpen ? 'rotate-45' : 'rotate-0'}\`} />
                     </div>
                </motion.div>

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.2 }}
                        className="p-8 pt-24"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">Extended Card</h3>
                        <p className="text-zinc-400">
                            This card seamlessly morphed from a small button into a full content area using Framer Motion&apos;s layout animations.
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}`
      }
    ]
  },
  {
    id: "magnetic-button",
    title: "Magnetic Button",
    slug: "magnetic-button",
    description: "Button that magnetically follows the cursor.",
    type: "free",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "Usage",
        code: `import { MagneticButton } from "@/components/ui/magnetic-button"
import { Button } from "@/components/ui/button"

export function MagneticButtonDemo() {
  return (
    <div className="flex justify-center p-10">
      <MagneticButton>
        <Button variant="premium">Magnetic</Button>
      </MagneticButton>
    </div>
  )
}`
      },
      {
        name: "components/ui/magnetic-button.tsx",
        code: `"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
    children?: React.ReactNode;
    text?: string;
    className?: string;
    onClick?: () => void;
}

import { Button } from "@/components/ui/button";

export function MagneticButton({
    children,
    className,
    onClick
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const content = children || <Button variant="premium">Magnetic</Button>;

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            className={\`relative \${className}\`}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onClick={onClick}
        >
            {content}
        </motion.div>
    );
}`
      }
    ]
  },
  {
    id: "text-shimmer",
    title: "Text Shimmer",
    slug: "text-shimmer",
    description: "Text with a shimmering gradient effect.",
    type: "free",
    dependencies: [],
    files: [
      {
        name: "Usage",
        code: `import { TextShimmer } from "@/components/ui/text-shimmer"

export function TextShimmerDemo() {
  return (
    <div className="flex justify-center p-10">
      <TextShimmer duration={3} className="font-mono text-xl">
        Loading premium experience...
      </TextShimmer>
    </div>
  )
}`
      },
      {
        name: "components/ui/text-shimmer.tsx",
        code: `"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface TextShimmerProps {
    children: string;
    className?: string;
}

export function TextShimmer({
    children = "Premium Shimmer Effect",
    className,
}: TextShimmerProps) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        // Add keyframes dynamically
        const styleId = 'shimmer-keyframes';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = \`
                @keyframes shimmer-slide {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
            \`;
            document.head.appendChild(style);
        }
    }, []);

    return (
        <span
            ref={ref}
            className={cn(
                "inline-block bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-400 dark:from-zinc-600 dark:via-zinc-100 dark:to-zinc-600 bg-clip-text text-transparent p-2",
                className
            )}
            style={{
                backgroundSize: '200% auto',
                animation: 'shimmer-slide 3s linear infinite',
            }}
        >
            {children}
        </span>
    );
}`
      },
      {
        name: "tailwind.config.ts (Optional)",
        code: `// If you prefer Tailwind-based animation instead of inline styles:
export default {
  theme: {
    extend: {
      animation: {
        "shimmer": "shimmer 3s infinite linear",
      },
      keyframes: {
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
}`
      }
    ]
  },
  {
    id: "perspective-card",
    title: "Perspective Card",
    slug: "perspective-card",
    description: "3D tilt effect card with glossy reflection.",
    type: "free",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "Usage",
        code: `import { PerspectiveCard } from "@/components/ui/perspective-card"

export function PerspectiveCardDemo() {
  return (
    <div className="flex justify-center p-10 perspective-[1000px]">
      <PerspectiveCard className="w-64 h-80 flex flex-col justify-end">
         <h3 className="text-2xl font-bold text-white">3D Tilt</h3>
         <p className="text-zinc-400">Move your mouse</p>
      </PerspectiveCard>
    </div>
  )
}`
      },
      {
        name: "components/ui/perspective-card.tsx",
        code: `"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

interface PerspectiveCardProps {
    children: React.ReactNode;
    className?: string;
}

export function PerspectiveCard({ children, className }: PerspectiveCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useMotionTemplate\`calc(\${mouseYSpring} * -0.5deg)\`;
    const rotateY = useMotionTemplate\`calc(\${mouseXSpring} * 0.5deg)\`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct * 20); // Sensitivity
        y.set(yPct * 20);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className={\`relative group rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 p-6 \${className}\`}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
            >
                {children}
            </div>
            
            {/* Gloss/Reflection Effect */}
            <motion.div 
               className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
               style={{
                   background: useMotionTemplate\`
                        linear-gradient(
                            115deg, 
                            transparent 0%, 
                            rgba(255, 255, 255, 0.1) 30%, 
                            transparent 60%
                        )
                   \`,
                   transform: "translateZ(1px)" // Sit slightly above
               }}
            />
        </motion.div>
    );
}`
      }
    ]
  },
  {
    id: "floating-dock",
    title: "Floating Dock",
    slug: "floating-dock",
    description: "macOS-style floating dock with smooth animations.",
    type: "free",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "Usage",
        code: `import { FloatingDock } from "@/components/ui/floating-dock"
import { Home, Terminal, Settings, User } from "lucide-react"

export function FloatingDockDemo() {
  const items = [
    { icon: <Home className="h-6 w-6" />, label: "Home" },
    { icon: <Terminal className="h-6 w-6" />, label: "Terminal" },
    { icon: <Settings className="h-6 w-6" />, label: "Settings" },
    { icon: <User className="h-6 w-6" />, label: "User" },
  ]
  
  return (
    <div className="flex justify-center p-10 items-end h-40">
      <FloatingDock items={items} />
    </div>
  )
}`
      },
      {
        name: "components/ui/floating-dock.tsx",
        code: `"use client";

import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface FloatingDockProps {
    items: { icon: React.ReactNode; label: string; onClick?: () => void }[];
    className?: string;
}

export function FloatingDock({ items, className }: FloatingDockProps) {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-zinc-900 px-4 pb-3",
                className
            )}
        >
            {items.map((item, i) => (
                <IconContainer mouseX={mouseX} key={i}>
                    <div 
                        className="flex h-full w-full items-center justify-center rounded-full bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer"
                        onClick={item.onClick}
                    >
                        {item.icon}
                    </div>
                </IconContainer>
            ))}
        </motion.div>
    );
}

function IconContainer({ mouseX, children }: { mouseX: MotionValue; children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
    const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width, height }}
            className="aspect-square rounded-full"
        >
            {children}
        </motion.div>
    );
}`
      }
    ]
  },
  {
    id: "ripple-button",
    title: "Ripple Button",
    slug: "ripple-button",
    description: "Button with expanding ripple effect on click.",
    type: "free",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "Usage",
        code: `import { RippleButton } from "@/components/ui/ripple-button"

export function RippleButtonDemo() {
  return (
    <RippleButton>
      Click Me
    </RippleButton>
  )
}`
      },
      {
        name: "components/ui/ripple-button.tsx",
        code: `"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface RippleButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

interface Ripple {
    x: number;
    y: number;
    id: number;
}

export function RippleButton({ children, className, onClick }: RippleButtonProps) {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple: Ripple = {
            x,
            y,
            id: Date.now(),
        };

        setRipples((prev) => [...prev, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);

        onClick?.();
    };

    return (
        <button
            onClick={handleClick}
            className={cn(
                "relative overflow-hidden rounded-full px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300",
                className
            )}
        >
            {ripples.map((ripple) => (
                <motion.span
                    key={ripple.id}
                    className="absolute rounded-full bg-white/30"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                    }}
                    initial={{
                        width: 0,
                        height: 0,
                        x: 0,
                        y: 0,
                        opacity: 1,
                    }}
                    animate={{
                        width: 500,
                        height: 500,
                        x: -250,
                        y: -250,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                />
            ))}
            <span className="relative z-10">{children}</span>
        </button>
    );
}`
      }
    ]
  },
  {
    id: "neon-button",
    title: "Neon Button",
    slug: "neon-button",
    description: "Button with neon glow and pulsing effects.",
    type: "free",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "Usage",
        code: `import { NeonButton } from "@/components/ui/neon-button"

export function NeonButtonDemo() {
  return (
    <div className="flex gap-6 bg-black p-16">
      <NeonButton color="cyan">Neon Cyan</NeonButton>
      <NeonButton color="pink">Neon Pink</NeonButton>
      <NeonButton color="purple">Neon Purple</NeonButton>
    </div>
  )
}`
      },
      {
        name: "components/ui/neon-button.tsx",
        code: `"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    color?: "cyan" | "pink" | "purple";
}

export function NeonButton({ 
    children, 
    className, 
    onClick,
    color = "cyan" 
}: NeonButtonProps) {
    const colors = {
        cyan: {
            border: "border-cyan-400",
            shadow: "shadow-[0_0_10px_#22d3ee,0_0_20px_#22d3ee,0_0_30px_#22d3ee]",
            hoverShadow: "hover:shadow-[0_0_15px_#22d3ee,0_0_30px_#22d3ee,0_0_45px_#22d3ee,0_0_60px_#22d3ee]",
            text: "text-cyan-400",
        },
        pink: {
            border: "border-pink-400",
            shadow: "shadow-[0_0_10px_#f472b6,0_0_20px_#f472b6,0_0_30px_#f472b6]",
            hoverShadow: "hover:shadow-[0_0_15px_#f472b6,0_0_30px_#f472b6,0_0_45px_#f472b6,0_0_60px_#f472b6]",
            text: "text-pink-400",
        },
        purple: {
            border: "border-purple-400",
            shadow: "shadow-[0_0_10px_#c084fc,0_0_20px_#c084fc,0_0_30px_#c084fc]",
            hoverShadow: "hover:shadow-[0_0_15px_#c084fc,0_0_30px_#c084fc,0_0_45px_#c084fc,0_0_60px_#c084fc]",
            text: "text-purple-400",
        },
    };

    const theme = colors[color];

    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-8 py-3 rounded-full border-2 bg-black font-semibold uppercase tracking-wider transition-all duration-300",
                theme.border,
                theme.shadow,
                theme.hoverShadow,
                theme.text,
                className
            )}
        >
            {children}
        </motion.button>
    );
}`
      }
    ]
  },
  {
    id: "glow-button",
    title: "Glow Button",
    slug: "glow-button",
    description: "Button with cursor-following gradient spotlight.",
    type: "free",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "Usage",
        code: `import { GlowButton } from "@/components/ui/glow-button"

export function GlowButtonDemo() {
  return (
    <GlowButton>
      Hover for Glow
    </GlowButton>
  )
}`
      },
      {
        name: "components/ui/glow-button.tsx",
        code: `"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export function GlowButton({ children, className, onClick }: GlowButtonProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.button
            onClick={onClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative overflow-hidden px-8 py-3 rounded-full bg-zinc-900 border border-zinc-700 text-white font-semibold transition-all duration-300",
                className
            )}
        >
            {isHovering && (
                <div
                    className="absolute pointer-events-none"
                    style={{
                        left: mousePosition.x,
                        top: mousePosition.y,
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(99,102,241,0.2) 30%, transparent 70%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            )}
            
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}`
      }
    ]
  },
  {
    id: "breadcrumb-nav",
    title: "Breadcrumb Nav",
    slug: "breadcrumb-nav",
    description: "Animated breadcrumb navigation trail.",
    type: "free",
    dependencies: ["framer-motion", "lucide-react"],
    files: [
      {
        name: "Usage",
        code: `import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav"

export function BreadcrumbNavDemo() {
  return (
    <BreadcrumbNav
      items={[
        { label: "Products", href: "/products" },
        { label: "Electronics", href: "/products/electronics" },
        { label: "Laptops", href: "/products/electronics/laptops" },
      ]}
    />
  )
}`
      },
      {
        name: "components/ui/breadcrumb-nav.tsx",
        code: `"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbNavProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function BreadcrumbNav({ items, className }: BreadcrumbNavProps) {
    return (
        <nav className={cn("flex items-center gap-2 text-sm", className)}>
            <Link href="/" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                <Home className="h-4 w-4" />
            </Link>
            
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                >
                    <ChevronRight className="h-4 w-4 text-zinc-400" />
                    {index === items.length - 1 ? (
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">
                            {item.label}
                        </span>
                    ) : (
                        <Link
                            href={item.href}
                            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            {item.label}
                        </Link>
                    )}
                </motion.div>
            ))}
        </nav>
    );
}`
      }
    ]
  },
  {
    id: "sidebar-nav",
    title: "Sidebar Nav",
    slug: "sidebar-nav",
    description: "Collapsible sidebar navigation with smooth transitions.",
    type: "free",
    dependencies: ["framer-motion", "lucide-react"],
    files: [
      {
        name: "Usage",
        code: `import { SidebarNav } from "@/components/ui/sidebar-nav"

export function SidebarNavDemo() {
  return (
    <div style={{ height: '400px' }}>
      <SidebarNav />
    </div>
  )
}`
      },
      {
        name: "components/ui/sidebar-nav.tsx",
        code: `"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Home, Settings, User, FileText, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarNavProps {
    className?: string;
}

const navItems = [
    { icon: Home, label: "Dashboard", href: "#" },
    { icon: User, label: "Profile", href: "#" },
    { icon: FileText, label: "Documents", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
    { icon: HelpCircle, label: "Help", href: "#" },
];

export function SidebarNav({ className }: SidebarNavProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <motion.nav
            initial={false}
            animate={{ width: isExpanded ? 240 : 80 }}
            className={cn(
                "relative h-full bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col gap-2 transition-all duration-300",
                className
            )}
        >
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="absolute -right-3 top-6 bg-zinc-900 border border-zinc-800 rounded-full p-1 hover:bg-zinc-800 transition-colors"
            >
                <motion.div
                    animate={{ rotate: isExpanded ? 0 : 180 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronLeft className="h-4 w-4 text-zinc-400" />
                </motion.div>
            </button>

            <div className="flex flex-col gap-1 mt-8">
                {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = index === activeIndex;

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                                isActive 
                                    ? "bg-indigo-600 text-white" 
                                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                            )}
                        >
                            <Icon className="h-5 w-5 shrink-0" />
                            <AnimatePresence mode="wait">
                                {isExpanded && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="font-medium whitespace-nowrap overflow-hidden"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}`
      }
    ]
  },
  {
    id: "bento-grid",
    title: "Bento Grid Layout",
    slug: "bento-grid",
    description: "A masonry-style grid layout component for showcasing content.",
    type: "free",
    dependencies: [],
    files: [
      {
        name: "Usage",
        code: `import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      <BentoGridItem
        title="The Dawn of Innovation"
        description="Explore the birth of groundbreaking ideas and inventions."
        header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />}
        icon={<IconClipboardCopy className="h-4 w-4 text-neutral-500" />}
        className="md:col-span-2"
      />
      {/* Add more items */}
    </BentoGrid>
  );
}`
      },
      {
        name: "components/ui/bento-grid.tsx",
        code: `"use client";

import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};`
      }
    ]
  },
  {
    id: "lamp",
    title: "Lamp Hero Section",
    slug: "lamp",
    description: "A dramatic section header with a glowing lamp effect.",
    type: "free",
    dependencies: ["framer-motion"],
    files: [
      {
        name: "Usage",
        code: `import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}`
      },
      {
        name: "components/ui/lamp.tsx",
        code: `"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: \`conic-gradient(var(--conic-position), var(--tw-gradient-stops))\`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-indigo-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: \`conic-gradient(var(--conic-position), var(--tw-gradient-stops))\`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-indigo-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};`
      }
    ]
  },
  {
    id: "infinite-moving-cards",
    title: "Infinite Moving Cards",
    slug: "infinite-moving-cards",
    description: "A horizontal scrolling marquee for testimonials or logos.",
    type: "free",
    dependencies: [],
    files: [
      {
        name: "Usage",
        code: `import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={[{ quote: "To be, or not to be", name: "Shakespeare", title: "Hamlet" }]}
        direction="right"
        speed="slow"
        gap="normal"
        backgroundColor="#09090b"
        textColor="#ffffff"
        subTextColor="#a1a1aa"
      />
    </div>
  );
}`
      },
      {
        name: "components/ui/infinite-moving-cards.tsx",
        code: `"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
    gap = "normal",
    textColor = "#ffffff",
    backgroundColor = "#09090b",
    subTextColor = "#a1a1aa",
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
    gap?: "small" | "normal" | "large";
    textColor?: string;
    backgroundColor?: string;
    subTextColor?: string;
}) => {
    // ... refs and effects ...
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "normal"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    // Reacting to props changes to update CSS variables immediately
    useEffect(() => {
        getDirection();
        getSpeed();
    }, [direction, speed]);

    const gapClass = {
        small: "gap-2",
        normal: "gap-4",
        large: "gap-8",
    }[gap];

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 py-4 w-max flex-nowrap",
                    gapClass,
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.concat(items).map((item, idx) => (
                    <li
                        className={cn(
                            "w-[350px] max-w-full relative rounded-2xl border flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                        )}
                        style={{
                            backgroundColor: backgroundColor
                        }}
                        key={item.name + idx}
                    >
                        <blockquote>
                            <span
                                className="relative z-20 text-sm leading-[1.6] font-normal"
                                style={{ color: textColor }}
                            >
                                {item.quote}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span style={{ color: subTextColor }} className="text-sm leading-[1.6] font-normal">
                                        {item.name}
                                    </span>
                                    <span style={{ color: subTextColor }} className="text-sm leading-[1.6] font-normal">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};`
      },
      {
        name: "tailwind.config.ts",
        code: `export default {
  theme: {
    extend: {
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, normal) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translateX(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
}`
      },

    ]
  },
  {
    id: "login-form",
    title: "Login Form",
    slug: "login-form",
    description: "A clean, responsive login form with social auth buttons.",
    type: "free",
    dependencies: ["lucide-react"],
    files: [
      {
        name: "Usage",
        code: `import { LoginForm } from "@/components/ui/login-form"

export function LoginFormDemo() {
  return (
    <div className="flex justify-center p-10 w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 w-full shadow-sm">
         <h2 className="text-xl font-bold mb-6 text-center">Welcome Back</h2>
         <LoginForm />
      </div>
    </div>
  )
}`
      },
      {
        name: "components/ui/login-form.tsx",
        code: `"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Github, Chrome } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoginFormProps {
    className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login submitted");
    };

    return (
        <div className={cn("grid gap-6", className)}>
             <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full gap-2">
                    <Github className="h-4 w-4" />
                    Github
                </Button>
                <Button variant="outline" className="w-full gap-2">
                    <Chrome className="h-4 w-4" />
                    Google
                </Button>
            </div>
            
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
                        Or continue with
                    </span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        className="bg-transparent"
                    />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link
                            href="#"
                            className="text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-50"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        required
                        className="bg-transparent"
                    />
                </div>
                <Button type="submit" className="w-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
                    Sign In
                </Button>
            </form>
        </div>
    );
}`
      }
    ]
  },
  {
    id: "signup-form",
    title: "Signup Form",
    slug: "signup-form",
    description: "A comprehensive signup form with name, email, and password fields.",
    type: "free",
    dependencies: ["lucide-react"],
    files: [
      {
        name: "Usage",
        code: `import { SignupForm } from "@/components/ui/signup-form"

export function SignupFormDemo() {
        return(
    <div className = "flex justify-center p-10 w-full max-w-md mx-auto" >
            <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 w-full shadow-sm">
      <h2 className="text-xl font-bold mb-6 text-center" > Create Account </h2>
      < SignupForm />
      </div>
      </div>
  )
}`
      },
      {
        name: "components/ui/signup-form.tsx",
        code: `"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Github, Chrome } from "lucide-react";
import { cn } from "@/lib/utils";

interface SignupFormProps {
  className?: string;
}

export function SignupForm({ className }: SignupFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup submitted");
  };

  return (
    <div className= { cn("grid gap-6", className) } >
    <div className="grid grid-cols-2 gap-4" >
      <Button variant="outline" className = "w-full gap-2" >
        <Github className="h-4 w-4" />
          Github
          </Button>
          < Button variant = "outline" className = "w-full gap-2" >
            <Chrome className="h-4 w-4" />
              Google
              </Button>
              </div>

              < div className = "relative" >
                <div className="absolute inset-0 flex items-center" >
                  <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
                    </div>
                    < div className = "relative flex justify-center text-xs uppercase" >
                      <span className="bg-white px-2 text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400" >
                        Or continue with
                    </span>
  </div>
  </div>

  < form onSubmit = { handleSubmit } className = "space-y-4" >
    <div className="space-y-2" >
      <Label htmlFor="name" > Full Name </Label>
        < Input
  id = "name"
  placeholder = "John Doe"
  required
  className = "bg-transparent"
    />
    </div>
    < div className = "space-y-2" >
      <Label htmlFor="email" > Email </Label>
        < Input
  id = "email"
  type = "email"
  placeholder = "name@example.com"
  required
  className = "bg-transparent"
    />
    </div>
    < div className = "space-y-2" >
      <Label htmlFor="password" > Password </Label>
        < Input
  id = "password"
  type = "password"
  required
  className = "bg-transparent"
    />
    </div>
    < Button type = "submit" className = "w-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200" >
      Create Account
        </Button>
        </form>
        </div>
    );
}`
      }
    ]
  }
];

