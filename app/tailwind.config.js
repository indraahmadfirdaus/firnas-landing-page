/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
  
          "primary": "#2563eb",
  
          "secondary": "#ff00ff",
  
          "accent": "#00ffff",
  
          "neutral": "#6b7280",
  
          "base-100": "#374151",
  
          "info": "#0000ff",
  
          "success": "#00ff00",
  
          "warning": "#00ff00",
  
          "error": "#ff0000",
        },
      },
    ],
  },


  plugins: [
    require('daisyui'),
  ],
};
