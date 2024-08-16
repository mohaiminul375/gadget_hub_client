/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Matemasie: '"Matemasie", sans-serif',
        Raleway: '"Raleway", sans-serif',
      },
    },
  },
  plugins: [daisyui],
  daisyui: { themes: ["light"] },
};
