import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Plant shop specific colors
        sage: {
          50: "hsl(var(--sage-50))",
          100: "hsl(var(--sage-100))",
          200: "hsl(var(--sage-200))",
          300: "hsl(var(--sage-300))",
          400: "hsl(var(--sage-400))",
          500: "hsl(var(--sage-500))",
          600: "hsl(var(--sage-600))",
          700: "hsl(var(--sage-700))",
          800: "hsl(var(--sage-800))",
          900: "hsl(var(--sage-900))",
        },
        forest: {
          50: "hsl(var(--forest-50))",
          100: "hsl(var(--forest-100))",
          200: "hsl(var(--forest-200))",
          300: "hsl(var(--forest-300))",
          400: "hsl(var(--forest-400))",
          500: "hsl(var(--forest-500))",
          600: "hsl(var(--forest-600))",
          700: "hsl(var(--forest-700))",
          800: "hsl(var(--forest-800))",
          900: "hsl(var(--forest-900))",
        },
        terracotta: {
          50: "hsl(var(--terracotta-50))",
          100: "hsl(var(--terracotta-100))",
          200: "hsl(var(--terracotta-200))",
          300: "hsl(var(--terracotta-300))",
          400: "hsl(var(--terracotta-400))",
          500: "hsl(var(--terracotta-500))",
          600: "hsl(var(--terracotta-600))",
          700: "hsl(var(--terracotta-700))",
          800: "hsl(var(--terracotta-800))",
          900: "hsl(var(--terracotta-900))",
        },
        sand: {
          50: "hsl(var(--sand-50))",
          100: "hsl(var(--sand-100))",
          200: "hsl(var(--sand-200))",
          300: "hsl(var(--sand-300))",
          400: "hsl(var(--sand-400))",
          500: "hsl(var(--sand-500))",
          600: "hsl(var(--sand-600))",
          700: "hsl(var(--sand-700))",
          800: "hsl(var(--sand-800))",
          900: "hsl(var(--sand-900))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Playfair Display", "ui-serif", "Georgia"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in": {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/placeholder.svg')",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium:
          "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.05)",
        large: "0 20px 40px -12px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
