/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        "custom-sm": "20.094rem",
        "custom-md": "24.094rem",
        "custom-lg": "26.094rem",
      },
      height: {
        "custom-sm": "10.125rem",
        "custom-md": "12.125rem",
        "custom-lg": "15.125rem",
      },
    },
  },
  plugins: [],
};
