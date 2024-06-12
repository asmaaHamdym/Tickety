/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-img": "url('./src/assets/login.jpeg')",
      },
    },
  },
  plugins: [],
};
