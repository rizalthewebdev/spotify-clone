module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {},
   },
   variants: {
      extend: {},
      scrollbar: ["rounded"],
   },
   plugins: [
      require("tailwind-scrollbar"),
      require("@tailwindcss/forms"),
      require("tailwind-scrollbar-hide"),
   ],
};
