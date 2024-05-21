const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      white: "#FFFFFF",
      primary: "#23A6F0",
      primaryhover: "#33ADF1",
      secondary: "#737373",
      dark: "#252B42",
      danger: "#E74040",
      lightgray: "#FAFAFA"
    },
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         "primary": "#2563eb",
  //         "secondary": "#ff00ff",
  //         "accent": "#00ffff",
  //         "neutral": "#6b7280",
  //         "base-100": "#374151",
  //         "info": "#0000ff",
  //         "success": "#00ff00",
  //         "warning": "#00ff00",
  //         "error": "#ff0000",
  //       },
  //     },
  //   ],
  // },
  plugins: [
    flowbite.plugin()
    // require('daisyui')
  ],
};
