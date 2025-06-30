/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],  // Default sans-serif
      },
      colors: {
        // Primary brand colors (deep navy/dark blue)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe', 
          300: '#93c5fd', // blue-300
          400: '#3b82f6', // blue-500 - main accent (darker)
          500: '#2563eb', // blue-600
          600: '#1d4ed8', // blue-700 - main primary (darker)
          700: '#1e40af', // blue-800
          800: '#1e3a8a', // blue-900
          900: '#172554', // blue-950
          950: '#0f1629', // custom darker navy
        },
        // Secondary brand colors (blue-tinted grays)
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#64748b', // slate-500 - darker secondary accent
          500: '#475569', // slate-600
          600: '#334155', // slate-700 - main secondary (darker)
          700: '#1e293b', // slate-800
          800: '#0f1629', // custom dark blue-gray
          900: '#0a0f1c', // custom deeper blue-black
          950: '#050a14', // custom deepest blue-black
        },
        // Surface colors for backgrounds and cards
        surface: {
          // Main backgrounds - NOW PURE BLACK
          900: '#000000', // pure black - main background (changed from blue-tinted)
          800: '#0a0a0a', // very dark gray - secondary background (changed from blue-tinted)
          // Foreground content - dark blue tinted
          700: '#1e293b', // slate-800 with blue tint - interactive elements
          600: '#334155', // slate-700 - borders and dividers
          overlay: {
            light: 'rgba(59, 130, 246, 0.05)', // blue/5
            medium: 'rgba(59, 130, 246, 0.1)', // blue/10
            strong: 'rgba(59, 130, 246, 0.2)', // blue/20
            border: 'rgba(147, 197, 253, 0.2)', // blue-300/20
          },
          glass: {
            light: 'rgba(15, 23, 42, 0.4)', // blue-black/40
            medium: 'rgba(15, 23, 42, 0.6)', // blue-black/60
            strong: 'rgba(15, 23, 42, 0.8)', // blue-black/80
            backdrop: 'rgba(0, 0, 0, 0.9)', // pure black/90 for backdrop
            nav: 'rgba(0, 0, 0, 0.95)', // pure black/95 for nav
          }
        },
        // Text colors
        text: {
          primary: '#ffffff', // white - main text
          secondary: '#cbd5e1', // slate-300 - secondary text
          tertiary: '#94a3b8', // slate-400 - tertiary text
          muted: '#64748b', // slate-500 - muted text
          border: '#1e293b', // slate-800 - borders (dark blue-gray)
        },
        // Accent colors for special elements
        accent: {
          blue: '#3b82f6', // blue-500 - primary blue accent
          navy: '#1e40af', // blue-800 - darker blue accent
          gray: '#64748b', // slate-500 - darker gray
          red: '#dc2626', // red-600 - darker red for dark theme
          success: '#059669', // emerald-600 - darker green
          warning: '#d97706', // amber-600 - darker amber
          info: '#0891b2', // cyan-600 - darker cyan
        },
        // Gradient stops for common gradients
        gradient: {
          primary: {
            from: '#1e40af', // blue-800 - darker primary
            to: '#1e293b', // slate-800 - blue-tinted
          },
          hero: {
            from: '#000000', // pure black
            via: '#172554', // blue-950 - blue accent in middle
            to: '#000000', // pure black
          },
          overlay: {
            from: 'rgba(30, 64, 175, 0.3)', // blue-800/30
            to: 'rgba(30, 41, 59, 0.3)', // slate-800/30
          },
          text: {
            from: '#ffffff', // white
            via: '#93c5fd', // blue-300
            to: '#64748b', // slate-500 - darker end
          },
          background: {
            from: '#000000', // pure black
            to: '#0a0a0a', // very dark gray
          }
        }
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 