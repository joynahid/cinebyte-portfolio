# CineByte Portfolio - Modern Professional Website

A stunning, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring smooth animations, auto-scrolling brand logos, video sections, and responsive design.

## ✨ Features

- **Modern Design**: Beautiful gradient backgrounds with glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion with scroll-triggered animations
- **Auto-scrolling Brand Logos**: Seamless infinite scrolling brand showcase
- **Video Sections**: Interactive video players with hover effects
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Performance Optimized**: Built with Next.js 14 and TypeScript for optimal performance
- **Professional UI**: Clean, modern interface with beautiful typography

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Scroll Animations**: React Intersection Observer

## 📋 Prerequisites

- Node.js 18+ (recommended: use nvm)
- npm or yarn package manager

## 🛠️ Installation & Setup

1. **Clone or navigate to the project directory**:
   ```bash
   cd cinebyte-portfolio
   ```

2. **Use Node.js** (if using nvm):
   ```bash
   nvm use node
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
cinebyte-portfolio/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Responsive navigation with mobile menu
│   │   ├── BrandScroll.tsx     # Auto-scrolling brand logos
│   │   ├── VideoSection.tsx    # Interactive video showcase
│   │   └── Footer.tsx          # Footer with contact info and links
│   ├── globals.css             # Global styles and Tailwind imports
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main homepage with all sections
├── public/                     # Static assets
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.js              # Next.js configuration
```

## 🎨 Key Components

### Navigation
- Fixed header with smooth scroll background blur
- Responsive mobile menu with hamburger animation
- Smooth hover effects and transitions

### Hero Section
- Large gradient text with CineByte branding
- Animated call-to-action buttons
- Scroll indicator with bounce animation
- Background grid pattern overlay

### Brand Scroll
- Infinite horizontal scrolling animation
- Glassmorphism card design for brand logos
- Gradient edge masks for smooth transitions

### Video Section
- Featured video with play/pause controls
- Grid layout for additional video content
- Hover effects with scale animations
- Auto-playing content indicator

### Features Section
- Three-column grid with animated cards
- Icons from Lucide React
- Hover animations with vertical lift effect

### Stats Section
- Animated counters with gradient text
- Staggered reveal animations
- Professional metrics display

## 🎯 Animations & Effects

- **Scroll-triggered animations** using Framer Motion and Intersection Observer
- **Smooth page transitions** with fade and slide effects
- **Hover interactions** on buttons and cards
- **Auto-scrolling elements** with seamless loops
- **Background effects** including gradients and patterns

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Breakpoint optimization** for all device sizes
- **Touch-friendly interactions** for mobile devices
- **Responsive typography** that scales beautifully

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js and deploy

### Other Platforms
1. Build the project: `npm run build`
2. Start production server: `npm start`

## ⚡ Performance Features

- **Next.js Image Optimization** for faster loading
- **Code splitting** for optimal bundle size
- **SEO optimization** with proper meta tags
- **Lazy loading** for images and components

## 🎨 Customization

### Colors
Edit the gradient colors in `tailwind.config.js` and component files:
- Primary: Purple (`from-purple-600 to-pink-600`)
- Accent: Pink (`from-purple-400 to-pink-400`)
- Background: Dark slate with purple accents

### Animations
Customize animations in:
- `tailwind.config.js` for CSS animations
- Component files for Framer Motion animations

### Content
Update content in:
- `app/page.tsx` for main page content
- Component files for specific section content

## 📞 Support

For questions or support, contact:
- Email: hello@cinebyte.co
- Website: Coming soon!

---

**Built with ❤️ using modern web technologies** 