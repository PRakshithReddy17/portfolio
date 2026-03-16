/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      boxShadow: {
        glow: "0 10px 30px rgba(37, 99, 235, 0.25)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top right, rgba(59,130,246,0.22), transparent 35%), radial-gradient(circle at bottom left, rgba(14,165,233,0.18), transparent 30%)",
      },
    },
  },
  plugins: [],
};
