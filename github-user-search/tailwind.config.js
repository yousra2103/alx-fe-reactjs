/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans all JSX, JS, and TS files in the `src` folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

