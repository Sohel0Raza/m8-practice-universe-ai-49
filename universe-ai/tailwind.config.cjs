/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ffb29b",
        
"secondary": "#a8d65e",
        
"accent": "#ae9ddd",
        
"neutral": "#191B1F",
        
"base-100": "#F1E7F3",
        
"info": "#78A3E8",
        
"success": "#13633F",
        
"warning": "#F1B265",
        
"error": "#FB282C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
