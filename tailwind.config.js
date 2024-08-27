/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        p: {
          marineBlue: "hsl(213, 96%, 18%)",
          purplishBlue: "hsl(243, 100%, 62%)",
          pastelBlue: "hsl(228, 100%, 84%)",
          lightBlue: "hsl(206, 94%, 87%)",
          strawberryRed: "hsl(354, 84%, 57%)",
        },
        n: {
          coolGray: "hsl(231, 11%, 63%)",
          lightGray: "hsl(229, 24%, 87%)",
          magnolia: "hsl(217, 100%, 97%)",
          alabaster: "hsl(231, 100%, 99%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      fontFamily: {
        ubuntu: "var(--fontUbuntu)",
      },
      backgroundImage: {
        "bg-sidebar-desktop": "url('/assets/images/bg-sidebar-desktop.svg')",
        bg: "url('/assets/images/bg-sidebar-mobile.svg')",
      },
      height: {
        123: "31rem",
      },
      width: {
        123: "31rem",
      },
      inset: {
        "3px": "3px",
      },
    },
  },
  plugins: [],
};
