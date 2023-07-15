/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "boost-desktop": "url(src/images/bg-boost-desktop.svg)",
        "boost-mobile": "url(src/images/bg-boost-mobile.svg)",
        "shorten-desktop": "url(src/images/bg-shorten-desktop.svg)",
        "shorten-mobile": "url(src/images/bg-shorten-mobile.svg)",
      },
      colors: {
        "my-cyan": "hsl(180, 66%, 49%)",
        "my-dark-violet": "hsl(257, 27%, 26%)",
        "my-red": "hsl(0, 87%, 67%)",
        "my-gray": "hsl(0, 0%, 75%)",
        "my-grayish-violet": "hsl(257, 7%, 63%)",
        "my-very-dark-blue": "hsl(255, 11%, 22%)",
        "my-very-dark-violet": "hsl(260, 8%, 14%)",
      },
      screens: {
        mobile: "375px",
      },
    },
  },
  plugins: [],
};
