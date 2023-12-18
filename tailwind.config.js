/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#5D9C59",
      secondary: "#DF2E38",
      neutral: "#DDF7E3",
      accent: "#C7E8CA",
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#5D9C59",
            secondary: "#DF2E38",
            neutral: "#DDF7E3",
            accent: "#C7E8CA",
          },
        },
        dark: {
          colors: {},
        },
      },
    }),
  ],
};
