import { defineConfig } from "tailwindcss";
import daisyui from "daisyui";

export default defineConfig({
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [daisyui],
});
