/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
            500: '#22c55e', // Green color
            600: '#16a34a',
            700: '#15803d',
            800: "#4C8BF5",
            900: "#357AE8",
        },
        secondary: '#22C55E', // Bright Green for Accents
        accent: '#84CC16', // Lime Green for Highlights
        background: '#F0FDF4', // Light Green-Tinted Background
        text: '#065F46', // Dark Teal for Text
        border: '#A7F3D0', // Soft Greenish Border
        foreground: '#0F5132', // Deep Forest Green for Secondary Text
      },
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        body: ['Roboto', 'system-ui'],
        mono: ['Source Code Pro', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.75rem', // Slightly rounded for a softer, modern UI
      },
    },
  },
  plugins: [],
};
