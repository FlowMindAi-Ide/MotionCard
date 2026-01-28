# MotionCard

A premium, open-source collection of high-quality, motion-driven React components. Built with **Next.js**, **Framer Motion**, and **Tailwind CSS**.

🚀 **[Live Demo](https://motioncard.flowmindai.in)**

![MotionCard Banner](https://via.placeholder.com/1200x400/1a1a1a/ffffff?text=MotionCard)

## ✨ Features

- 🎨 **Beautiful Animations** - Smooth, performant animations powered by Framer Motion
- 📦 **Copy & Paste Ready** - Each component is self-contained and easy to integrate
- 🌙 **Dark Mode Support** - All components work seamlessly in light and dark themes
- 📱 **Fully Responsive** - Designed to look great on all screen sizes
- 🎛️ **Interactive Controls** - Live customization with real-time preview
- 🔧 **TypeScript First** - Full type safety and IntelliSense support

## 🚀 Components

### Text Effects
- **Glitch Text** - Cyberpunk-style glitch animation
- **Text Shimmer** - Elegant shimmer gradient effect
- **Gravity Text** - Interactive physics-based text
- **Text Reveal** - Smooth character-by-character reveal

### Cards & Containers
- **Gradient Border** - Animated gradient borders
- **Spotlight Card** - Mouse-following spotlight effect
- **Bento Grid** - Modern bento-style layouts

### Buttons
- **Ripple Button** - Material-style ripple effect
- **Neon Button** - Glowing neon style
- **Glow Button** - Subtle glow on hover
- **Magnetic Button** - Mouse-attracted magnetic effect

### Layouts & Effects
- **Lamp Hero** - Dramatic spotlight hero section
- **Infinite Moving Cards** - Auto-scrolling testimonial cards

### Auth Components
- **Sign In Form** - Beautiful, animated login form
- **Sign Up Form** - Matching registration form
- **OAuth Buttons** - Social login integration ready

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/FlowMindAi-Ide/MotionCard.git

# Navigate to the directory
cd motioncard

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI component primitives
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/
│   ├── ui/                # Core UI components
│   ├── demos/             # Component demo wrappers
│   ├── landing/           # Landing page sections
│   ├── layout/            # Layout components (Navbar, Footer)
│   └── auth/              # Authentication components
├── config/
│   ├── components.ts      # Component registry
│   └── component-controls.ts  # Control configurations
└── lib/                   # Utility functions
```

## 🎯 Usage

Each component can be copied directly into your project:

```tsx
// Example: Using the Glitch Text component
import { GlitchText } from "@/components/ui/glitch-text";

export default function MyPage() {
  return (
    <GlitchText 
      text="Hello World" 
      speed="medium"
      enableOnHover={true}
    />
  );
}
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-component`)
3. Commit your changes (`git commit -m 'Add amazing component'`)
4. Push to the branch (`git push origin feature/amazing-component`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Support

If you find this project helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs or issues
- 💡 Suggesting new features or components
- 📢 Sharing with others

---

Built with ❤️ by [FlowMindAi-Ide](https://github.com/FlowMindAi-Ide)
