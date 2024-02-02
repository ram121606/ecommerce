/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9100ff",

          secondary: "#00bcff",

          accent: "#00a1ae",

          neutral: "#142222",

          info: "#00a2d4",

          success: "#00d985",

          warning: "#ffa200",

          error: "#e44a61",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
