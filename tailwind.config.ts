import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
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
        kpe: {
          green: "hsl(var(--kpe-green))",
          "green-mid": "hsl(var(--kpe-green-mid))",
          "green-soft": "hsl(var(--kpe-green-soft))",
          "green-light": "hsl(var(--kpe-green-light))",
          "green-pale": "hsl(var(--kpe-green-pale))",
          yellow: "hsl(var(--kpe-yellow))",
          "yellow-warm": "hsl(var(--kpe-yellow-warm))",
          "yellow-pale": "hsl(var(--kpe-yellow-pale))",
          gold: "hsl(var(--kpe-gold))",
          "gold-warm": "hsl(var(--kpe-gold-warm))",
          "gold-pale": "hsl(var(--kpe-gold-pale))",
          orange: "hsl(var(--kpe-orange))",
          "orange-warm": "hsl(var(--kpe-orange-warm))",
          "orange-pale": "hsl(var(--kpe-orange-pale))",
          passion: "hsl(var(--kpe-passion))",
          talent: "hsl(var(--kpe-talent))",
          besoins: "hsl(var(--kpe-besoins))",
          aspiration: "hsl(var(--kpe-aspiration))",
          dark: "hsl(var(--kpe-dark))",
          gray: "hsl(var(--kpe-gray))",
          "gray-light": "hsl(var(--kpe-gray-light))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
