/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "boost-desktop": "url(/images/bg-boost-desktop.svg)",
        "boost-mobile": "url(/images/bg-boost-mobile.svg)",
        "shorten-desktop": "url(/images/bg-shorten-desktop.svg)",
        "shorten-mobile": "url(/images/bg-shorten-mobile.svg)",
      },
      colors: {
        "my-cyan": "hsl(180, 66%, 49%)",
        "my-dark-violet": "hsl(257, 27%, 26%)",
        "my-red": "hsl(0, 87%, 67%)",
        "my-grayish-violet": "hsl(257, 7%, 63%)",
        "my-very-dark-blue": "hsl(255, 11%, 22%)",
        "my-very-dark-violet": "hsl(260, 8%, 14%)",
        "my-gray": "hsl(230, 25%, 95%)",
      },
      screens: {
        mobile: "280px",
      },
      lineHeight: {
        16: "4rem",
      },
    },
  },
  plugins: [],
};
