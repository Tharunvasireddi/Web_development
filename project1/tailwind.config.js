/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light" : "#fff1e6",
        "light-hover" : "#ffe9d9",
        "light:active" : "#ffed2b0",
        "normal" : "#fd6f00",
        "normal-hover" : "#e46400",
        "normal:active" : "#caa5900",
        "dark" : "#be5300",
        "dark-hover" : "#984300",
        "dark:active" : "#723200",
        "darker" : "#592700"        
    },
  },
  plugins: [],
}
}
