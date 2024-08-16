/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["main", "system-ui", "sans-serif"],
        roboto: ["roboto-mono", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
